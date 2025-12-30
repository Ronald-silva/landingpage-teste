import HeroSection from './components/HeroSection'
import TrustBar from './components/TrustBar'
import ProblemSection from './components/ProblemSection'
import AboutSection from './components/AboutSection'
import PracticeAreas from './components/PracticeAreas'
import Calculator from './components/Calculator'
import ProcessSection from './components/ProcessSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <AboutSection />
      <PracticeAreas />
      <Calculator />
      <ProcessSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
