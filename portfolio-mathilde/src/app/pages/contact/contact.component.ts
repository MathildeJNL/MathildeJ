import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // Contact Methods
  contactMethods: ContactMethod[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'mathilde&#64;example.dev',
      link: 'mailto:mathilde@example.dev',
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
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    this.isSubmitting = false;
    this.submitSuccess = true;
    this.contactForm.reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }

  get f() {
    return this.contactForm.controls;
  }
}
