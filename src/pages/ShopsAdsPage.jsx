import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/TemplateHome.css'
import '../styles/pages/ShopsAds.css'

const SHOP_TIERS = [
  { name: 'Boutique Débutante', icon: 'fa-seedling', text: 'Pour découvrir la vente en ligne et publier vos premiers produits.' },
  { name: 'Boutique Standard', icon: 'fa-store', text: 'Une boutique complète pour développer votre clientèle.' },
  { name: 'Boutique Premium', icon: 'fa-gem', text: 'Plus de visibilité et des outils de suivi avancés.' },
  { name: 'Boutique Gold', icon: 'fa-medal', text: 'Une présence renforcée auprès des acheteurs internationaux.' },
  { name: 'Boutique VIP', icon: 'fa-crown', text: 'Le niveau le plus élevé, avec une mise en avant privilégiée.' }
]

const SHOP_STEPS = [
  { icon: 'fa-user-check', title: 'Créez votre compte', text: 'Inscrivez-vous et renseignez votre profil d\'artisan ou d\'entreprise.' },
  { icon: 'fa-store', title: 'Ouvrez votre boutique', text: 'Choisissez votre niveau de boutique et personnalisez votre espace de vente.' },
  { icon: 'fa-box-open', title: 'Ajoutez vos produits', text: 'Publiez vos créations avec photos, description et prix.' },
  { icon: 'fa-circle-check', title: 'Validation', text: 'Votre boutique et vos produits sont vérifiés avant publication.' }
]

const AD_TYPES = [
  { icon: 'fa-tags', title: 'Produits sponsorisés', text: 'Faites remonter vos produits dans les résultats et les catégories.' },
  { icon: 'fa-earth-africa', title: 'Publicité ciblée par pays', text: 'Touchez les acheteurs des pays que vous visez.' },
  { icon: 'fa-star', title: 'Boutiques mises en avant', text: 'Votre boutique est présentée sur la page d\'accueil.' },
  { icon: 'fa-image', title: 'Affiches et bannières', text: 'Affiches, bannières promotionnelles et campagnes événementielles.' }
]

const AD_STEPS = [
  'Choisissez le produit ou la boutique à promouvoir',
  'Sélectionnez le type de publicité et la zone visée',
  'Soumettez votre demande : VPTT l\'examine avant diffusion',
  'Suivez les résultats depuis votre espace'
]

export default function ShopsAdsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">BOUTIQUES & PUBLICITÉ</span>
          <h1>Vendez et faites connaître vos créations</h1>
          <div className="page-hero__rule"></div>
          <p>Ouvrez votre boutique sur VPTT et mettez vos produits en avant auprès d'acheteurs du monde entier</p>
        </div>
      </section>

      <section className="spaces container shops-spaces">
        <article className="space space--shop">
          <div className="space__head">
            <span className="space__icon"><i className="fa-solid fa-store"></i></span>
            <div>
              <h2>Espace Boutiques</h2>
              <h3>Créez votre boutique professionnelle</h3>
              <p>Votre espace de vente personnalisé, avec vos produits, vos commandes et vos statistiques.</p>
            </div>
          </div>
          <ul className="checks">
            {['Catalogue de produits illimité', 'Gestion des commandes', 'Paiement sécurisé', 'Livraison internationale', 'Profil artisan ou entreprise'].map(item => (
              <li key={item}>
                <span className="check-dot"><i className="fa-solid fa-check"></i></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="space__foot">
            <Link to="/account" className="btn btn--green">Ouvrir ma boutique <i className="fa-solid fa-arrow-right ico"></i></Link>
          </div>
        </article>

        <article className="space space--ads">
          <div className="space__head">
            <span className="space__icon"><i className="fa-solid fa-bullhorn"></i></span>
            <div>
              <h2>Espace Publicité</h2>
              <h3>Donnez plus de visibilité à vos produits</h3>
              <p>Des solutions publicitaires pour vos produits, vos boutiques et vos événements.</p>
            </div>
          </div>
          <ul className="checks">
            {['Produits sponsorisés', 'Publicité ciblée par pays', 'Boutiques mises en avant', 'Promotion des artisans', 'Visibilité internationale'].map(item => (
              <li key={item}>
                <span className="check-dot"><i className="fa-solid fa-check"></i></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="space__foot">
            <Link to="/media-hub" className="btn btn--yellow">Lancer une campagne <i className="fa-solid fa-arrow-right ico"></i></Link>
          </div>
        </article>
      </section>

      <section className="container shops-section">
        <h2 className="section-title">Les niveaux de boutique</h2>
        <div className="shops-tiers">
          {SHOP_TIERS.map(t => (
            <div key={t.name} className="shops-tier">
              <span className="shops-tier__icon"><i className={`fa-solid ${t.icon}`}></i></span>
              <h3>{t.name}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container shops-section">
        <h2 className="section-title">Types de publicité</h2>
        <div className="shops-ads">
          {AD_TYPES.map(a => (
            <div key={a.title} className="shops-ad">
              <i className={`fa-solid ${a.icon}`}></i>
              <div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container shops-section">
        <h2 className="section-title">Comment ça marche</h2>
        <div className="shops-flow">
          {SHOP_STEPS.map((s, idx) => (
            <div key={s.title} className="shops-step">
              <span className="shops-step__num">{idx + 1}</span>
              <i className={`fa-solid ${s.icon}`}></i>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <h3 className="shops-sub">Demande de publicité</h3>
        <ol className="shops-ad-steps">
          {AD_STEPS.map(step => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="container shops-cta">
        <h2>Prêt à vendre sur VPTT ?</h2>
        <div className="btn-line" style={{ justifyContent: 'center' }}>
          <Link to="/account" className="btn btn--yellow">Créer ma boutique <i className="fa-solid fa-arrow-right ico"></i></Link>
          <Link to="/contact" className="btn-ghost-line">Nous contacter</Link>
        </div>
      </section>
    </div>
  )
}
