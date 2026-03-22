# Component Patterns

Référence canonique de chaque composant partagé : inputs, outputs, et exemples d'utilisation.  
**Règle** : aucune balise `<span>` — utiliser `<i>` pour les icônes, des éléments sémantiques pour le texte.

---

## Accessibilité — Icônes cliquables

> **Règle WCAG** : une icône seule qui déclenche une action **n'est pas accessible** aux lecteurs d'écran. Il faut l'envelopper dans un `<button>` portant un `aria-label` explicite. L'élément `<i>` reçoit alors `aria-hidden="true"` car le libellé est déjà fourni par le bouton.

### ✅ Correct — icône cliquable

```html
<button type="button" aria-label="Ouvrir la recherche">
  <i class="material-symbols-outlined" aria-hidden="true">search</i>
</button>
```

En Angular, avec `app-svg` :

```html
<button type="button" aria-label="Fermer la modale" (click)="close()">
  <app-svg name="close" [size]="20" />
</button>
```

> `app-svg` pose déjà `aria-hidden="true"` sur le `<svg>` — pas besoin de le répéter.

### ❌ Incorrect — icône cliquable sans contexte accessible

```html
<!-- Ne JAMAIS faire ça : pas de rôle, pas de libellé -->
<app-svg name="close" [size]="20" (click)="close()" />
```

### Quand utiliser `<button>` vs `<app-button>`

| Cas                                   | Composant                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------- |
| Bouton avec label texte visible       | `<app-button name="..." color="..." (action)="..." />`                    |
| Bouton icône seule (action implicite) | `<button type="button" aria-label="..."><app-svg name="..." /></button>`  |
| Lien de navigation avec label texte   | `<app-button name="..." color="..." (action)="router.navigate([...])" />` |

---

## `app-svg`

Catalogue d'inline SVGs (Bootstrap Icons). Remplace toute utilisation directe d'icônes dans les templates.

| Input  | Type     | Default | Description                                        |
| ------ | -------- | ------- | -------------------------------------------------- |
| `name` | `string` | `''`    | Identifiant de l'icône (voir catalogue ci-dessous) |
| `size` | `number` | `20`    | Taille en px (width + height du SVG)               |

**Icônes disponibles** : `folder_open`, `mail`, `create`, `check`, `trash`, `close`, `arrow_right`, `search`

> Pour ajouter une icône : ajouter un bloc `@if (name === 'xxx')` dans `svg.component.html` avec le SVG inline Bootstrap Icons. Le `<svg>` doit avoir `aria-hidden="true"`.

```html
<!-- Icône décorative simple -->
<app-svg name="folder_open" [size]="24" />

<!-- Icône dans un bouton via svgName -->
<app-button
  name="Voir mes projets"
  svgName="folder_open"
  [svgSize]="20"
  color="primary"
  (action)="go()"
  title="Voir mes projets"
></app-button>

<!-- Icône cliquable seule — obligatoirement dans un <button> -->
<button type="button" aria-label="Supprimer" (click)="delete()">
  <app-svg name="trash" [size]="18" />
</button>
```

---

## `app-button`

Bouton réutilisable avec variantes visuelles. L'icône est **optionnelle** (contrôlée par l'input `svgName`).

| Input       | Type                                                           | Default       | Description                                        |
| ----------- | -------------------------------------------------------------- | ------------- | -------------------------------------------------- |
| `title`     | `string`                                                       | `''`          | Attribut HTML `title` (tooltip)                    |
| `name`      | `string \| undefined`                                          | `undefined`   | Texte visible dans le bouton                       |
| `type`      | `'button' \| 'submit'`                                         | `'button'`    | Attribut `type` du `<button>` HTML                 |
| `svgName`   | `string \| undefined`                                          | `undefined`   | Nom d'icône à afficher (catalogue `app-svg`)       |
| `svgSize`   | `number`                                                       | `18`          | Taille de l'icône en px                            |
| `class`     | `string \| undefined`                                          | `undefined`   | Classes Tailwind personnalisées (override complet) |
| `label`     | `string`                                                       | `''`          | Valeur de `aria-label` (accessibilité)             |
| `color`     | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'close'` | `'secondary'` | Style visuel                                       |
| `propagate` | `boolean`                                                      | `true`        | Si `false` : stopPropagation + preventDefault      |
| `disabled`  | `boolean`                                                      | `false`       | État désactivé                                     |

| Output   | Type                 | Description  |
| -------- | -------------------- | ------------ |
| `action` | `EventEmitter<void>` | Émis au clic |

**Variantes de couleur** :

| `color`     | Apparence                                  |
| ----------- | ------------------------------------------ |
| `primary`   | Bleu brand, ombre bleue                    |
| `secondary` | Surface + bordure, texte principal         |
| `danger`    | Rouge vif, texte blanc                     |
| `success`   | Vert brand, texte blanc                    |
| `close`     | Transparent, texte muted → texte principal |

> **`[class]` override** : si `class` est fourni, il remplace entièrement les classes générées par `color`. À utiliser uniquement pour des cas exceptionnels.

```html
<!-- Bouton texte + icône -->
<app-button
  title="Voir mes projets"
  name="Voir mes projets"
  svgName="folder_open"
  [svgSize]="20"
  color="primary"
  label="Voir mes projets"
  (action)="goToProjects()"
