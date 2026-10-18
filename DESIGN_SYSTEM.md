# Heritage Textiles - Design System

## 🎨 COULEURS (Color Palette)

### Primaires
- **Gold/Doré**: `#D4AF37` - Accents, highlights, premium elements
- **Noir/Dark**: `#2C2C2C` - Texte principal, titres
- **Blanc**: `#FFFFFF` - Backgrounds, éléments clairs
- **Gris clair**: `#F5F5F5` - Backgrounds secondaires, separateurs

### Secondaires
- **Gris moyen**: `#4A4A4A` - Texte secondaire, descriptions
- **Gris très clair**: `#9CA3AF` - Texte tertaire, footers
- **Noir semi-transparent**: `#000000` avec opacité - Overlays, shadows

### Backgrounds
- **White**: `#FFFFFF` - Sections principales
- **Light gray**: `#F5F5F5` - Alt backgrounds
- **Very light**: `#FFFBF7` - Theme color

---

## 🔤 TYPOGRAPHIE (Typography)

### Font Family
- **Primary**: `Roboto` (fallback: system sans-serif)
- **Weight Light**: 300
- **Weight Regular**: 400
- **Weight Semibold**: 600
- **Weight Bold**: 700

### Tailles de texte (Desktop / Mobile)
```
H1 (Hero Title):     text-8xl / text-3xl (110px / 30px)
H2 (Section Title):  text-4xl / text-2xl (36px / 24px)
H3 (Subtitle):       text-xl / text-base (20px / 16px)
Paragraph:           text-base / text-sm (16px / 14px)
Small text:          text-xs / text-[10px] (12px / 10px)
```

### Line Height
- Titres: `leading-[0.92]` ou `leading-[1]`
- Paragraphes: `leading-relaxed` (1.625)
- Normal: `leading-tight`

---

## 🎯 COMPOSANTS (Components)

### Cards (Standard)
```css
border: 1px solid #E5E7EB (border-gray-200)
border-radius: 8px (rounded-lg)
padding: 16px (p-4) / 20px (p-5)
shadow: 0 1px 3px rgba(0,0,0,0.1) (shadow-md)
hover:shadow-lg
hover:border-color: #D4AF37
transition: all 0.3s
```

### Buttons (CTA)
```css
padding: 12-16px (py-3) / 16-20px (py-4) horizontally 32-40px
border: 2px solid #FFFFFF
background: transparent (hover: white)
color: white (hover: black)
font-weight: bold (font-bold)
uppercase
transition: all 0.3s duration-300
```

### Icons (Ionicons)
- **Source**: Ionicons v7.1.0
- **Naming**: `{name}-outline` format
- **Sizes**: 12px, 16px, 20px, 24px, 32px, 40px
- **Color**: Inherit from text color (text-current)
- **Common icons**:
  - `bag-outline` - Shopping
  - `compass-outline` - Discover
  - `megaphone-outline` - Media
  - `sparkles-outline` - AI/Premium
  - `arrow-forward-outline` - CTA arrow
  - `chevron-back/forward-outline` - Navigation
  - `search-outline` - Search
  - `heart-outline` - Favorites
  - `cart-outline` - Shopping cart

### Links & Navigation
```css
color: #2C2C2C ou #FFFFFF (depends on context)
hover:opacity-80 (subtle fade)
transition: all 0.3s
```

---

## 📐 ESPACEMENT (Spacing & Layout)

### Padding/Margin Scale (Tailwind)
```
Mobile:  px-4 (16px), py-8 (32px)
Tablet:  sm:px-6 (24px), sm:py-12 (48px)
Desktop: lg:px-16 (64px), lg:py-16 (64px)
```

### Gap Between Elements
- Cards grid: `gap-4` (16px) / `gap-6` (24px)
- List items: `gap-2` (8px) à `gap-3` (12px)
- Section spacing: `mb-6 sm:mb-12 lg:mb-16`

### Container Width
- **Max width**: `max-w-7xl` (80rem / 1280px)
- **Centered**: `mx-auto`
- **Full width**: `w-full`

---

