import { useState, FormEvent } from 'react'
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import Button from './ui/Button'
import WhatsAppIcon from './ui/WhatsAppIcon'

interface CalculationResult {
  fgts: number
  avisoPrevi: number
  ferias: number
  decimoTerceiro: number
  total: number
}

export default function Calculator() {
  const [formData, setFormData] = useState({
    admissionDate: '',
    dismissalDate: '',
    salary: '',
    dismissalReason: '',
  })

  const [result, setResult] = useState<CalculationResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === 'salary') {
      // Remove non-numeric characters and format
      const numericValue = value.replace(/\D/g, '')
      const formattedValue = numericValue ? (parseInt(numericValue) / 100).toFixed(2) : ''
      setFormData({ ...formData, [name]: formattedValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const calculateDuration = (start: string, end: string): number => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
    return diffMonths
  }

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault()

    if (!formData.admissionDate || !formData.dismissalDate || !formData.salary) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    const salary = parseFloat(formData.salary)
    const months = calculateDuration(formData.admissionDate, formData.dismissalDate)

    // Simplified calculations (actual values would need more complex logic)
    const fgts = salary * months * 0.08 // 8% monthly
    const avisoPrevi = salary // 1 month
    const ferias = salary * 1.33 // salary + 1/3
    const decimoTerceiro = (salary * months) / 12

    const total = fgts + avisoPrevi + ferias + decimoTerceiro

    setResult({
      fgts,
      avisoPrevi,
      ferias,
      decimoTerceiro,
      total,
    })
    setShowResult(true)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '5534999667834'
    const message = encodeURIComponent(
      `Olá! Calculei meus direitos no site e gostaria de uma análise completa. Valor estimado: ${
        result ? formatCurrency(result.total) : 'N/A'
      }`
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <Section background="white" id="calculator">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <CalcIcon className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">Ferramenta Gratuita</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Descubra Seus Direitos em 60 Segundos
          </h2>
          <p className="text-lg text-text-secondary">
            Calcule uma estimativa dos valores que você pode ter direito a receber
          </p>
        </div>

        <Card padding="lg" className="shadow-xl">
          {!showResult ? (
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="admissionDate" className="block text-sm font-semibold text-text-primary mb-2">
                    Data de Admissão *
                  </label>
                  <input
                    type="date"
                    id="admissionDate"
                    name="admissionDate"
                    value={formData.admissionDate}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="dismissalDate" className="block text-sm font-semibold text-text-primary mb-2">
                    Data de Demissão *
                  </label>
                  <input
                    type="date"
                    id="dismissalDate"
                    name="dismissalDate"
                    value={formData.dismissalDate}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="salary" className="block text-sm font-semibold text-text-primary mb-2">
                    Salário Bruto (R$) *
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary ? `R$ ${formData.salary}` : ''}
                    onChange={handleInputChange}
                    placeholder="R$ 0,00"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="dismissalReason" className="block text-sm font-semibold text-text-primary mb-2">
                    Motivo da Demissão *
                  </label>
                  <select
                    id="dismissalReason"
                    name="dismissalReason"
                    value={formData.dismissalReason}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="sem-justa-causa">Sem Justa Causa</option>
                    <option value="justa-causa">Justa Causa</option>
                    <option value="pedido-demissao">Pedido de Demissão</option>
                    <option value="acordo">Acordo</option>
                  </select>
                </div>
              </div>

              <div className="bg-background-light p-4 rounded-lg">
                <p className="text-sm text-text-secondary">
                  * Este é um cálculo estimado. Os valores exatos serão determinados após análise
                  completa do seu caso por nossa equipe jurídica.
                </p>
              </div>

              <Button type="submit" variant="secondary" size="lg" fullWidth>
                <TrendingUp className="w-5 h-5 mr-2 inline" />
                Calcular Meus Direitos
              </Button>
            </form>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center pb-6 border-b border-gray-200">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Resultado da Estimativa
                </h3>
                <p className="text-text-secondary">
                  Valores aproximados com base nas informações fornecidas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background-light p-4 rounded-lg">
                  <div className="text-sm text-text-secondary mb-1">FGTS (8% mensal)</div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(result!.fgts)}
                  </div>
                </div>

                <div className="bg-background-light p-4 rounded-lg">
                  <div className="text-sm text-text-secondary mb-1">Aviso Prévio</div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(result!.avisoPrevi)}
                  </div>
                </div>

                <div className="bg-background-light p-4 rounded-lg">
                  <div className="text-sm text-text-secondary mb-1">Férias + 1/3</div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(result!.ferias)}
                  </div>
                </div>

                <div className="bg-background-light p-4 rounded-lg">
                  <div className="text-sm text-text-secondary mb-1">13º Salário Proporcional</div>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(result!.decimoTerceiro)}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary-dark p-6 rounded-xl text-white text-center">
                <div className="text-sm opacity-90 mb-2">Valor Total Estimado</div>
                <div className="text-4xl md:text-5xl font-bold font-heading">
                  {formatCurrency(result!.total)}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Este é um cálculo simplificado e estimado. Os valores
                  reais podem variar com base em diversos fatores legais. Agende uma consulta para
                  uma análise precisa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="whatsapp" size="lg" fullWidth onClick={handleWhatsAppClick}>
                  <WhatsAppIcon size={20} />
                  Falar com Dra. Lara Agora
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  onClick={() => {
                    setShowResult(false)
                    setResult(null)
                    setFormData({
                      admissionDate: '',
                      dismissalDate: '',
                      salary: '',
                      dismissalReason: '',
                    })
                  }}
                >
                  Calcular Novamente
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Section>
  )
}
