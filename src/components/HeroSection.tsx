import { Calculator } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'
import WhatsAppIcon from './ui/WhatsAppIcon'

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5534999667834'
    const message = encodeURIComponent('Olá! Vim do site e gostaria de agendar uma consulta.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleCalculatorClick = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden py-16 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Profile Header - Photo + Name + Credentials */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-secondary overflow-hidden bg-white shadow-2xl">
                  <img
                    src="/perfil.png"
                    alt="Dra. Lara Kheir - Advogada Trabalhista"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <svg className="w-4 h-4 fill-secondary text-secondary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold text-primary">5.0</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-1">
                    Dra. Lara Kheir
                  </h2>
                  <p className="text-white/90 text-base md:text-lg">
                    Advogada Especialista em Direito Trabalhista
                  </p>
                </div>

                {/* Credentials Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-subtle"></span>
                  <span className="text-sm font-medium">OAB/MG - Especialista</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-center sm:text-left">
              Seus Direitos Trabalhistas Merecem a Melhor Defesa
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center sm:text-left">
              Advocacia especializada com foco em resultados concretos. Atendimento em todo o Brasil.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary-dark border-2 border-white flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-white/80">
                <strong className="text-secondary">2.247+</strong> pessoas confiam
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
              >
                <WhatsAppIcon size={20} />
                Agende Sua Consulta Gratuita
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleCalculatorClick}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 hover:border-secondary active:bg-white/30"
              >
                <Calculator className="w-5 h-5" />
                Calcule Seus Direitos
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm text-white/70 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Consulta sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Atendimento 100% Digital</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
