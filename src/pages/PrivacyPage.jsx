import LegalLayout from '../components/LegalLayout'

const SECTIONS = [
  { title: 'Collecte des données', paragraphs: ['Heritage Textiles collecte les informations personnelles que vous nous transmettez volontairement :'], items: ['Nom et prénom', 'Adresse e-mail', 'Numéro de téléphone', 'Adresse de livraison', 'Informations de paiement'] },
  { title: 'Utilisation des données', paragraphs: ['Nous utilisons vos informations pour :'], items: ['Traiter vos commandes', 'Vous envoyer des confirmations de commande', 'Améliorer notre service', 'Vous envoyer des lettres d\'information (si vous l\'avez accepté)', 'Respecter nos obligations légales'] },
  { title: 'Sécurité des données', paragraphs: ['Heritage Textiles met en œuvre des mesures techniques adaptées pour protéger vos données contre la perte, l\'utilisation abusive et l\'accès non autorisé. Les transactions sont chiffrées en SSL.'] },
  { title: 'Partage des données', paragraphs: ['Nous ne partageons pas vos données personnelles avec des tiers, sauf :'], items: ['Avec nos prestataires de livraison, pour traiter vos commandes', 'Avec nos partenaires de paiement, pour sécuriser les transactions', 'Lorsque la loi l\'impose'] },
  { title: 'Cookies', paragraphs: ['Le site utilise des cookies pour améliorer votre navigation. Vous pouvez les refuser dans les paramètres de votre navigateur, ce qui peut limiter certaines fonctionnalités.'] },
  { title: 'Vos droits', paragraphs: ['Vous pouvez accéder à vos données personnelles, les corriger ou les supprimer. Pour exercer ces droits, écrivez-nous à info@heritagetextiles.com.'] },
  { title: 'Modifications de la politique', paragraphs: ['Heritage Textiles peut modifier cette politique à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.'] },
  { title: 'Conformité au RGPD', paragraphs: ['Heritage Textiles respecte le Règlement général sur la protection des données (RGPD) et les lois applicables en matière de données personnelles.'] }
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updated="janvier 2026"
      sections={SECTIONS}
      contactTitle="Des questions sur vos données ?"
      contactText="Pour toute question sur cette politique, contactez-nous."
    />
  )
}
