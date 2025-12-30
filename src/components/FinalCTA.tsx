import { Clock } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'
import WhatsAppIcon from './ui/WhatsAppIcon'

export default function FinalCTA() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5534999667834'
    const message = encodeURIComponent('Olá! Vim do site e gostaria de agendar uma consulta.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Clock className="w-4 h-4 text-secondary animate-pulse-subtle" />
            <span className="text-sm font-medium text-white">
              Vagas limitadas para novos clientes
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
            Não Espere Mais Para Buscar Seus Direitos
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Cada dia sem ação é um dia a menos para recuperar o que é seu. Entre em contato agora e
            agende sua consulta gratuita.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppClick}
            >
              <WhatsAppIcon size={24} />
              Agendar Consulta Gratuita Agora
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80 pt-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Atendimento rápido e profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Primeira consulta sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Resposta em até 24h</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20"></div>
    </section>
  )
}
