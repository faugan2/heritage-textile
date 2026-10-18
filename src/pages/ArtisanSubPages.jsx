import ComingSoon from '../components/ComingSoon'

const backTo = '/artisan/dashboard'
const backLabel = 'Retour au tableau de bord'

export function ArtisanProductsPage() {
  return (
    <ComingSoon tag="ESPACE ARTISAN" title="Mes produits" subtitle="Ajoutez et gérez vos créations" icon="fa-box-open" backTo={backTo} backLabel={backLabel}>
      <h3>Aucun produit pour le moment</h3>
      <p>Vos produits apparaîtront ici une fois créés.</p>
    </ComingSoon>
  )
}

export function ArtisanOrdersPage() {
  return (
    <ComingSoon tag="ESPACE ARTISAN" title="Commandes reçues" subtitle="Suivez les commandes de vos clients" icon="fa-bag-shopping" backTo={backTo} backLabel={backLabel}>
      <h3>Aucune commande</h3>
      <p>Les nouvelles commandes apparaîtront ici.</p>
    </ComingSoon>
  )
}

export function ArtisanStatsPage() {
  return (
    <ComingSoon tag="ESPACE ARTISAN" title="Statistiques" subtitle="Vos ventes et performances" icon="fa-chart-line" backTo={backTo} backLabel={backLabel}>
      <h3>Graphiques en préparation</h3>
      <p>Les ventes par mois et les produits les plus vendus seront affichés ici.</p>
    </ComingSoon>
  )
}

export function ArtisanPayoutPage() {
  return (
    <ComingSoon tag="ESPACE ARTISAN" title="Paiements" subtitle="Vos versements et virements" icon="fa-credit-card" backTo={backTo} backLabel={backLabel}>
      <h3>Aucun paiement enregistré</h3>
      <p>Vos versements apparaîtront ici.</p>
    </ComingSoon>
  )
}
