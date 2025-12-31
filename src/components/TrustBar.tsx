import { MapPin, Smartphone, UserCheck, Clock } from 'lucide-react'
import Container from './ui/Container'

export default function TrustBar() {
  const features = [
    {
      icon: MapPin,
      title: 'Atuação Nacional',
      description: 'Atendemos em todo o Brasil',
    },
    {
      icon: Smartphone,
      title: 'Atendimento 100% Digital',
      description: 'Sem sair de casa',
    },
    {
      icon: UserCheck,
      title: 'Consulta Sem Compromisso',
      description: 'Primeira conversa gratuita',
    },
    {
      icon: Clock,
      title: 'Resposta em 24h',
      description: 'Agilidade no atendimento',
    },
  ]

  return (
    <section className="bg-white border-y border-gray-200 py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-md">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold text-sm md:text-base text-text-primary">
                {feature.title}
              </div>
              <p className="text-xs text-text-secondary hidden md:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
