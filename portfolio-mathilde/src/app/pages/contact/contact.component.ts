import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
  colorClass: string;
  bgClass: string;
}

interface SocialLink {
  icon: string;
  name: string;
  url: string;
  colorClass: string;
}

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  rateLimitError = false;

  // Anti-spam configuration
  private readonly MAX_SUBMISSIONS_PER_HOUR = 3;
  private readonly MIN_FILL_TIME_MS = 3000; // 3 secondes minimum pour remplir
  private readonly STORAGE_KEY = 'contact_submissions';
  private formLoadTime: number = Date.now();

  // Contact Methods
  contactMethods: ContactMethod[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'mathilde&#64;example.dev',
      link: 'mailto:mathilde.dev.web@gmail.com',
      colorClass: 'text-primary',
      bgClass: 'bg-blue-100 dark:bg-primary/20'
    },
    {
      icon: 'location_on',
      title: 'Localisation',
      value: 'Centre-Val de Loire, France',
      colorClass: 'text-red-500',
      bgClass: 'bg-red-100 dark:bg-red-500/20'
    },
    {
      icon: 'schedule',
      title: 'Disponibilité',
      value: 'Lun - Ven, 9h - 17h (CET)',
      colorClass: 'text-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/20'
    }
  ];

  // Social Links
  socialLinks: SocialLink[] = [
    {
      icon: 'github',
      name: 'GitHub',
      url: 'https://github.com/MathildeJNL',
      colorClass: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mathilde-jnl/',
      colorClass: 'hover:text-blue-600'
    }
  ];

  // FAQ
  faqItems: FaqItem[] = [
    {
      question: 'Comment continuez-vous à apprendre ?',
      answer: 'Je me forme en continu grâce à des projets personnels, des ressources en ligne (documentation, cours, articles techniques) et des challenges pour renforcer mes bases. L\'apprentissage fait partie intégrante de ma pratique quotidienne.',
      isOpen: false
    },
    {
      question: 'Pouvez-vous travailler en remote ou en hybride ?',
      answer: 'Oui, je suis tout à fait à l\'aise en remote. Je peux également travailler en hybride selon la localisation et l\'organisation de l\'équipe.',
      isOpen: false
    },
    {
      question: 'Quels sont vos horaires de travail habituels ?',
      answer: 'Je travaille principalement en journée, du lundi au vendredi, généralement entre 9h et 17h. Je privilégie un rythme stable tout en restant flexible selon les besoins du projet, tant que cela est anticipé.',
      isOpen: false
    }
  ];

  // Subject options
  subjectOptions: string[] = [
    'Opportunité professionnelle',
    'Projet freelance',
    'Collaboration',
    'Question technique',
    'Autre'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      // Honeypot field - doit rester vide
      website: ['']
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
    const oneHourAgo = now - (60 * 60 * 1000);

    // Récupérer les soumissions précédentes
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    let submissions: number[] = storedData ? JSON.parse(storedData) : [];

    // Filtrer pour ne garder que les soumissions de la dernière heure
    submissions = submissions.filter(timestamp => timestamp > oneHourAgo);

    return submissions.length >= this.MAX_SUBMISSIONS_PER_HOUR;
  }

  /**
   * Enregistre une nouvelle soumission pour le rate limiting
   */
  private recordSubmission(): void {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);

    const storedData = localStorage.getItem(this.STORAGE_KEY);
    let submissions: number[] = storedData ? JSON.parse(storedData) : [];

    // Nettoyer les anciennes entrées et ajouter la nouvelle
    submissions = submissions.filter(timestamp => timestamp > oneHourAgo);
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
          message: this.contactForm.value.message
        },
        environment.emailjs.publicKey
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
