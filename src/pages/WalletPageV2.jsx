import { useState } from 'react'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Academy.css'
import '../styles/pages/Africa.css'
import '../styles/pages/Account.css'
import '../styles/pages/Wallet.css'

const TX_ICON = {
  deposit: { icon: 'fa-arrow-down', bg: '#dcfce7', color: '#059669', sign: '+', label: 'in' },
  refund: { icon: 'fa-rotate-left', bg: '#e0f2fe', color: '#0369a1', sign: '+', label: 'in' },
  payment: { icon: 'fa-bag-shopping', bg: '#fee2e2', color: '#dc2626', sign: '-', label: 'out' },
  withdrawal: { icon: 'fa-arrow-up', bg: '#ffedd5', color: '#ea580c', sign: '-', label: 'out' },
  transfer: { icon: 'fa-right-left', bg: '#fff8e6', color: '#8a5a00', sign: '-', label: 'out' }
}

const PAYMENT_METHODS = [
  { icon: 'fa-credit-card', title: 'Visa ••••', detail: 'Expire 12/26' },
  { icon: 'fa-mobile-screen', title: 'Mobile Money', detail: 'Orange Money, Wave, MTN MoMo' },
  { icon: 'fa-building-columns', title: 'Virement bancaire', detail: 'Compte bancaire lié' }
]

