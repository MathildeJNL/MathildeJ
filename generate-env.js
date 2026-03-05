/**
 * Script for generating Angular environment files
 * Used during Vercel deployment to create environment.ts from
 * environment variables defined in the Vercel dashboard.
 *
 * Required Vercel variables:
 *  - EMAILJS_SERVICE_ID
 *  - EMAILJS_TEMPLATE_ID
 *  - EMAILJS_PUBLIC_KEY
 */

const fs = require('fs');
const path = require('path');

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = process.env;

const missing = ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_PUBLIC_KEY'].filter(
    (key) => !process.env[key]
);

if (missing.length > 0) {
    console.error(`[generate-env] Variables d'environnement manquantes : ${missing.join(', ')}`);
    process.exit(1);
}

const envDir = path.join(__dirname, 'src', 'environments');
if (!fs.existsSync(envDir)) {
    fs.mkdirSync(envDir, { recursive: true });
}

const devContent = `export const environment = {
  production: false,
  emailjs: {
    serviceId: '${EMAILJS_SERVICE_ID}',
    templateId: '${EMAILJS_TEMPLATE_ID}',
    publicKey: '${EMAILJS_PUBLIC_KEY}'
  }
};
`;

const prodContent = `export const environment = {
  production: true,
  emailjs: {
    serviceId: '${EMAILJS_SERVICE_ID}',
    templateId: '${EMAILJS_TEMPLATE_ID}',
    publicKey: '${EMAILJS_PUBLIC_KEY}'
  }
};
`;

fs.writeFileSync(path.join(envDir, 'environment.ts'), devContent);
fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), prodContent);

console.log('[generate-env] environment.ts et environment.prod.ts générés avec succès.');
