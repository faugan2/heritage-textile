import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Investors.css'
import '../styles/pages/Partnerships.css'
import '../styles/pages/Blockchain.css'

const PASSPORTS = [
  {
    id: 1, name: 'Pagne Wax Premium', certificate: 'VPTT-CERT-2024-001547', timestamp: '15 oct. 2024', artisan: 'Fatou Diallo', country: 'Sénégal', price: '45,99 €', status: 'Authentique',
    history: [
      { date: '15 oct. 2024', event: 'Produit créé et certifié' },
      { date: '16 oct. 2024', event: 'Vérifié par VPTT' },
      { date: '17 oct. 2024', event: 'Mis en vente' },
      { date: '20 oct. 2024', event: 'Vendu à un client' }
    ],
    specifications: { 'Matière': '100 % coton biologique', 'Origine': 'Sénégal', 'Poids': '250 g', 'Dimensions': '180 × 100 cm', 'Date de production': '10 oct. 2024', 'Teintures': 'Naturelles certifiées' }
  },
  {
    id: 2, name: 'Tissu Kente traditionnel', certificate: 'VPTT-CERT-2024-001548', timestamp: '12 oct. 2024', artisan: 'Kofi Mensah', country: 'Ghana', price: '65,99 €', status: 'Authentique',
    history: [
      { date: '12 oct. 2024', event: 'Produit créé et certifié' },
      { date: '13 oct. 2024', event: 'Vérifié par VPTT' },
      { date: '14 oct. 2024', event: 'Mis en vente' }
    ],
    specifications: { 'Matière': 'Soie naturelle', 'Origine': 'Ghana', 'Poids': '350 g', 'Dimensions': '200 × 120 cm', 'Date de production': '5 oct. 2024', 'Teintures': 'Naturelles traditionnelles' }
  },
  {
    id: 3, name: 'Ensemble Bazin riche', certificate: 'VPTT-CERT-2024-001549', timestamp: '18 oct. 2024', artisan: 'Aminata Traoré', country: 'Mali', price: '89,99 €', status: 'Authentique',
    history: [
      { date: '18 oct. 2024', event: 'Produit créé et certifié' },
      { date: '19 oct. 2024', event: 'Vérifié par VPTT' },
      { date: '20 oct. 2024', event: 'Mis en vente' },
      { date: '22 oct. 2024', event: 'Vendu à un client' }
    ],
    specifications: { 'Matière': 'Coton damassé premium', 'Origine': 'Mali', 'Poids': '400 g', 'Dimensions': '220 × 130 cm', 'Date de production': '15 oct. 2024', 'Teintures': 'Colorants naturels certifiés' }
  }
]

const STEPS = [
  { icon: 'fa-pen-ruler', title: 'Création', desc: 'L\'artisan crée le produit' },
  { icon: 'fa-shield-halved', title: 'Certification', desc: 'VPTT vérifie et certifie' },
  { icon: 'fa-qrcode', title: 'QR code', desc: 'Un code unique est généré' },
  { icon: 'fa-link', title: 'Traçabilité', desc: 'Enregistrement sur la blockchain' }
]

const BENEFITS = [
  { icon: 'fa-shield-halved', title: 'Authenticité garantie', desc: 'Vérifiez que chaque produit est authentique et non contrefait' },
  { icon: 'fa-link', title: 'Traçabilité complète', desc: 'Historique complet du produit, de la création à la livraison' },
  { icon: 'fa-eye', title: 'Transparence totale', desc: 'Artisan, matières, provenance et certifications' },
  { icon: 'fa-lock', title: 'Sécurité blockchain', desc: 'Données immuables et vérifiables' },
  { icon: 'fa-qrcode', title: 'QR code unique', desc: 'Scannez pour accéder au passeport complet du produit' },
  { icon: 'fa-arrow-trend-up', title: 'Valeur accrue', desc: 'Les produits certifiés gardent et gagnent en valeur' }
]

