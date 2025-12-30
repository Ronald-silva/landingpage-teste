import { MessageCircle, Search, Lightbulb, Trophy } from 'lucide-react'
import Section from './ui/Section'

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Contato Inicial',
      description: 'Entre em contato pelo WhatsApp ou através do formulário. Atendemos rapidamente e com atenção.',
    },
    {
      icon: Search,
      title: 'Análise do Caso',
      description: 'Avaliação gratuita e detalhada da sua situação. Identificamos seus direitos e possibilidades.',
    },
    {
      icon: Lightbulb,
      title: 'Estratégia Jurídica',
      description: 'Definimos juntos a melhor abordagem para seu caso, com transparência total sobre custos e prazos.',
    },
    {
      icon: Trophy,
      title: 'Conquista de Resultados',
      description: 'Acompanhamento completo até a conquista dos seus direitos. Você nunca fica sem resposta.',
    },
  ]

  return (
    <Section background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
          Como Funciona a Consultoria
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Um processo simples e transparente do primeiro contato até a vitória
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                    <div className="w-12 h-12 md:hidden bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>

                {/* Center Icon - Desktop only */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary blur-xl opacity-40 animate-pulse-subtle"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>

                {/* Step Number */}
                <div className={`absolute ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0' : 'left-0'} top-0 md:top-auto`}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
