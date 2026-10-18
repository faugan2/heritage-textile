import { useState } from 'react'
import '../styles/components/DigitalPassport.css'

export default function DigitalPassport({ productId, productName, artisanName }) {
  const [showDetails, setShowDetails] = useState(false)

  const certificate = {
    number: `VPTT-CERT-2024-${String(productId).padStart(6, '0')}`,
    date: '15 Oct 2024',
    artisan: artisanName,
    status: 'Authentique',
    blockchain: 'Ethereum L2',
    history: [
      { date: '15 Oct 2024', event: 'Création et certification' },
      { date: '16 Oct 2024', event: 'Vérification VPTT' },
      { date: '17 Oct 2024', event: 'Publication' }
    ]
  }

  return (
    <section className="passport" aria-label="Passeport numérique">
      <div className="passport__head">
        <div className="passport__title">
          <span className="passport__icon">
            <i className="fa-solid fa-shield-halved"></i>
          </span>
          <div>
            <h3>Passeport Numérique</h3>
            <p>Certificat Blockchain VPTT</p>
          </div>
        </div>
        <span className="passport__status">
          <i className="fa-solid fa-circle-check"></i> {certificate.status}
        </span>
      </div>

      <div className="passport__body">
        <div className="passport__info">
          <div className="passport__cell">
            <span>Certificat</span>
            <strong>{certificate.number}</strong>
          </div>
          <div className="passport__cell">
            <span>Date</span>
            <strong>{certificate.date}</strong>
          </div>
        </div>

        <button className="passport__toggle" onClick={() => setShowDetails(!showDetails)} aria-expanded={showDetails}>
          <span>Voir le passeport complet</span>
          <i className={`fa-solid ${showDetails ? 'fa-chevron-up' : 'fa-chevron-down'} ico`}></i>
        </button>

        {showDetails && (
          <div className="passport__details">
            <div className="passport__secure">
              <i className="fa-solid fa-lock ico"></i>
              <div>
                <h4>Sécurité Blockchain</h4>
                <p>Ce certificat est enregistré de manière immuable sur la blockchain {certificate.blockchain}. Impossible à falsifier ou modifier. Vérifiable par tous.</p>
              </div>
            </div>

            <div className="passport__qr">
              <i className="fa-solid fa-qrcode ico"></i>
              <p>QR Code unique</p>
              <p>Scannez pour vérifier l'authenticité</p>
            </div>

            <div className="passport__timeline">
              <h4>Historique de certification</h4>
              {certificate.history.map((item, idx) => (
                <div key={idx} className="passport__step">
                  <span className="passport__dot"></span>
                  <div>
                    <strong>{item.event}</strong>
                    <small>{item.date}</small>
                  </div>
                  <i className="fa-solid fa-check passport__check"></i>
                </div>
              ))}
            </div>

            <p className="passport__foot">
              Émis par <b>VPTT</b> le {certificate.date}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