## 🔄 RESPONSIVE BREAKPOINTS (Tailwind)

```
Mobile first approach:
- Base:  < 640px (default)
- sm:    640px+
- md:    768px+
- lg:    1024px+
- xl:    1280px+
- 2xl:   1536px+
```

### Grid Responsiveness
```
Products/Categories:   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
Trust Items:          grid-cols-2 md:grid-cols-3 lg:grid-cols-4
4 Pôles:              grid-cols-2 lg:grid-cols-4
Menu:                 hidden sm:flex (mobile menu, desktop menu)
```

---

## 🎭 HÉROS (Hero Section)

### Background & Overlay
- Image: `object-cover object-center`
- Overlay: `bg-gradient-to-r from-black/70 via-black/50 to-black/30`
- Min height: `min-h-screen`

### Text Shadow
```css
text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6)
```

### Text Container
```css
background: rgba(0, 0, 0, 0.05)
backdrop-filter: blur(4px)
padding: 24px sm:32px md:40px
border-radius: 8px
```

---

## 🎨 SECTIONS & BACKGROUNDS

### Section Structure
```css
background: white / #F5F5F5
padding: py-8 sm:py-12 lg:py-16
margin-top: mt-20
max-width: max-w-7xl mx-auto
padding-horizontal: px-4 sm:px-6 lg:px-8
```

### Title with Underline (4 Pôles pattern)
```css
Title: text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-widest
Color: #D4AF37
Underline: h-1 w-16 mx-auto (doré)
Spacing below: mb-8 sm:mb-12 lg:mb-16
```

---

## ✨ ANIMATIONS & TRANSITIONS

### Fade In
```css
animate-in fade-in duration-500 / duration-700
delay-100 / delay-200 / delay-300 / delay-400 / delay-500 / delay-600
```

### Hover Effects
```css
hover:opacity-80 - Subtle fade
hover:shadow-lg - Shadow increase
hover:border-[#D4AF37] - Border color change
hover:scale-110 - Icon grow
transition-all duration-300
```

### Slide In (Mobile menus)
```css
animate-in slide-in-from-top-4 duration-300
```

---

## 🔒 CONSISTANCE

### À appliquer partout:
1. ✅ Titres: **Noir + tracking-widest + uppercase** pour les sections principales
2. ✅ Sous-titres: **Doré (#D4AF37)** pour les accents
3. ✅ Cards: **Border gray-200 + hover doré** pour l'interactivité
4. ✅ Spacing: **Responsive (mobile < tablet < desktop)**
5. ✅ Icons: **Ionicons uniquement**, pas d'emoji
6. ✅ Couleurs: **3 couleurs main: Doré, Noir, Blanc**
7. ✅ Transitions: **all 0.3s** pour smooth effect
8. ✅ Backgrounds: **White ou Light gray, jamais d'autres couleurs**

---

## 📦 TEMPLATE DE PAGE STANDARD

```jsx
<div className="min-h-screen bg-white">
  {/* Header Section */}
  <section className="relative overflow-hidden py-12 bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
        Page Title
      </h1>
      <p className="text-lg sm:text-xl" style={{ color: '#4A4A4A' }}>
        Subtitle or description
      </p>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Content here */}
    </div>
  </section>
</div>
```

---

## 📋 CHECKLIST POUR CHAQUE PAGE

- [ ] Utiliser `max-w-7xl mx-auto` pour centrage
- [ ] Responsive padding: `px-4 sm:px-6 lg:px-8`
- [ ] Responsive vertical spacing: `py-8 sm:py-12 lg:py-16`
- [ ] Titres: noir, bold, uppercase pour sections
- [ ] Sous-titres: doré (#D4AF37) si besoin
- [ ] Cards: border-gray-200, hover:border-doré
- [ ] Icons: Ionicons uniquement (Icon component)
- [ ] Couleurs texte: noir ou gris (pas d'autres)
- [ ] Transitions smooth: `transition-all duration-300`
- [ ] Mobile first: base styles then sm: md: lg:

---

**Version**: 1.0  
**Last Updated**: 2026-09-28  
**Maintainer**: Heritage Textiles Team
