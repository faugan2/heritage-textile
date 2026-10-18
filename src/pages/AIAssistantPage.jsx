import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/AI.css'

const MOCK_RESPONSES = [
  "Excellente question ! Les textiles africains sont des œuvres d'art millénaires qui reflètent la richesse culturelle du continent.",
  'Je peux vous recommander plusieurs artisans certifiés qui créent des pièces remarquables. Voulez-vous en savoir plus sur un type particulier ?',
  "Les pagnes wax sont traditionnellement portés dans toute l'Afrique de l'Ouest. Chaque motif a une signification culturelle unique.",
  'Votre commande est en cours de traitement. Vous recevrez une notification dès son expédition.',
  "Les tissus Kente du Ghana sont parmi les plus prestigieux. Ils sont souvent portés lors d'occasions spéciales.",
  'Je vous recommande ce pagne wax premium : il allie tradition et modernité.',
  "Le commerce équitable est au cœur de notre mission. Chaque achat soutient directement les artisans locaux.",
  'Vous pouvez suivre votre commande en temps réel depuis votre compte VPTT, dans la rubrique Mes commandes.'
]

const SUGGESTIONS = [
  'Quel tissu me convient le mieux ?',
  'Parlez-moi des artisans',
  'Comment fonctionnent les commandes ?',
  "Qu'est-ce que le commerce équitable ?",
  'Où sont fabriqués les produits ?',
  'Comment suivre ma commande ?'
]

const formatTime = date => date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Bonjour ! Je suis l'assistant VPTT, votre guide personnel. Je peux vous aider avec les textiles africains, les commandes, les artisans et bien plus. Que puis-je faire pour vous ?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = (text = input) => {
    if (!text.trim() || loading) return

    const userMessage = { id: Date.now(), type: 'user', text, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)],
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          <Link to="/ai-studio" className="page-back">
            <i className="fa-solid fa-arrow-left"></i> Retour au studio IA
          </Link>
          <span className="tag">IA</span>
          <h1>Assistant VPTT</h1>
          <div className="page-hero__rule"></div>
          <p>Posez vos questions sur les textiles, les artisans et vos commandes</p>
        </div>
      </section>

      <div className="container" style={{ padding: '32px 0 48px' }}>
        <div className="chat">
          <div className="chat__head">
            <div className="chat__avatar"><i className="fa-solid fa-robot"></i></div>
            <div>
              <h1>Assistant VPTT</h1>
              <div className="chat__status">En ligne</div>
            </div>
          </div>

          <div className="chat__body">
            {messages.map(msg => (
              <div key={msg.id} className={`msg msg--${msg.type}`}>
                <div className="msg__bubble">
                  {msg.text}
                  <span className="msg__time">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="msg msg--bot">
                <div className="msg__bubble">
                  <div className="typing"><span></span><span></span><span></span></div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="chat__suggest">
                {SUGGESTIONS.map(q => (
                  <button key={q} onClick={() => handleSend(q)}>{q}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chat__input">
            <input
              type="text"
              placeholder="Posez une question…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              aria-label="Votre message"
            />
            <button onClick={() => handleSend()} disabled={!input.trim() || loading} aria-label="Envoyer">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          <p className="chat__note">Disponible 24 h/24. Appuyez sur Entrée pour envoyer votre message.</p>
        </div>
      </div>
    </div>
  )
}
