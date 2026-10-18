import LegalLayout from '../components/LegalLayout'

const SECTIONS = [
  { title: 'Acceptation des conditions', paragraphs: ['En accédant à ce site et en l\'utilisant, vous acceptez d\'être lié par les présentes conditions générales d\'utilisation. Si vous ne les acceptez pas, merci de ne pas utiliser le site.'] },
  { title: 'Droits d\'auteur et propriété intellectuelle', paragraphs: ['Tous les contenus du site (textes, images, logos et graphiques) sont la propriété de Heritage Textiles ou de ses fournisseurs de contenu, et sont protégés par les lois sur le droit d\'auteur.', 'Vous ne pouvez pas reproduire, distribuer ni transmettre ces contenus sans autorisation écrite préalable.'] },
  { title: 'Limitation de responsabilité', paragraphs: ['Heritage Textiles ne saurait être tenu responsable des dommages directs, indirects ou consécutifs liés à l\'utilisation du site ou à l\'impossibilité de l\'utiliser, ou des services proposés.'] },
  { title: 'Commandes et prix', paragraphs: ['Les prix sont indiqués en euros, TVA incluse. Heritage Textiles peut modifier ses prix à tout moment, sans préavis.', 'Heritage Textiles se réserve le droit de refuser ou d\'annuler une commande.'] },
  { title: 'Paiement', paragraphs: ['Le paiement est exigible au moment de la commande. Nous acceptons les cartes bancaires, PayPal et d\'autres moyens de paiement. Les transactions sont sécurisées et chiffrées.'] },
  { title: 'Livraison', paragraphs: ['Les délais de livraison sont donnés à titre indicatif. Heritage Textiles ne peut être tenu responsable des retards dus à des facteurs externes ou à des tiers.'] },
  { title: 'Résiliation', paragraphs: ['Heritage Textiles peut suspendre ou résilier votre accès au site à tout moment, pour quelque motif que ce soit, sans préavis.'] },
  { title: 'Loi applicable', paragraphs: ['Les présentes conditions sont régies par le droit français. Tout litige relève de la compétence exclusive des tribunaux français.'] }
]

export default function TermsPage() {
  return (
    <LegalLayout
      title="Conditions générales d'utilisation"
      updated="janvier 2026"
      sections={SECTIONS}
      contactTitle="Des questions ?"
      contactText="Si vous avez des questions sur ces conditions, contactez-nous."
    />
  )
}
