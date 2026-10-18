export default function Logo({ variant = 'header' }) {
  if (variant === 'header') {
    return (
      <div className="flex items-center gap-1 font-display font-bold text-xl tracking-wider">
        <span className="text-gold">M</span>
        <span className="text-magenta">y</span>
        <span className="text-emerald">A</span>
        <span className="text-yellow">t</span>
        <span className="text-gold">c</span>
        <span className="text-magenta">h</span>
        <span className="text-emerald">a</span>
        <span className="text-yellow">n</span>
      </div>
    )
  }

  if (variant === 'hero') {
    const colors = ['#D4AF37', '#E61E8C', '#2D8659', '#FFC107', '#D4AF37', '#E61E8C', '#2D8659', '#FFC107']
    const letters = ['M', 'y', 'A', 't', 'c', 'h', 'a', 'n']

    return (
      <div className="space-y-3 animate-in fade-in slide-in-from-top-4 duration-700 text-center">
        {/* Glow effect background */}
        <div className="relative inline-block w-full">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-magenta/20 to-emerald/20 rounded-2xl blur-2xl -z-10"></div>

          {/* Logo letters */}
          <div className="flex items-baseline justify-center gap-0 font-display font-black tracking-widest px-6 py-4" style={{
            letterSpacing: '0.15em',
          }}>
            {letters.map((letter, idx) => (
              <span
                key={idx}
                className="hover:scale-110 transition-transform duration-300"
                style={{
                  fontSize: 'clamp(2.5rem, 10vw, 5rem)',
                  color: colors[idx],
                  textShadow: `0 4px 20px ${colors[idx]}40, 0 0 40px ${colors[idx]}30`,
                  animation: `fadeInScale 0.6s ease-out ${idx * 0.08}s both, float 1.8s cubic-bezier(0.45, 0, 0.55, 1) ${idx * 0.25 + 0.6}s infinite`,
                  display: 'inline-block',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Decorative line */}
          <div className="h-1.5 rounded-full mx-auto" style={{
            background: 'linear-gradient(90deg, #D4AF37 0%, #E61E8C 33%, #2D8659 66%, #FFC107 100%)',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
            animation: 'fadeInScale 0.8s ease-out 0.6s both',
            width: 'clamp(200px, 80%, 400px)',
          }}></div>
        </div>

        <style>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.5) translateY(10px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    )
  }

  return null
}
