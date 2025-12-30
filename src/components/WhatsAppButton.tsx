import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import WhatsAppIcon from './ui/WhatsAppIcon'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Show tooltip after button appears
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 1000)

    // Hide tooltip after 5 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 6000)

    return () => {
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltipTimer)
    }
  }, [isVisible])

  const handleWhatsAppClick = () => {
    const phoneNumber = '5534999667834'
    const message = encodeURIComponent('Olá! Vim do site e gostaria de agendar uma consulta.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 animate-slide-up">
            <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close tooltip"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
              <div className="pr-6">
                <p className="text-sm font-semibold text-text-primary mb-1">
                  Olá! Posso ajudar? 👋
                </p>
                <p className="text-xs text-text-secondary">
                  Entre em contato pelo WhatsApp e agende sua consulta gratuita!
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
            </div>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-[#25D366]/50 animate-pulse-subtle"
          aria-label="Contact via WhatsApp"
        >
          <WhatsAppIcon size={32} className="text-white" />

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>

          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </button>
      </div>
    </>
  )
}