export default function WalletPageV2() {
  const [balance, setBalance] = useState(245.99)
  const [tab, setTab] = useState('overview')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('deposit')
  const [amount, setAmount] = useState('')

  const [transactions] = useState([
    { id: 1, type: 'deposit', amount: 100, date: '2024-10-01', description: 'Dépôt par carte bancaire' },
    { id: 2, type: 'payment', amount: 45.99, date: '2024-09-28', description: 'Paiement, commande n° 12345' },
    { id: 3, type: 'withdrawal', amount: 50, date: '2024-09-25', description: 'Retrait vers compte bancaire' },
    { id: 4, type: 'refund', amount: 25.5, date: '2024-09-20', description: 'Remboursement d\'un produit retourné' },
    { id: 5, type: 'transfer', amount: 15, date: '2024-09-15', description: 'Transfert à un artisan' }
  ])

  const totalDeposits = transactions.filter(t => t.type === 'deposit').reduce((s, t) => s + t.amount, 0)

  const handleTransaction = () => {
    if (!amount || amount <= 0) {
      alert('Veuillez entrer un montant valide')
      return
    }

    if (modalType === 'deposit') {
      setBalance(balance + parseFloat(amount))
    } else if (modalType === 'withdrawal') {
      if (parseFloat(amount) > balance) {
        alert('Solde insuffisant')
        return
      }
      setBalance(balance - parseFloat(amount))
    }

    setAmount('')
    setShowModal(false)
    alert('Transaction effectuée avec succès.')
  }

  const openModal = type => {
    setModalType(type)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">PORTEFEUILLE</span>
          <h1>Mon portefeuille VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Gérez votre solde et vos transactions en toute sécurité</p>
        </div>
      </section>

      <div className="container wallet">
        <div>
          <div className="balance">
            <p>Solde disponible</p>
            <h2>{balance.toFixed(2)} €</h2>
            <div className="balance__actions">
              <button onClick={() => openModal('deposit')}><i className="fa-solid fa-arrow-down"></i> Dépôt</button>
              <button onClick={() => openModal('withdrawal')}><i className="fa-solid fa-arrow-up"></i> Retrait</button>
            </div>
          </div>

          <div className="region-tabs" style={{ margin: '28px 0 24px', justifyContent: 'flex-start' }}>
            {[
              { id: 'overview', label: 'Aperçu', icon: 'fa-chart-line' },
              { id: 'history', label: 'Historique', icon: 'fa-clock-rotate-left' },
              { id: 'settings', label: 'Paramètres', icon: 'fa-gear' }
            ].map(t => (
              <button key={t.id} className={`region-tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)}>
                <i className={`fa-solid ${t.icon}`} style={{ marginRight: 8 }}></i>{t.label}
              </button>
            ))}
          </div>

          {tab === 'overview' && (
            <>
              <div className="wallet-stats">
                <div className="wallet-stat"><b>+{totalDeposits.toFixed(2)} €</b><span>Dépôts totaux</span></div>
                <div className="wallet-stat"><b>{transactions.length}</b><span>Transactions</span></div>
                <div className="wallet-stat"><b><i className="fa-solid fa-star" style={{ color: 'var(--yellow-dark)' }}></i> Membre VIP</b><span>Statut</span></div>
              </div>
              <section className="panel">
                <h3><i className="fa-solid fa-bolt"></i> Actions rapides</h3>
                <div className="quick">
                  <button><i className="fa-solid fa-paper-plane"></i> Transférer</button>
                  <button><i className="fa-solid fa-credit-card"></i> Cartes</button>
                  <button><i className="fa-solid fa-file-invoice"></i> Factures</button>
                  <button><i className="fa-solid fa-shield-halved"></i> Sécurité</button>
                  <button style={{ gridColumn: '1 / -1' }}><i className="fa-solid fa-bolt"></i> Paiement rapide</button>
                </div>
              </section>
            </>
          )}

          {tab === 'history' && (
            <div>
              {transactions.map(tx => {
                const meta = TX_ICON[tx.type]
                return (
                  <div key={tx.id} className="tx">
                    <div className="tx__left">
                      <span className="tx__icon" style={{ background: meta.bg, color: meta.color }}><i className={`fa-solid ${meta.icon}`}></i></span>
                      <div>
                        <b>{tx.description}</b>
                        <small>{tx.date}</small>
                      </div>
                    </div>
                    <span className={`tx__amount is-${meta.label}`}>{meta.sign}{tx.amount.toFixed(2)} €</span>
                  </div>
                )
              })}
            </div>
          )}

          {tab === 'settings' && (
            <>
              <section className="panel">
                <h3><i className="fa-solid fa-credit-card"></i> Moyens de paiement</h3>
                {PAYMENT_METHODS.map((m, idx) => (
                  <div key={idx} className="tx">
                    <div className="tx__left">
                      <span className="tx__icon" style={{ background: 'var(--cream)', color: 'var(--orange)' }}><i className={`fa-solid ${m.icon}`}></i></span>
                      <div>
                        <b>{m.title}</b>
                        <small>{m.detail}</small>
                      </div>
                    </div>
                    <button className="btn-ghost-line" style={{ color: '#b42318', borderColor: '#f5c2c0' }}>Supprimer</button>
                  </div>
                ))}
                <button className="btn-ghost-line" style={{ width: '100%', marginTop: 8 }}>+ Ajouter une carte</button>
              </section>
              <section className="panel">
                <h3><i className="fa-solid fa-bell"></i> Notifications</h3>
                <label className="check-line"><input type="checkbox" defaultChecked /><div><b>Notifications des transactions</b></div></label>
                <label className="check-line"><input type="checkbox" defaultChecked /><div><b>Alertes de solde bas</b></div></label>
              </section>
            </>
          )}
        </div>

        <aside>
          <div className="side-card side-card--secure">
            <i className="fa-solid fa-shield-halved" style={{ fontSize: '1.6rem', color: 'var(--green-dark)' }}></i>
            <h3 style={{ marginTop: 10 }}>Sécurisé</h3>
            <p style={{ fontSize: '.88rem', color: 'var(--text)' }}>Vos transactions sont protégées par un chiffrement SSL 256 bits.</p>
          </div>
          <div className="side-card">
            <h3>Avantages VIP</h3>
            <ul style={{ padding: 0 }}>
              <li><i className="fa-solid fa-circle-check"></i> Frais réduits</li>
              <li><i className="fa-solid fa-circle-check"></i> Accès prioritaire</li>
              <li><i className="fa-solid fa-circle-check"></i> Support 24 h/24</li>
              <li><i className="fa-solid fa-circle-check"></i> Points bonus</li>
            </ul>
          </div>
          <button className="btn btn--yellow" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            Contacter le support
          </button>
        </aside>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" style={{ maxWidth: 440 }} onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setShowModal(false)} aria-label="Fermer">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal__head" style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.4rem' }}>{modalType === 'deposit' ? 'Effectuer un dépôt' : 'Demander un retrait'}</h2>
              <p>Indiquez le montant en euros.</p>
            </div>
            <div className="field">
              <label htmlFor="wallet-amount">Montant (€)</label>
              <input id="wallet-amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0,00" />
            </div>
            <div className="modal__actions">
              <button onClick={() => setShowModal(false)}>Annuler</button>
              <button className="primary" onClick={handleTransaction}>Confirmer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
