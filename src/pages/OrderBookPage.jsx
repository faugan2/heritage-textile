import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TRADING_FEES, computeTradeFees } from '../configs/tradingFees'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Orders.css'

const PAYER_LABELS = {
  buyer: 'à la charge de l\'acheteur',
  seller: 'à la charge du vendeur',
  split: 'partagés entre acheteur et vendeur'
}

const SEED_ORDERS = [
  { seq: 1, side: 'sell', price: 45, qty: 50, remaining: 50 },
  { seq: 2, side: 'sell', price: 48, qty: 80, remaining: 80 },
  { seq: 3, side: 'buy', price: 42, qty: 100, remaining: 100 },
  { seq: 4, side: 'buy', price: 40, qty: 60, remaining: 60 }
]

function matchOrder(book, incoming) {
  const resting = book.map(o => ({ ...o }))
  const candidates = resting
    .filter(o => o.side !== incoming.side && o.remaining > 0)
    .filter(o => incoming.side === 'buy' ? o.price <= incoming.price : o.price >= incoming.price)
    .sort((a, b) => {
      const byPrice = incoming.side === 'buy' ? a.price - b.price : b.price - a.price
      return byPrice || a.seq - b.seq
    })

  let remaining = incoming.qty
  const trades = []

  for (const maker of candidates) {
    if (remaining <= 0) break
    const qty = Math.min(remaining, maker.remaining)
    maker.remaining -= qty
    remaining -= qty
    trades.push({
      id: `${Date.now()}-${trades.length}`,
      side: incoming.side,
      price: maker.price,
      qty,
      ...computeTradeFees(maker.price * qty)
    })
  }

  const nextSeq = Math.max(0, ...resting.map(o => o.seq)) + 1
  const updated = resting.filter(o => o.remaining > 0)
  if (remaining > 0) {
    updated.push({ seq: nextSeq, side: incoming.side, price: incoming.price, qty: remaining, remaining })
  }

  return { book: updated, trades }
}

const formatEuro = value => `${value.toFixed(2)} €`

