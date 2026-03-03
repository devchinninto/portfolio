import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { SkillsSection } from './components/SkillsSection'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import './styles/index.css'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <SkillsSection />
          <Projects />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
