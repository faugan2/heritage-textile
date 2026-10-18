import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Academy.css'

const COURSES = [
  { id: 1, title: 'Tissage traditionnel', category: 'Artisanat', icon: 'fa-border-all', level: 'Débutant', duration: '12 semaines', students: 1250, rating: 4.9, description: 'Maîtrisez les techniques de tissage africain traditionnel, de la préparation des fibres au produit fini.', instructor: 'Fatou Diallo', price: '49 €', modules: 8, badge: 'Maître tisserand' },
  { id: 2, title: 'Stylisme africain', category: 'Mode', icon: 'fa-shirt', level: 'Intermédiaire', duration: '10 semaines', students: 890, rating: 4.8, description: 'Créez des designs modernes inspirés des motifs et des couleurs africaines authentiques.', instructor: 'Aminata Traoré', price: '59 €', modules: 10, badge: 'Designer certifié' },
  { id: 3, title: 'Marketing digital', category: 'Business', icon: 'fa-bullhorn', level: 'Intermédiaire', duration: '8 semaines', students: 2100, rating: 4.7, description: 'Promouvez vos produits sur les réseaux sociaux et construisez une présence en ligne forte.', instructor: 'Kofi Mensah', price: '39 €', modules: 6, badge: 'Expert marketing' },
  { id: 4, title: 'E-commerce', category: 'Business', icon: 'fa-cart-shopping', level: 'Débutant', duration: '6 semaines', students: 1750, rating: 4.8, description: 'Créez et gérez votre boutique en ligne sur VPTT, et vendez vos produits au monde entier.', instructor: 'Kwame Osei', price: '44 €', modules: 5, badge: 'Entrepreneur e-commerce' },
  { id: 5, title: 'Entrepreneuriat', category: 'Business', icon: 'fa-rocket', level: 'Avancé', duration: '14 semaines', students: 950, rating: 4.9, description: 'Lancez et développez votre entreprise artisanale : business plan, financement et croissance.', instructor: 'Abdi Hassan', price: '79 €', modules: 12, badge: 'Entrepreneur maître' },
  { id: 6, title: 'Blockchain et NFT', category: 'Technologie', icon: 'fa-link', level: 'Avancé', duration: '10 semaines', students: 620, rating: 4.7, description: 'Comprenez la blockchain, créez des passeports numériques et tokenisez vos produits.', instructor: 'Dr Mohamed Ali', price: '99 €', modules: 9, badge: 'Expert blockchain' },
  { id: 7, title: 'Intelligence artificielle', category: 'Technologie', icon: 'fa-robot', level: 'Avancé', duration: '12 semaines', students: 540, rating: 4.6, description: 'L\'IA appliquée à l\'artisanat : reconnaissance des tissus, recommandations et automatisation.', instructor: 'Dr Zainab Omar', price: '109 €', modules: 11, badge: 'Expert IA' },
  { id: 8, title: 'Finance éthique', category: 'Finance', icon: 'fa-coins', level: 'Intermédiaire', duration: '8 semaines', students: 780, rating: 4.8, description: 'Gestion financière, investissement éthique, conformité à la Charia et comptabilité pour artisans.', instructor: 'Hassan Ibrahim', price: '64 €', modules: 7, badge: 'Expert finance' }
]

const LEVELS = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé']

export default function AcademyPage() {
  const [selected, setSelected] = useState(null)
  const [level, setLevel] = useState('Tous')

  const visible = level === 'Tous' ? COURSES : COURSES.filter(c => c.level === level)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">ACADÉMIE</span>
          <h1>VPTT Academy</h1>
          <div className="page-hero__rule"></div>
          <p>Apprenez auprès d'experts pour maîtriser l'artisanat, le business et la technologie</p>
        </div>
      </section>

      <div className="container">
        <div className="level-tabs">
          {LEVELS.map(l => (
            <button key={l} className={`region-tab ${level === l ? 'is-active' : ''}`} onClick={() => setLevel(l)}>{l}</button>
          ))}
        </div>

        <div className="course-grid">
          {visible.map(c => (
            <button key={c.id} className="course" onClick={() => setSelected(c)}>
              <div className="course__head">
                <i className={`fa-solid ${c.icon}`}></i>
                <span className="course__level">{c.level}</span>
              </div>
              <div className="course__body">
                <span className="course__cat">{c.category}</span>
                <h3>{c.title}</h3>
                <div className="course__meta">
                  <span><i className="fa-solid fa-clock"></i> {c.duration}</span>
                  <span><i className="fa-solid fa-users"></i> {c.students.toLocaleString('fr-FR')} apprenants</span>
                  <span><i className="fa-solid fa-star"></i> {c.rating} · {c.modules} modules</span>
                </div>
                <div className="course__foot">
                  <span className="course__price">{c.price}</span>
                  <span className="course__go"><i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setSelected(null)} aria-label="Fermer">
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal__head">
              <div className="modal__icon"><i className={`fa-solid ${selected.icon}`}></i></div>
              <h2>{selected.title}</h2>
              <p>par {selected.instructor}</p>
            </div>

            <p className="modal__desc">{selected.description}</p>

            <div className="modal__stats">
              <div><b>{selected.modules}</b><span>Modules</span></div>
              <div><b>{selected.duration}</b><span>Durée</span></div>
              <div><b><i className="fa-solid fa-star" style={{ color: 'var(--yellow-dark)' }}></i> {selected.rating}</b><span>Note</span></div>
              <div><b>{selected.students.toLocaleString('fr-FR')}</b><span>Apprenants</span></div>
            </div>

            <div className="modal__badge">
              <i className="fa-solid fa-award"></i>
              <div>
                <b>Certificat officiel</b>
                <span>Badge : {selected.badge}</span>
              </div>
            </div>

            <div className="modal__actions">
              <button onClick={() => setSelected(null)}>Fermer</button>
              <button className="primary">S'inscrire maintenant · {selected.price}</button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Commencez votre formation dès aujourd'hui</h2>
          <p>Rejoignez des milliers d'artisans et d'entrepreneurs qui apprennent avec VPTT Academy.</p>
          <button className="btn btn--yellow" onClick={() => setLevel('Tous')}>
            Parcourir toutes les formations <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
