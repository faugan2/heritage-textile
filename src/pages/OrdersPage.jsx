import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Account.css'

const STATUS = {
  pending: { label: 'En attente', icon: 'fa-clock', cls: '' },
  processing: { label: 'Traitement', icon: 'fa-gears', cls: 'is-processing' },
  shipped: { label: 'Expédié', icon: 'fa-truck', cls: 'is-shipped' },
  delivered: { label: 'Livré', icon: 'fa-circle-check', cls: 'is-delivered' }
}

export default function OrdersPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const q = query(collection(db, 'her_orders'), where('userId', '==', user.uid))
          const snapshot = await getDocs(q)
          setOrders(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
        } catch (error) {
          console.error('Error fetching orders:', error)
        }
      }
      setLoading(false)
    }

    fetchOrders()
  }, [user])

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <button className="page-back" onClick={() => navigate('/account')}>
            <i className="fa-solid fa-arrow-left"></i> Retour au compte
          </button>
          <span className="tag">COMMANDES</span>
          <h1>Mes commandes</h1>
          <div className="page-hero__rule"></div>
          <p>Historique et suivi de vos commandes</p>
        </div>
      </section>

      <div className="container" style={{ padding: '48px 0 64px' }}>
        {loading ? (
          <p className="muted" style={{ textAlign: 'center' }}>Chargement des commandes…</p>
        ) : orders.length > 0 ? (
          orders.map(order => {
            const st = STATUS[order.status] || { label: 'Inconnu', icon: 'fa-box', cls: '' }
            return (
              <article key={order.id} className="order-card">
                <div className="order-card__head">
                  <div>
                    <small>Numéro de commande</small>
                    <b>#{order.id.slice(0, 8).toUpperCase()}</b>
                  </div>
                  <span className={`order-status ${st.cls}`}>
                    <i className={`fa-solid ${st.icon}`}></i> {st.label}
                  </span>
                </div>
                <div className="order-grid">
                  <div><span>Date</span><b>{order.createdAt ? new Date(order.createdAt).toLocaleDateString('fr-FR') : 'N/A'}</b></div>
                  <div><span>Montant</span><b>{order.total ? `${order.total} €` : 'N/A'}</b></div>
                  <div><span>Articles</span><b>{order.itemCount || 0}</b></div>
                  <div><span>Livraison</span><b>{order.shipping || 'N/A'}</b></div>
                </div>
              </article>
            )
          })
        ) : (
          <div className="empty-state">
            <i className="fa-solid fa-box-open"></i>
            <p>Vous n'avez pas encore de commandes</p>
            <button className="btn btn--yellow" onClick={() => navigate('/products')}>
              Découvrir nos produits <i className="fa-solid fa-arrow-right ico"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