export default function OrderBookPage() {
  const navigate = useNavigate()
  const [book, setBook] = useState(SEED_ORDERS)
  const [trades, setTrades] = useState([])
  const [side, setSide] = useState('buy')
  const [price, setPrice] = useState('')
  const [qty, setQty] = useState('')
  const [error, setError] = useState('')

  const priceNum = parseFloat(price)
  const qtyNum = parseInt(qty, 10)
  const hasValidInput = priceNum > 0 && qtyNum > 0
  const preview = hasValidInput ? computeTradeFees(priceNum * qtyNum) : null

  const asks = book.filter(o => o.side === 'sell').sort((a, b) => a.price - b.price || a.seq - b.seq)
  const bids = book.filter(o => o.side === 'buy').sort((a, b) => b.price - a.price || a.seq - b.seq)

  const handleSubmit = e => {
    e.preventDefault()
    if (!hasValidInput) {
      setError('Indiquez un prix et une quantité supérieurs à zéro.')
      return
    }
    setError('')
    const result = matchOrder(book, { side, price: priceNum, qty: qtyNum })
    setBook(result.book)
    setTrades(prev => [...result.trades, ...prev])
    setPrice('')
    setQty('')
  }

  const handleReset = () => {
    setBook(SEED_ORDERS)
    setTrades([])
    setError('')
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <span className="tag">MARCHÉ</span>
          <h1>Ordres d'achat et de vente</h1>
          <div className="page-hero__rule"></div>
          <p>Un algorithme apparie automatiquement les ordres au meilleur prix, avec des frais de plateforme intégrés à chaque transaction</p>
        </div>
      </section>

      <div className="container">
        <div className="orders-layout">
          <form className="order-form" onSubmit={handleSubmit}>
            <h2>Passer un ordre</h2>

            <div className="side-switch">
              <button type="button" className={`is-buy ${side === 'buy' ? 'is-active' : ''}`} onClick={() => setSide('buy')}>Acheter</button>
              <button type="button" className={`is-sell ${side === 'sell' ? 'is-active' : ''}`} onClick={() => setSide('sell')}>Vendre</button>
            </div>

            <div className="field">
              <label htmlFor="order-price">Prix par unité (€)</label>
              <input id="order-price" type="number" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="order-qty">Quantité (unités)</label>
              <input id="order-qty" type="number" min="1" step="1" value={qty} onChange={e => setQty(e.target.value)} />
            </div>

            {preview && (
              <div className="fee-preview">
                <span>Montant brut : <b>{formatEuro(priceNum * qtyNum)}</b></span>
                <span className="is-fee">Frais plateforme ({TRADING_FEES.rate * 100} %) : {formatEuro(preview.fee)}</span>
                <span>Frais {PAYER_LABELS[TRADING_FEES.payer]}</span>
                <span>Total payé par l'acheteur : <b>{formatEuro(preview.buyerTotal)}</b></span>
                <span>Net reçu par le vendeur : <b>{formatEuro(preview.sellerNet)}</b></span>
              </div>
            )}

            {error && <p className="order-error">{error}</p>}

            <button type="submit" className="btn btn--yellow">
              Envoyer l'ordre <i className="fa-solid fa-arrow-right ico"></i>
            </button>
            <button type="button" className="btn-ghost" onClick={handleReset}>
              Réinitialiser la simulation
            </button>
          </form>

          <div>
            <div className="book-grid">
              <div className="book-card">
                <h2><i className="fa-solid fa-arrow-trend-down"></i> Ordres de vente</h2>
                {asks.length === 0 && <p className="book-empty">Aucun ordre de vente</p>}
                {asks.map(o => (
                  <div key={o.seq} className="book-row">
                    <b>{formatEuro(o.price)}</b>
                    <span>{o.remaining} unités</span>
                  </div>
                ))}
              </div>

              <div className="book-card">
                <h2><i className="fa-solid fa-arrow-trend-up"></i> Ordres d'achat</h2>
                {bids.length === 0 && <p className="book-empty">Aucun ordre d'achat</p>}
                {bids.map(o => (
                  <div key={o.seq} className="book-row">
                    <b>{formatEuro(o.price)}</b>
                    <span>{o.remaining} unités</span>
                  </div>
                ))}
              </div>

              <div className="trades">
                <h2>Transactions exécutées</h2>
                {trades.length === 0 ? (
                  <p className="book-empty">Aucune transaction pour le moment. Passez un ordre qui rencontre un ordre existant.</p>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Prix</th>
                        <th>Qté</th>
                        <th>Brut</th>
                        <th>Frais</th>
                        <th>Acheteur paie</th>
                        <th>Vendeur reçoit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trades.map(t => (
                        <tr key={t.id}>
                          <td>{formatEuro(t.price)}</td>
                          <td>{t.qty}</td>
                          <td>{formatEuro(t.price * t.qty)}</td>
                          <td className="fee">{formatEuro(t.fee)}</td>
                          <td>{formatEuro(t.buyerTotal)}</td>
                          <td>{formatEuro(t.sellerNet)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>

        <section className="orders-how">
          <h2>Comment fonctionne l'appariement</h2>
          <ol>
            <li><b>1.</b> Un ordre d'achat rencontre les ordres de vente dont le prix est inférieur ou égal à son prix limite.</li>
            <li><b>2.</b> Les meilleurs prix sont servis en premier. À prix égal, le premier ordre passé est servi en premier.</li>
            <li><b>3.</b> La transaction se fait au prix de l'ordre déjà présent dans le carnet.</li>
            <li><b>4.</b> Les frais de plateforme ({TRADING_FEES.rate * 100} %, minimum {formatEuro(TRADING_FEES.minFee)}) sont {PAYER_LABELS[TRADING_FEES.payer]}.</li>
            <li><b>5.</b> La quantité non exécutée reste dans le carnet jusqu'à être appariée.</li>
          </ol>
        </section>
      </div>
    </div>
  )
}