export default function BlockchainPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('passport')

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">BLOCKCHAIN</span>
          <h1>Passeport numérique</h1>
          <div className="page-hero__rule"></div>
          <p>Traçabilité blockchain complète : vérifiez l'authenticité et l'historique de chaque produit</p>
        </div>
      </section>

      <div className="container">
        <section className="section-band" style={{ paddingBottom: 0 }}>
          <h2 className="section-heading">Comment ça marche</h2>
          <div className="flow" style={{ marginTop: 32 }}>
            {STEPS.map((s, idx) => (
              <div key={idx} className="flow__item">
                <div className="flow__num">{idx + 1}</div>
                <i className={`fa-solid ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {idx < STEPS.length - 1 && <i className="fa-solid fa-arrow-right flow__arrow"></i>}
              </div>
            ))}
          </div>
        </section>

        <section className="section-band">
          <h2 className="section-heading">Avantages du passeport numérique</h2>
          <div className="benefit-cards" style={{ marginTop: 32, gridTemplateColumns: 'repeat(3,1fr)' }}>
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="benefit">
                <i className={`fa-solid ${b.icon}`}></i>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-band" style={{ paddingTop: 0 }}>
          <h2 className="section-heading">Exemples de passeports</h2>
          <div className="passport-grid" style={{ marginTop: 32 }}>
            {PASSPORTS.map(p => (
              <button key={p.id} className={`passport-card ${selected?.id === p.id ? 'is-active' : ''}`} onClick={() => { setSelected(p); setTab('passport') }}>
                <span className="passport-card__qr"><i className="fa-solid fa-qrcode"></i></span>
                <h3>{p.name}</h3>
                <p>par {p.artisan}</p>
                <div className="passport-card__foot">
                  <span className="status-pill"><i className="fa-solid fa-circle-check"></i> {p.status}</span>
                  <span className="passport-card__price">{p.price}</span>
                </div>
              </button>
            ))}
          </div>

          {selected && (
            <div className="passport-detail">
              <div className="passport-detail__head">
                <div className="passport-detail__qr">
                  <div className="qr"><i className="fa-solid fa-qrcode"></i></div>
                  <p>Scannez pour vérifier</p>
                  <b>{selected.name}</b>
                  <span>{selected.artisan} · {selected.country}</span>
                </div>
                <div className="passport-detail__facts">
                  <div>
                    <span>Certificat</span>
                    <b>{selected.certificate}</b>
                  </div>
                  <div>
                    <span>Date de certification</span>
                    <b>{selected.timestamp}</b>
                  </div>
                  <div>
                    <span>Statut</span>
                    <span className="status-pill"><i className="fa-solid fa-circle-check"></i> {selected.status}</span>
                  </div>
                  <button className="passport-detail__close" onClick={() => setSelected(null)}>
                    <i className="fa-solid fa-xmark"></i> Fermer
                  </button>
                </div>
              </div>

              <div className="passport-tabs">
                {[
                  { id: 'passport', label: 'Passeport', icon: 'fa-id-card' },
                  { id: 'history', label: 'Historique', icon: 'fa-clock-rotate-left' },
                  { id: 'specs', label: 'Spécifications', icon: 'fa-sliders' }
                ].map(t => (
                  <button key={t.id} className={`passport-tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)}>
                    <i className={`fa-solid ${t.icon}`}></i> {t.label}
                  </button>
                ))}
              </div>

              <div className="passport-body">
                {tab === 'passport' && (
                  <>
                    <div className="info-pairs">
                      <div><span>Artisan</span><b>{selected.artisan}</b></div>
                      <div><span>Pays</span><b>{selected.country}</b></div>
                    </div>
                    <div className="secure-box">
                      <i className="fa-solid fa-lock"></i>
                      <div>
                        <h4>Sécurité blockchain</h4>
                        <p>Ce certificat est enregistré de manière immuable sur la blockchain VPTT. Il est impossible à falsifier.</p>
                      </div>
                    </div>
                  </>
                )}

                {tab === 'history' && (
                  <div className="history-list">
                    {selected.history.map((h, idx) => (
                      <div key={idx} className="history-item">
                        <span className="history-item__dot"></span>
                        <div>
                          <b>{h.event}</b>
                          <small>{h.date}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'specs' && (
                  <div className="specs-grid">
                    {Object.entries(selected.specifications).map(([key, value]) => (
                      <div key={key}>
                        <span>{key}</span>
                        <b>{value}</b>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        <section className="impact-band" style={{ marginBottom: 64 }}>
          <h2>Vérifiez l'authenticité de vos produits</h2>
          <p>Tous les produits VPTT incluent un passeport numérique vérifiable.</p>
          <button className="btn btn--yellow" onClick={() => navigate('/products')}>
            Parcourir les produits certifiés <i className="fa-solid fa-arrow-right ico"></i>
          </button>
        </section>
      </div>
    </div>
  )
}
