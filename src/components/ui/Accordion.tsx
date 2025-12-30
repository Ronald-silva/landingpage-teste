import { useState, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

interface AccordionItemProps {
  title: string
  children: ReactNode
  icon?: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, icon, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-background-light transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          {icon && (
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
          )}
          <span className="font-semibold text-lg text-text-primary">{title}</span>
        </div>
        <ChevronDown
          className={clsx(
            'w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ml-4',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="p-6 pt-0 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={clsx('space-y-4', className)}>{children}</div>
}