></app-button>

<!-- Bouton icône seule (action rapide, pas de texte visible) -->
<app-button
  title="Supprimer"
  svgName="trash"
  [svgSize]="18"
  color="danger"
  [propagate]="false"
  label="Supprimer cet élément"
  (action)="delete(id)"
></app-button>

<!-- Bouton texte seul sans icône -->
<app-button
  title="Envoyer"
  name="Envoyer"
  type="submit"
  color="success"
  [disabled]="form.invalid"
  label="Envoyer le formulaire"
  (action)="onSubmit()"
></app-button>
```

---

## `app-icon-badge`

Badge icône avec fond coloré et taille paramétrable.

| Input        | Type                   | Default           | Description             |
| ------------ | ---------------------- | ----------------- | ----------------------- |
| `icon`       | `string`               | `''`              | Nom Material Symbols    |
| `colorClass` | `string`               | `'text-primary'`  | Classe couleur Tailwind |
| `bgClass`    | `string`               | `'bg-primary/10'` | Classe fond Tailwind    |
| `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`            | Taille (8/12/16 = w-h)  |

```html
<app-icon-badge
  icon="code"
  colorClass="text-brand-purple"
  bgClass="bg-brand-purple/20"
  size="lg"
/>
```

---

## `app-hero-section`

En-tête de page avec badge, titre, description et contenu projeté.

| Input            | Type      | Default                        | Description                          |
| ---------------- | --------- | ------------------------------ | ------------------------------------ |
| `badgeIcon`      | `string`  | `''`                           | Icône Material Symbols du badge      |
| `badgeLabel`     | `string`  | `''`                           | Texte du badge                       |
| `title`          | `string`  | `''`                           | Titre principal                      |
| `titleHighlight` | `string`  | `''`                           | Partie du titre en dégradé           |
| `description`    | `string`  | `''`                           | Sous-titre                           |
| `gradientClass`  | `string`  | `'from-primary to-purple-500'` | Classes dégradé                      |
| `bgBlurClass`    | `string`  | `''`                           | Classe fond flou décoratif           |
| `maxWidth`       | `string`  | `'1000px'`                     | Largeur max du conteneur             |
| `hasContent`     | `boolean` | `false`                        | Ajoute un `mb-12` si du contenu suit |

```html
<app-hero-section
  badgeIcon="palette"
  badgeLabel="Compétences"
  title="Mes"
  titleHighlight="Compétences"
  description="Vue d'ensemble de mon parcours technique."
  [hasContent]="true"
>
  <!-- Contenu projeté (stats, etc.) -->
</app-hero-section>
```

---

## `app-section`

Wrapper de section pleine largeur avec titre, sous-titre et fond alterné optionnel.

| Input           | Type                   | Default    | Description                |
| --------------- | ---------------------- | ---------- | -------------------------- |
| `heading`       | `string`               | `''`       | Titre h2 de la section     |
| `subheading`    | `string`               | `''`       | Sous-titre                 |
| `centerHeading` | `boolean`              | `true`     | Centre le titre            |
| `altBg`         | `boolean`              | `false`    | Fond `bg-brand-surface`    |
| `maxWidth`      | `string`               | `'1200px'` | Largeur max                |
| `padding`       | `'sm' \| 'md' \| 'lg'` | `'md'`     | Padding vertical (8/16/20) |

```html
<app-section
  heading="Mes Projets"
  subheading="Une sélection de mes réalisations."
  [altBg]="true"
  padding="lg"
