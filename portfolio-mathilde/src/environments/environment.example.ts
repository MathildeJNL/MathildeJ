/**
 * Fichier exemple de configuration environment
 *
 * Pour utiliser ce projet :
 * 1. Copier ce fichier vers environment.ts et environment.prod.ts
 * 2. Remplacer les valeurs par vos clés EmailJS
 *
 * Créer un compte sur https://www.emailjs.com pour obtenir vos clés
 */

export const environment = {
  production: false,

  /**
   * Configuration EmailJS - Service d'envoi d'emails côté client
   *
   * Flux : Formulaire → EmailJS API → Gmail → Ta boîte mail
   */
  emailjs: {
    // Identifiant du service email (Dashboard → Email Services)
    serviceId: 'YOUR_SERVICE_ID',

    // Identifiant du template d'email (Dashboard → Email Templates → Settings)
    templateId: 'YOUR_TEMPLATE_ID',

    // Clé publique (Account → API Keys → Public Key)
    publicKey: 'YOUR_PUBLIC_KEY'
  }
};
