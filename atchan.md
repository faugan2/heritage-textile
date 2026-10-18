# MyAtchan - Plateforme E-Commerce de Mode Africaine

## Vue d'ensemble du projet

**MyAtchan** est une plateforme e-commerce web qui célèbre et vend la mode africaine au monde entier. Le projet vise à créer un marché numérique inclusif pour les artisans, créateurs et petits producteurs locaux de mode africaine.

## Objectifs principaux

1. **Créer un accès au marché mondial** pour les artisans et créateurs de mode africaine
2. **Générer des revenus** pour les producteurs locaux en les mettant en relation directe avec des clients internationaux
3. **Promouvoir la culture et les talents africains** en mode et design textile
4. **Faciliter le commerce** via une plateforme accessible avec des moyens de paiement adaptés

## Marché cible

- **Public principal (phase 1)** : Diaspora africaine en France
- **Expansion future** : Public international (Europe, Amérique du Nord, etc.)
- **Producteurs** : Artisans locaux, petites entreprises de mode, créateurs indépendants

## Modèle d'affaires

- **Partenariats** : Nous nous associons avec les artisans/créateurs pour mettre leurs produits sur la plateforme
- **Produits couverts** : 
  - Pagnes (tissu traditionnel africain)
  - Tissus africains
  - Vêtements et accessoires de mode africaine
  - Articles de design et d'artisanat

## Fonctionnalités clés requises

### Paiements
- Moyens de paiement internationaux (carte bancaire, PayPal, etc.)
- **Moyens de paiement locaux** (TMoney, Flooz) pour faciliter les transactions depuis l'Afrique
- Support multi-devises

### Plateforme
- Catalogue de produits
- Gestion des partenaires/vendeurs
- Système de commande et de panier
- Gestion logistique et livraison
- Système de notation et avis clients

## Stack technique

- **Frontend** : React + Vite + TailwindCSS
- **Routage** : React Router v6
- **État** : Context API (CartContext, FavoritesContext, AuthContext)
- **Icônes** : Lucide React
- **Stockage** : LocalStorage pour panier, favoris et authentification
- **Images** : Assets locaux dans `/src/images/`

## 🚀 Progression du développement

### Phase 1 ✅ COMPLÉTÉE - Fondations et Design

#### Design & Branding ✅
- Couleurs brand définies : OR (#D4AF37), MAGENTA (#E61E8C), ÉMERAUDE (#2D8659), JAUNE (#FFC107)
- Design système : "Propre ET Vibrant" (clean + vibrant)
- Animations : Fade-in, slide-in, scale-in, flip 3D, hover effects
- Responsive design : Mobile-first avec breakpoints sm, md, lg

#### Composants Core ✅
- **Header** : Navigation avec logo coloré, cart icon avec badge, menu mobile
- **BottomTabMenu** : Navigation mobile (Accueil, Produits, Favoris, Compte)
- **ProductCard** : Carte produit avec image, prix, boutons ajouter/favoris
- **HeroImageCarousel** : Carousel 3D avec 3 slides et animation flip

#### Pages implémentées ✅
- **HomePage** : Hero, catégories avec images, produits en vedette, CTA
- **ProductsPage** : Grille produits, filtres (catégorie, prix, tri), mode desktop/mobile
- **ProductPage** : Détails produit, artisan info, produits similaires
- **CartPage** : Panier complètement fonctionnel, gestion quantités, checkout modal
- **ContactPage** : Formulaire contact, info entreprise (adresse: 1 Square Lamartine, 78330 Fontenay-le-Fleury)
- **AboutPage** : Mission, valeurs, stats
- **FavoritesPage** : Liste des produits favoris
- **AccountPage** : Menu compte utilisateur
- **MaintenancePage** : Page d'authentification pour accès en maintenance (mot de passe: myatchan2026)

### Phase 2 ✅ COMPLÉTÉE - Fonctionnalités principales

#### Panier ✅
- Context API pour gestion d'état global
- Ajouter/retirer articles
- Modification des quantités
- Calcul automatique totaux (sous-total + livraison + taxe)
- Persistance localStorage
- Badge panier dynamique (Header desktop + BottomTabMenu mobile)
- BottomSheet modal de confirmation avant paiement

#### Favoris ✅
- Context API pour gestion d'état global
- Ajouter/retirer favoris
- Indicateur visuel (heart rempli en magenta)
- Page favoris avec liste complète
- Persistance localStorage

#### Authentification/Maintenance ✅
- Mode maintenance avec page de connexion
- Mot de passe : myatchan2026
- Persistance de l'état d'authentification
- Bouton déconnexion (desktop + mobile)
- Confirmation avant déconnexion

#### Produits & Images ✅
- 6 produits réels avec images (1-6.png) :
  1. Pagne Wax Premium (45.99€)
  2. Tissu Kente Traditionnel (65.99€)
  3. Ensemble Bazin Riche (89.99€)
  4. Dashiki Artisanal (55.99€)
  5. Bracelet Perles Africaines (29.99€)
  6. Écharpe Indigo Tie Dye (39.99€)
- Images de catégories (pagnes, tissus, vetements, accessoires)
- Images de slides pour carousel hero (3 images)

#### Filtrage & Navigation ✅
- Filtre catégorie depuis HomePage → ProductsPage
- Filtre prix (slider)
- Tri (populaire, récent, prix bas/haut)
- Reset filtres
- Pagination implicite (grille dynamique)

#### Responsivité ✅
- Desktop : layout complet avec sidebar, images grandes
- Tablette : ajustements spacing/padding
- Mobile : layout single column, images plus petites, bottom navigation
- CartPage : responsive avec sticky sidebar seulement sur desktop

### Phase 3 - À FAIRE

#### Backend & Intégrations
- [ ] Firebase ou autre backend pour :
  - [ ] Authentification utilisateur réelle (auth)
  - [ ] Base de données produits
  - [ ] Gestion commandes
  - [ ] Profils artisans/vendeurs
  
#### Paiements
- [ ] Intégration Stripe ou Paypal
- [ ] Intégration TMoney
- [ ] Intégration Flooz
- [ ] Gestion des devises

#### Fonctionnalités avancées
- [ ] Recherche full-text
- [ ] Wishlist utilisateur (persistance backend)
- [ ] Historique commandes
- [ ] Notations & avis
- [ ] Chat/Support utilisateur
- [ ] Dashboard artisan pour gérer leurs produits
- [ ] Admin panel

#### SEO & Performance
- [ ] Meta tags/Open Graph
- [ ] Sitemap XML
- [ ] Optimisation images (lazy loading, compression)
- [ ] Code splitting
- [ ] PWA (Progressive Web App)

#### Tests & QA
- [ ] Unit tests (Jest)
- [ ] Tests d'intégration
- [ ] Tests E2E (Cypress)
- [ ] Tests de performance
- [ ] Tests d'accessibilité (a11y)

#### Déploiement
- [ ] Configuration CI/CD
- [ ] Hosting (Vercel, Netlify, etc.)
- [ ] Domain setup
- [ ] SSL/HTTPS
- [ ] CDN pour images

## Équipe et contacts

- Utilisateur/responsable : support@streakers.ca
- Email support : support@myatchan.com
- Téléphone : +33 6 29 72 05 29
- Adresse : 1 Square Lamartine, 78330 Fontenay-le-Fleury, France

## Notes importantes

- Accent sur l'inclusivité et l'accessibilité financière
- Design cohérent avec brand colors sur toutes les pages
- Mobile-first approach
- Mode maintenance actif (authentification requise)
- Tous les composants réutilisables avec props flexibles
