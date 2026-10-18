import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Info.css'
import '../styles/pages/Ambassadors.css'
import '../styles/pages/Academy.css'
import '../styles/pages/Pillars.css'

const AMBASSADORS = [
  { id: 1, name: 'Fatou Diallo', code: 'SN', country: 'Sénégal', role: 'Ambassadrice régionale', experience: '15 ans', specialty: 'Pagnes wax et indigo', bio: 'Fondatrice de sa propre marque de textiles wax, Fatou guide les artisans sénégalais vers une reconnaissance internationale.', achievements: ['320 artisans formés', '1 250 produits listés', '450 K€ générés', 'Prix innovation 2025'], contact: 'fatou@heritagetextiles.com', whatsapp: '+221 91 538 518', instagram: '@fatoudiallo' },
  { id: 2, name: 'Kofi Mensah', code: 'GH', country: 'Ghana', role: 'Ambassadeur principal', experience: '12 ans', specialty: 'Kente et tissage traditionnel', bio: 'Maître artisan du kente, reconnu internationalement, Kofi préserve les traditions tout en modernisant les techniques.', achievements: ['287 artisans certifiés', '980 produits premium', '380 K€ de ventes', 'Ambassadeur UNESCO'], contact: 'kofi@heritagetextiles.com', whatsapp: '+233 20 123 4567', instagram: '@kofimensah' },
  { id: 3, name: 'Aminata Traoré', code: 'ML', country: 'Mali', role: 'Ambassadrice culturelle', experience: '10 ans', specialty: 'Bogolan et tissage indigo', bio: 'Experte des techniques ancestrales du bogolan, Aminata crée des ponts entre tradition et modernité.', achievements: ['195 artisans soutenus', '720 créations uniques', '290 K€ distribués', 'Conférencière internationale'], contact: 'aminata@heritagetextiles.com', whatsapp: '+223 76 123 456', instagram: '@aminatatraore' },
  { id: 4, name: 'Kwame Osei', code: 'CI', country: 'Côte d\'Ivoire', role: 'Responsable logistique', experience: '8 ans', specialty: 'Dashiki et ankara', bio: 'Expert en logistique et en qualité, Kwame veille à ce que chaque produit respecte les normes VPTT.', achievements: ['156 artisans partenaires', '580 produits certifiés', '220 K€ de transactions', 'Certification ISO'], contact: 'kwame@heritagetextiles.com', whatsapp: '+225 07 123 456', instagram: '@kwameosei' },
  { id: 5, name: 'Thandi Mthembu', code: 'ZA', country: 'Afrique du Sud', role: 'Ambassadrice marketing', experience: '9 ans', specialty: 'Beadwork et arts textiles', bio: 'Spécialiste du marketing numérique, Thandi amplifie la voix des artisans sud-africains sur les réseaux sociaux.', achievements: ['176 artisans engagés', '650 produits en ligne', '310 K€ de ventes', '50 K abonnés'], contact: 'thandi@heritagetextiles.com', whatsapp: '+27 82 123 4567', instagram: '@thanmthembu' },
  { id: 6, name: 'Yves Kamto', code: 'CM', country: 'Cameroun', role: 'Ambassadeur formation', experience: '7 ans', specialty: 'Batik et techniques modernes', bio: 'Formateur passionné, Yves conçoit des programmes de développement des compétences pour les artisans.', achievements: ['142 artisans formés', '480 produits', '180 K€ générés', '3 centres de formation'], contact: 'yves@heritagetextiles.com', whatsapp: '+237 67 123 456', instagram: '@yveskamto' },
  { id: 7, name: 'Fatima Hassan', code: 'EG', country: 'Égypte', role: 'Ambassadrice patrimoine', experience: '11 ans', specialty: 'Tissus brodés traditionnels', bio: 'Conservatrice des techniques anciennes, Fatima préserve le patrimoine textile égyptien.', achievements: ['98 artisans du patrimoine', '340 pièces ancestrales', '95 K€ de ventes', 'Musée numérique VPTT'], contact: 'fatima@heritagetextiles.com', whatsapp: '+20 100 123 4567', instagram: '@fatimahassan' },
  { id: 8, name: 'Abeba Tadesse', code: 'ET', country: 'Éthiopie', role: 'Ambassadrice innovation', experience: '6 ans', specialty: 'Shema et tissage contemporain', bio: 'Innovatrice technologique, Abeba intègre la blockchain et l\'IA aux processus artisanaux.', achievements: ['87 artisans connectés', '320 produits tracés', '75 K€ de transactions', 'Hackathon VPTT'], contact: 'abeba@heritagetextiles.com', whatsapp: '+251 9 123 456', instagram: '@abebatadesse' }
]

const initials = name => name.split(' ').map(w => w[0]).slice(0, 2).join('')

export default function AmbassadorsPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">AMBASSADEURS</span>
          <h1>Ambassadeurs VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Les visages et les voix de l'expansion africaine de VPTT : 8 ambassadeurs, plus de 1 200 artisans accompagnés</p>
        </div>
      </section>

      <div className="container">
        <div className="amb-grid">
          {AMBASSADORS.map(a => (
            <button key={a.id} className="amb-card" onClick={() => setSelected(a)}>
              <div className="amb-card__avatar">{initials(a.name)}</div>
              <span className="amb-card__code">{a.code}</span>
              <h3>{a.name}</h3>
              <p className="amb-card__country">{a.country}</p>
              <span className="amb-card__role">{a.role}</span>
              <div className="amb-card__foot">
                <span>Expérience</span>
                <b>{a.experience}</b>
              </div>
              <span className="amb-card__more">Voir le profil <i className="fa-solid fa-arrow-right"></i></span>
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
              <div className="modal__icon">{initials(selected.name)}</div>
              <h2>{selected.name}</h2>
              <p>{selected.role} · {selected.country}</p>
            </div>

            <p className="modal__desc">{selected.bio}</p>

            <h3 className="amb-modal__h">Accomplissements</h3>
            <ul className="resp-list" style={{ marginBottom: 22 }}>
              {selected.achievements.map((a, idx) => (
                <li key={idx}><i className="fa-solid fa-circle-check"></i>{a}</li>
              ))}
            </ul>

            <h3 className="amb-modal__h">Nous contacter</h3>
            <div className="amb-contact">
              <span><i className="fa-solid fa-envelope"></i> {selected.contact}</span>
              <span><i className="fa-brands fa-whatsapp"></i> {selected.whatsapp}</span>
              <span><i className="fa-brands fa-instagram"></i> {selected.instagram}</span>
            </div>

            <div className="modal__actions">
              <button onClick={() => setSelected(null)}>Fermer</button>
              <button className="primary" onClick={() => navigate('/contact')}>Envoyer un message</button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Rejoignez notre réseau d'ambassadeurs</h2>
          <p>Vous êtes passionné par les textiles africains et souhaitez créer un impact ? Postulez pour devenir ambassadeur VPTT.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/register')}>
            Devenir ambassadeur <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
