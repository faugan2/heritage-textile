export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition transform hover:scale-105 inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-gold text-black hover:bg-yellow',
    secondary: 'border-2 border-gold text-gold hover:bg-gold/10',
    magenta: 'bg-magenta text-white hover:bg-magenta/90',
    ghost: 'text-gray-400 hover:text-gold',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

