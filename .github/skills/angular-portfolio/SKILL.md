---
name: angular-portfolio
description: "Architecture Angular 21 pour portfolio dark-mode. Use when: creating components, pages, buttons, icons, design tokens, Tailwind classes, or structuring an Angular standalone project with reusable shared components."
argument-hint: "Describe the component or page to create"
---

# Angular Portfolio — Architecture & Design System

## Overview

Portfolio Angular 21 standalone avec un thème dark-mode accessible (WCAG AA+).  
Architecture stricte : **pages** consomment des **composants partagés réutilisables**.

## Principes fondamentaux

1. **Séparation pages / composants** — une page (`src/app/pages/`) orchestre la mise en page ; elle ne contient PAS de logique d'UI réutilisable. Tout élément réutilisable (bouton, icône, badge, carte, barre de progression…) vit dans `src/app/shared/components/`.
2. **Standalone components** — chaque composant est `standalone: true`, importe ses dépendances directement.
3. **Barrel exports** — tout composant partagé est exporté depuis `src/app/shared/index.ts`.
4. **Aucune balise `<span>`** — utiliser `<p>`, `<strong>`, `<em>`, `<small>` ou des éléments sémantiques pour le texte. Pour les icônes, toujours passer par `<app-svg>` qui rend des inline SVGs.
5. **Design tokens Tailwind** — les couleurs, espacements et rayons sont centralisés dans `tailwind.config.js` sous le préfixe `brand-*`. Voir [design-tokens.md](./references/design-tokens.md).
6. **Icônes = composant `app-svg`** — catalogue d'inline SVGs (Bootstrap Icons). Inputs : `name` (identifiant de l'icône), `size` (px). Pour ajouter une icône, ajouter un bloc `@if (name === 'xxx')` avec le SVG inline dans `svg.component.html`. Chaque `<svg>` porte `aria-hidden="true"`.
7. **Boutons = composant `app-button`** — jamais de `<button>` stylisé en dur. Inputs : `title`, `name` (texte visible), `color` (`primary`|`secondary`|`danger`|`success`|`close`), `svgName?`, `svgSize`, `disabled`, `propagate`. Output : `(action)`. L'icône est optionnelle (contrôlée par `svgName`).
8. **Icône cliquable seule = `<button>` obligatoire** — une icône sans texte visible qui déclenche une action doit être enveloppée dans un `<button type="button" aria-label="...">`. Voir la section [Accessibilité & Icônes](./references/component-patterns.md#accessibilité--icônes-cliquables).

## Structure du projet

```
src/app/
├── pages/                          # Pages (routes)
│   ├── home/
│   ├── projects-gallery/
│   ├── project-detail/
│   ├── skills-overview/
│   ├── skill-detail/
│   ├── career-timeline/
│   └── contact/
├── shared/
│   ├── components/                 # Composants réutilisables
│   │   ├── button/                 # <app-button>
│   │   ├── svg/                    # <app-svg>
│   │   ├── icon-badge/             # <app-icon-badge>
│   │   ├── hero-section/           # <app-hero-section>
│   │   ├── section/                # <app-section>
│   │   ├── breadcrumb/             # <app-breadcrumb>
│   │   ├── cta-section/            # <app-cta-section>
│   │   ├── filter-bar/             # <app-filter-bar>
│   │   ├── progress-bar/           # <app-progress-bar>
│   │   ├── tag-list/               # <app-tag-list>
│   │   ├── stat-card/              # <app-stat-card>
│   │   ├── navbar/                 # <app-navbar>
│   │   └── footer/                 # <app-footer>
│   ├── models/index.ts             # Interfaces partagées
│   ├── services/                   # Services (portfolio-data, etc.)
│   └── index.ts                    # Barrel export
```

## Procédure : créer un nouveau composant partagé

1. Créer le dossier `src/app/shared/components/<nom>/`
2. Créer `<nom>.component.ts` (standalone, imports explicites)
3. Créer `<nom>.component.html` (pas de `<span>`, utiliser `<app-svg>` pour les icônes)
4. Optionnel : `<nom>.component.scss` si styles spécifiques nécessaires
5. Exporter dans `src/app/shared/index.ts`
6. Si le composant a un modèle de données, l'ajouter dans `src/app/shared/models/index.ts`

## Procédure : créer une nouvelle page

1. Créer le dossier `src/app/pages/<nom>/`
2. Créer le component (standalone), importer les composants partagés nécessaires depuis `../../shared`
3. Ajouter la route dans `src/app/app.routes.ts`
4. La page appelle les composants partagés — elle ne redéfinit PAS de boutons, icônes ou cartes en dur

## Patterns d'utilisation des composants clés

Voir [component-patterns.md](./references/component-patterns.md) pour les tableaux d'inputs/outputs et exemples HTML complets.

### Bouton avec icône et action

```html
<app-button
  title="Supprimer"
  svgName="trash"
  [svgSize]="18"
  color="danger"
  [propagate]="false"
  (action)="delete(id)"
></app-button>
```

### Bouton avec texte + icône

```html
<app-button
  title="Voir mes projets"
  name="Voir mes projets"
  svgName="folder_open"
  [svgSize]="20"
  color="primary"
  (action)="goToProjects()"
></app-button>
```

### Bouton sans icône

```html
<app-button
  title="Envoyer"
  name="Envoyer"
  type="submit"
  color="success"
  [disabled]="form.invalid"
  label="Envoyer"
  (action)="onSubmit()"
></app-button>
```

### Icône seule (décorative)

```html
<app-svg name="check" [size]="24" />
```

### Icône cliquable — pattern accessibilité obligatoire

```html
<button type="button" aria-label="Fermer" (click)="close()">
  <app-svg name="close" [size]="20" />
</button>
```

### Ajouter une nouvelle icône dans le catalogue

Dans `svg.component.html`, ajouter un bloc :

```html
@if (name === 'mon_icone') {
<svg
  xmlns="http://www.w3.org/2000/svg"
  [attr.width]="size"
  [attr.height]="size"
  fill="currentColor"
  class="bi bi-mon-icone"
  viewBox="0 0 16 16"
  aria-hidden="true"
>
  <path d="..." />
</svg>
}
```

## Références

- [Design Tokens (couleurs, typo, classes utilitaires)](./references/design-tokens.md)
- [Component Patterns (inputs/outputs, exemples)](./references/component-patterns.md)
