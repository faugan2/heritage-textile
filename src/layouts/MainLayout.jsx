import { Outlet } from 'react-router-dom'
import TemplateHeader from '../components/TemplateHeader'
import TemplateFooter from '../components/TemplateFooter'
import '../styles/template/base.css'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TemplateHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <TemplateFooter />
    </div>
  )
}
