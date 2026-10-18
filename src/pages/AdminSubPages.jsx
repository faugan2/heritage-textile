import ComingSoon from '../components/ComingSoon'

const backTo = '/admin/dashboard'
const backLabel = 'Retour au tableau de bord'

export function AdminUsersPage() {
  return (
    <ComingSoon tag="ADMIN" title="Gestion des utilisateurs" subtitle="Consultez et gérez les comptes de la plateforme" icon="fa-users" backTo={backTo} backLabel={backLabel}>
      <h3>Tableau en développement</h3>
      <p>La liste des utilisateurs sera disponible ici.</p>
    </ComingSoon>
  )
}

export function AdminProductsPage() {
  return (
    <ComingSoon tag="ADMIN" title="Validation des produits" subtitle="Validez les produits soumis par les artisans" icon="fa-box-open" backTo={backTo} backLabel={backLabel}>
      <h3>Tableau en développement</h3>
      <p>Les produits en attente de validation apparaîtront ici.</p>
    </ComingSoon>
  )
}

export function AdminOrdersPage() {
  return (
    <ComingSoon tag="ADMIN" title="Gestion des commandes" subtitle="Suivez l'ensemble des commandes de la plateforme" icon="fa-receipt" backTo={backTo} backLabel={backLabel}>
      <h3>Tableau en développement</h3>
      <p>La vue globale des commandes sera disponible ici.</p>
    </ComingSoon>
  )
}

export function AdminContentPage() {
  return (
    <ComingSoon tag="ADMIN" title="Gestion du contenu" subtitle="Articles, vidéos et expositions" icon="fa-file-lines" backTo={backTo} backLabel={backLabel}>
      <h3>En préparation</h3>
      <p>La gestion des articles, vidéos et expositions sera ajoutée prochainement.</p>
    </ComingSoon>
  )
}

export function AdminAnalyticsPage() {
  return (
    <ComingSoon tag="ADMIN" title="Statistiques" subtitle="Statistiques et rapports de la plateforme" icon="fa-chart-column" backTo={backTo} backLabel={backLabel}>
      <h3>En préparation</h3>
      <p>Les indicateurs de la plateforme seront affichés ici.</p>
    </ComingSoon>
  )
}

export function AdminSecurityPage() {
  return (
    <ComingSoon tag="ADMIN" title="Sécurité" subtitle="Paramètres de sécurité et de maintenance" icon="fa-shield-halved" backTo={backTo} backLabel={backLabel}>
      <h3>En préparation</h3>
      <p>Les paramètres de sécurité et de maintenance seront disponibles ici.</p>
    </ComingSoon>
  )
}
