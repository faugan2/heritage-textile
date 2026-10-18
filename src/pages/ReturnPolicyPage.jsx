import LegalLayout from '../components/LegalLayout'

const SECTIONS = [
  { title: 'Délai de retour', paragraphs: ['Vous disposez de 14 jours à compter de la réception de votre colis pour retourner un article. Ce délai s\'applique aux clients résidant en France et en Europe.', 'Passé ce délai, nous ne pouvons pas traiter votre retour.'] },
  { title: 'Conditions de retour', items: ['L\'article doit être dans son état d\'origine, non porté et non lavé', 'Tous les éléments d\'origine doivent être présents (étiquettes, emballage, etc.)', 'L\'article doit être accompagné d\'une preuve d\'achat', 'Les articles personnalisés ne peuvent pas être retournés', 'Les articles soldés ou en promotion peuvent être retournés dans les mêmes conditions'] },
  { title: 'Démarche à suivre', items: ['Contactez notre service client à info@heritagetextiles.com', 'Recevez votre étiquette de retour prépayée', 'Emballez l\'article avec soin', 'Envoyez le colis à l\'adresse indiquée', 'Recevez votre remboursement sous 7 jours après réception'] },
  { title: 'Remboursement', paragraphs: ['Une fois le retour reçu et accepté, nous vous remboursons le montant de l\'article sous 7 jours ouvrables.', 'Les frais de retour sont à votre charge, sauf en cas d\'erreur de notre part.'] },
  { title: 'Échanges', paragraphs: ['Vous pouvez échanger un article contre un autre de valeur égale ou supérieure. Nous prenons en charge les frais de retour pour les échanges. Pour un article de valeur inférieure, la différence vous est remboursée.'] }
]

export default function ReturnPolicyPage() {
  return (
    <LegalLayout
      title="Politique de retour"
      subtitle="Nos conditions de retour et d'échange"
      sections={SECTIONS}
      contactTitle="Besoin d'aide ?"
      contactText="Contactez notre équipe de service client."
    />
  )
}
