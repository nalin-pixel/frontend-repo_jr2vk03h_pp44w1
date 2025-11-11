import BackgroundFX from './components/BackgroundFX'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import AppShowcase from './components/AppShowcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(65%_60%_at_50%_0%,#f0fff470,transparent)] text-slate-900">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <AppShowcase />
        <CTA />
      </main>
      <footer className="py-12 text-center text-sm text-slate-600">© {new Date().getFullYear()} Ufarms — Smart Farming Made Simple</footer>
    </div>
  )
}

export default App
