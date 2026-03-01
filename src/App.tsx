import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import './styles/index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
