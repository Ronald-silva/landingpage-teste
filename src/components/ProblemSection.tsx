import { DollarSign, Clock, UserX, AlertTriangle, XCircle, FileX } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'

export default function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: 'Demitido sem receber verbas rescisórias?',
      description: 'Você tem direito a receber todas as verbas devidas na rescisão',
    },
    {
      icon: Clock,
      title: 'Horas extras não pagas acumuladas?',
      description: 'Todo trabalho além da jornada deve ser devidamente remunerado',
    },
    {
      icon: UserX,
      title: 'Sofreu assédio moral no trabalho?',
      description: 'Ambiente de trabalho tóxico não é normal e deve ser combatido',
    },
    {
      icon: AlertTriangle,
      title: 'Acidente de trabalho sem assistência?',
      description: 'Você merece suporte e indenização por acidentes no trabalho',
    },
    {
      icon: XCircle,
      title: 'Justa causa injusta?',
      description: 'Demissão por justa causa requer provas concretas',
    },
    {
      icon: FileX,
      title: 'Reconhecimento de vínculo negado?',
      description: 'Trabalhou sem carteira assinada? Seus direitos permanecem',
    },
  ]

  return (
    <Section background="light" id="problemas">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
          Você Trabalhou Duro. Não Deixe Seus Direitos Para Trás.
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Identificou alguma dessas situações? Você pode ter direitos a receber.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {problems.map((problem, index) => (
          <Card
            key={index}
            hover
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          >
            <div className="flex flex-col items-start space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-text-primary">
                {problem.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {problem.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Impact Statement */}
      <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-center shadow-xl">
        <p className="text-2xl md:text-3xl font-heading font-bold text-white">
          "Empregado sem informação deixa dinheiro pro patrão!"
        </p>
        <p className="text-white/90 mt-4 text-lg">
          Não seja mais uma vítima. Conheça e defenda seus direitos.
        </p>
      </div>
    </Section>
  )
}
