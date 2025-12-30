import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:bg-primary focus:ring-primary shadow-md hover:shadow-lg active:shadow-sm',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark active:bg-secondary focus:ring-secondary shadow-md hover:shadow-lg active:shadow-sm',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark focus:ring-primary',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E] active:bg-[#075E54] focus:ring-[#25D366] shadow-md hover:shadow-lg active:shadow-sm',
  }

  // Touch targets: mínimo 44x44px (WCAG)
  const sizes = {
    sm: 'min-h-[44px] px-5 py-2.5 text-sm',
    md: 'min-h-[48px] px-6 py-3 text-base',
    lg: 'min-h-[56px] px-8 py-4 text-lg',
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