>
  <!-- Grille de cartes projetée -->
</app-section>
```

---

## `app-breadcrumb`

Fil d'Ariane pour la navigation.

| Input    | Type                                  | Default | Description        |
| -------- | ------------------------------------- | ------- | ------------------ |
| `crumbs` | `{ label: string; route?: string }[]` | `[]`    | Liste des segments |

```html
<app-breadcrumb
  [crumbs]="[
  { label: 'Accueil', route: '/' },
  { label: 'Projets', route: '/projects' },
  { label: 'Mon Projet' }
]"
/>
```

---

## `app-cta-section`

Section d'appel à l'action avec boutons primaire et secondaire.

| Input             | Type              | Default | Description       |
| ----------------- | ----------------- | ------- | ----------------- |
| `title`           | `string`          | `''`    | Titre CTA         |
| `description`     | `string`          | `''`    | Texte descriptif  |
| `primaryButton`   | `CtaButton\|null` | `null`  | Bouton principal  |
| `secondaryButton` | `CtaButton\|null` | `null`  | Bouton secondaire |

```html
<app-cta-section
  title="Un projet en tête ?"
  description="Discutons-en !"
  [primaryButton]="{ label: 'Me contacter', icon: 'mail', routerLink: '/contact' }"
  [secondaryButton]="{ label: 'Voir les projets', icon: 'folder_open', routerLink: '/projects' }"
/>
```

---

## `app-filter-bar`

Barre de filtres horizontale avec pills cliquables.

| Input          | Type       | Default    | Description        |
| -------------- | ---------- | ---------- | ------------------ |
| `filters`      | `Filter[]` | `[]`       | Liste des filtres  |
| `activeFilter` | `string`   | `''`       | ID du filtre actif |
| `maxWidth`     | `string`   | `'1200px'` | Largeur max        |

| Output         | Type                   | Description              |
| -------------- | ---------------------- | ------------------------ |
| `filterChange` | `EventEmitter<string>` | ID du filtre sélectionné |

```html
<app-filter-bar
  [filters]="filters"
  [activeFilter]="activeFilter"
  (filterChange)="onFilter($event)"
/>
```

---

## `app-progress-bar`

Barre de progression horizontale.

| Input        | Type     | Default                                       | Description          |
| ------------ | -------- | --------------------------------------------- | -------------------- |
| `value`      | `number` | `0`                                           | Pourcentage (0-100)  |
| `barClass`   | `string` | `'bg-gradient-to-r from-primary to-cyan-500'` | Classe couleur barre |
| `trackClass` | `string` | `'bg-gray-200 dark:bg-background-dark'`       | Classe fond piste    |
| `height`     | `number` | `8`                                           | Hauteur en px        |

```html
<app-progress-bar
  [value]="82"
  barClass="bg-brand-purple"
  trackClass="bg-brand-bg"
/>
```

---

## `app-tag-list`

Liste de tags avec limite d'affichage optionnelle.

| Input        | Type       | Default | Description                      |
| ------------ | ---------- | ------- | -------------------------------- |
| `tags`       | `string[]` | `[]`    | Liste des tags                   |
| `maxDisplay` | `number`   | `0`     | Nombre max affiché (0 = tous)    |
| `tagClass`   | `string`   | `'...'` | Classes Tailwind pour chaque tag |

```html
<app-tag-list
  [tags]="['Angular', 'TypeScript', 'Tailwind']"
  [maxDisplay]="3"
  tagClass="bg-brand-bg text-brand-muted border border-brand-border"
/>
```

---

## `app-stat-card`

Carte statistique avec icône, valeur et label.

| Input        | Type     | Default          | Description          |
| ------------ | -------- | ---------------- | -------------------- |
| `icon`       | `string` | `''`             | Nom Material Symbols |
| `value`      | `string` | `''`             | Valeur affichée      |
| `label`      | `string` | `''`             | Label descriptif     |
| `colorClass` | `string` | `'text-primary'` | Classe couleur icône |

```html
<app-stat-card
  icon="code"
  value="12"
  label="Projets réalisés"
  colorClass="text-brand-blue"
/>
```
