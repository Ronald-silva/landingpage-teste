import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
