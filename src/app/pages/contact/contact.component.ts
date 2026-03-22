import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { PortfolioDataService } from '../../shared/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly data = inject(PortfolioDataService);

  readonly contactMethods = this.data.contactMethods;
  readonly socialLinks = this.data.contactSocialLinks;
  readonly faqItems = structuredClone(this.data.faqItems);
  readonly subjectOptions = this.data.subjectOptions;

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  rateLimitError = false;

  // Anti-spam configuration
  private readonly MAX_SUBMISSIONS_PER_HOUR = 3;
  private readonly MIN_FILL_TIME_MS = 3000;
  private readonly STORAGE_KEY = 'contact_submissions';
  private formLoadTime: number = Date.now();

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      website: [''],
    });
    this.formLoadTime = Date.now();
  }

  /**
   * Vérifie si le formulaire est soumis par un bot (honeypot rempli ou soumission trop rapide)
   */
  private isBot(): boolean {
    // Honeypot check - ce champ doit rester vide
    if (this.contactForm.value.website) {
      console.warn('Bot détecté: honeypot rempli');
      return true;
    }

    // Délai minimum de remplissage
    const fillTime = Date.now() - this.formLoadTime;
    if (fillTime < this.MIN_FILL_TIME_MS) {
      console.warn('Bot détecté: soumission trop rapide');
      return true;
    }

    return false;
  }

  /**
   * Vérifie le rate limiting (max X soumissions par heure)
   */
  private isRateLimited(): boolean {
    const now = Date.now();
    const oneHourAgo = now - 60 * 60 * 1000;

    // Récupérer les soumissions précédentes
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    let submissions: number[] = storedData ? JSON.parse(storedData) : [];

    // Filtrer pour ne garder que les soumissions de la dernière heure
    submissions = submissions.filter((timestamp) => timestamp > oneHourAgo);

    return submissions.length >= this.MAX_SUBMISSIONS_PER_HOUR;
  }

  /**
   * Enregistre une nouvelle soumission pour le rate limiting
   */
  private recordSubmission(): void {
    const now = Date.now();
    const oneHourAgo = now - 60 * 60 * 1000;

    const storedData = localStorage.getItem(this.STORAGE_KEY);
    let submissions: number[] = storedData ? JSON.parse(storedData) : [];

    // Nettoyer les anciennes entrées et ajouter la nouvelle
    submissions = submissions.filter((timestamp) => timestamp > oneHourAgo);
    submissions.push(now);

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(submissions));
  }

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Vérification anti-bot (silencieux - simule un succès pour ne pas alerter le bot)
    if (this.isBot()) {
      this.simulateFakeSuccess();
      return;
    }

    // Vérification rate limiting
    if (this.isRateLimited()) {
      this.rateLimitError = true;
      setTimeout(() => {
        this.rateLimitError = false;
      }, 5000);
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
        },
        environment.emailjs.publicKey,
      );

      this.submitSuccess = true;
      this.contactForm.reset();
      this.recordSubmission();
      this.formLoadTime = Date.now(); // Reset pour la prochaine soumission

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      this.submitError = true;

      // Reset error message after 5 seconds
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  /**
   * Simule un succès pour les bots (ne pas leur révéler qu'ils ont été détectés)
   */
  private simulateFakeSuccess(): void {
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      this.formLoadTime = Date.now();
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}
