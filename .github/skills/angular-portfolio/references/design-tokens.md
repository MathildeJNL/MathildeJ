# Design Tokens

Palette et tokens Tailwind du portfolio. Source de vérité : `tailwind.config.js`.

## Couleurs — Préfixe `brand-*`

### Fonds & Surfaces

| Token Tailwind  | HEX       | Usage                   |
| --------------- | --------- | ----------------------- |
| `brand-bg`      | `#0B1120` | Fond principal (body)   |
| `brand-surface` | `#151E32` | Cartes, modales, navbar |
| `brand-border`  | `#1F2E4A` | Bordures, séparateurs   |

### Typographie

| Token Tailwind | HEX       | Ratio vs `brand-bg` | Usage                      |
| -------------- | --------- | ------------------- | -------------------------- |
| `brand-text`   | `#F8FAFC` | 15.3:1 (AAA)        | Titres, texte actif        |
| `brand-muted`  | `#8A9BBA` | 5.2:1 (AA)          | Descriptions, méta-données |

### Accents de catégories

| Token Tailwind | HEX       | Catégorie   |
| -------------- | --------- | ----------- |
| `brand-purple` | `#A855F7` | Frontend    |
| `brand-blue`   | `#3B82F6` | Backend     |
| `brand-amber`  | `#F59E0B` | Databases   |
| `brand-green`  | `#22C55E` | Outils      |
| `brand-pink`   | `#EC4899` | Design      |
| `brand-teal`   | `#14B8A6` | Soft Skills |

### Opacités fréquentes

```
bg-brand-purple/10   → fond badge catégorie
bg-brand-purple/20   → fond de tag actif
bg-brand-blue/25     → ombre bouton primaire (shadow-brand-blue/25)
```

## Typographie

- **Font famille** : `Manrope` (via `font-display` dans Tailwind)
- **Titres** : `font-black` ou `font-bold`, `tracking-tight`
- **Corps** : `text-base`, `leading-relaxed`
- **Labels/tags** : `text-xs` ou `text-sm`, `font-medium`

## Espacements & Layout

- **Max width** : `max-w-[1000px]` (contenu), `max-w-[1200px]` (navbar)
- **Padding page** : `px-4 md:px-8`
- **Gap grille** : `gap-6` (cartes), `gap-4` (boutons, tags)
- **Sections** : `py-20`

## Border Radius

| Token          | Valeur    | Usage                    |
| -------------- | --------- | ------------------------ |
| `rounded`      | `0.5rem`  | Tags, petits éléments    |
| `rounded-lg`   | `0.75rem` | Boutons, inputs          |
| `rounded-xl`   | `1rem`    | Cartes                   |
| `rounded-2xl`  | `1.5rem`  | Grandes cartes, sections |
| `rounded-full` | `9999px`  | Badges, avatars          |

## Classes utilitaires globales (`styles.scss`)

| Classe                 | Effet                                                      |
| ---------------------- | ---------------------------------------------------------- |
| `.card-hover`          | `translateY(-4px)` + ombre au hover                        |
| `.btn-hover`           | `translateY(-2px)` + ombre bleue + shine lumineux au hover |
| `.icon-hover`          | `scale(1.15)` + couleur `brand-purple` au hover            |
| `.link-hover`          | Underline animé bleu au hover                              |
| `.tag-hover`           | Scale + fond `brand-blue` + texte blanc au hover           |
| `.bg-gradient-animate` | Fond dégradé animé (hero section)                          |

## Variantes de bouton (`app-button`)

| Variant     | Classes Tailwind                                                                              |
| ----------- | --------------------------------------------------------------------------------------------- |
| `primary`   | `bg-brand-blue hover:bg-brand-blue/80 text-white font-bold shadow-lg shadow-brand-blue/25`    |
| `secondary` | `bg-brand-surface border border-brand-border hover:bg-brand-border text-brand-text font-bold` |
| `ghost`     | `bg-transparent hover:bg-brand-surface text-brand-muted hover:text-brand-text`                |
