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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-subtle"></span>
              <span className="text-sm font-medium">OAB/MG - Especialista Direito Trabalhista</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Seus Direitos Trabalhistas Merecem a Melhor Defesa
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Advocacia especializada com foco em resultados concretos. Atendimento em todo o Brasil.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-white/80">
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
              <span className="text-sm font-medium">
                <strong className="text-secondary">2.247+</strong> pessoas confiam
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex flex-wrap gap-6 text-sm text-white/70 pt-4">
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

          {/* Right Column - Image */}
          <div className="relative hidden lg:block animate-slide-up">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-full blur-3xl opacity-20 animate-pulse-subtle"></div>

              {/* Profile Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square rounded-full bg-gradient-to-br from-white/20 to-white/5 p-2">
                  <div className="w-full h-full rounded-full border-4 border-secondary overflow-hidden bg-white">
                    <img
                      src="/perfil.png"
                      alt="Dra. Lara Kheir - Advogada Trabalhista"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">OAB/MG</div>
                    <div className="text-xs text-text-secondary">Especialista</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
