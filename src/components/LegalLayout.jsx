import '../styles/template/base.css'
import '../styles/pages/Products.css'
import '../styles/pages/Legal.css'
import '../styles/pages/Info.css'

export default function LegalLayout({ title, subtitle, updated, sections, contactTitle, contactText }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="page-hero">
        <div className="container">
          {updated && <span className="tag">MIS À JOUR : {updated}</span>}
          <h1>{title}</h1>
          <div className="page-hero__rule"></div>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </section>

      <div className="container">
        <div className="legal">
          <nav className="legal__toc">
            <span>Sommaire</span>
            <ol>
              {sections.map((s, idx) => (
                <li key={idx}><a href={`#legal-${idx}`}>{s.title}</a></li>
              ))}
            </ol>
          </nav>

          <div className="legal__body">
            {sections.map((s, idx) => (
              <section key={idx} id={`legal-${idx}`} className="legal__section">
                <h2><span>{idx + 1}</span> {s.title}</h2>
                {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                {s.items && (
                  <ul>
                    {s.items.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="info-contact-card" style={{ margin: '40px 0 0', maxWidth: 'none' }}>
              <h2>{contactTitle || 'Des questions ?'}</h2>
              <p>{contactText || 'Contactez-nous pour toute question.'}</p>
              <p><b>E-mail :</b> info@heritagetextiles.com</p>
              <p><b>Téléphone :</b> +228 91 53 85 18</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
