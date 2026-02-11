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
      value: 'Paris, France',
      colorClass: 'text-red-500',
      bgClass: 'bg-red-100 dark:bg-red-500/20'
    },
    {
      icon: 'schedule',
      title: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h (CET)',
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
      question: 'Quel est votre délai de réponse typique ?',
      answer: 'Je réponds généralement dans les 24-48 heures ouvrées. Pour les urgences, n\'hésitez pas à le mentionner dans votre message.',
      isOpen: false
    },
    {
      question: 'Êtes-vous disponible pour des missions freelance ?',
      answer: 'Oui, je suis ouverte aux missions freelance, notamment en architecture cloud, SRE et développement backend. N\'hésitez pas à décrire votre projet.',
      isOpen: false
    },
    {
      question: 'Travaillez-vous en remote ?',
      answer: 'Absolument ! J\'ai l\'habitude de travailler en full-remote avec des équipes distribuées internationalement. Je suis également flexible pour des missions hybrides en région parisienne.',
      isOpen: false
    },
    {
      question: 'Quels types de projets vous intéressent ?',
      answer: 'Je suis passionnée par les projets impliquant l\'infrastructure cloud, les systèmes distribués, le DevOps/SRE et le développement d\'outils internes. Les startups tech et scale-ups sont mon terrain de jeu préféré.',
      isOpen: false
    }
  ];

  // Subject options
  subjectOptions: string[] = [
    'Opportunité professionnelle',
    'Projet freelance',
    'Collaboration',
    'Mentorat',
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
