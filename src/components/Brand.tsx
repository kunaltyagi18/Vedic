'use client';
import Link from 'next/link';

export function Brand({ hanging = true }: { hanging?: boolean }) {
  return (
    <Link
      href="/"
      className="brand group relative flex items-center gap-3 text-decoration-none flex-shrink-0"
      aria-label="Vedic Global Foundation Charitable Trust home"
    >
      {/* Wedding-Style Hanging Medallion Chakra (Overhanging Sleek Navbar Border) */}
      <div
        className={`relative z-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          hanging ? 'translate-y-2.5 lg:translate-y-3.5' : ''
        }`}
      >
        <span
          className={`flex items-center justify-center rounded-full border-[2.5px] border-[#B8863B] shadow-lg ring-3 ring-[#5A1420] transition-shadow duration-300 group-hover:shadow-xl ${
            hanging
              ? 'h-[58px] w-[58px] lg:h-[72px] lg:w-[72px]'
              : 'h-[44px] w-[44px] lg:h-[50px] lg:w-[50px]'
          }`}
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFDF8 0%, #FAF3E8 55%, #F0E2D0 100%)',
          }}
        >
          <svg
            className={`transition-transform duration-700 ease-out group-hover:rotate-45 ${
              hanging
                ? 'w-[42px] h-[42px] lg:w-[53px] lg:h-[53px]'
                : 'w-[32px] h-[32px] lg:w-[38px] lg:h-[38px]'
            }`}
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="vedicGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF4C2" />
                <stop offset="25%" stopColor="#E6BA65" />
                <stop offset="60%" stopColor="#B8863B" />
                <stop offset="90%" stopColor="#8C5C1B" />
                <stop offset="100%" stopColor="#5E3B0E" />
              </linearGradient>

              <radialGradient id="vedicHubRadial" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFF9E0" />
                <stop offset="50%" stopColor="#DFB251" />
                <stop offset="100%" stopColor="#87581B" />
              </radialGradient>

              <filter id="vedicShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0.8" stdDeviation="0.6" floodColor="#3B0C14" floodOpacity="0.45" />
              </filter>
            </defs>

            {/* Outer Beaded Dotted Rim */}
            <circle
              cx="32"
              cy="32"
              r="29"
              stroke="url(#vedicGoldGradient)"
              strokeWidth="0.9"
              strokeDasharray="1.5 2.5"
              opacity="0.85"
            />

            {/* Outer Wheel Ring */}
            <circle
              cx="32"
              cy="32"
              r="26.5"
              stroke="url(#vedicGoldGradient)"
              strokeWidth="2.2"
              filter="url(#vedicShadow)"
            />

            {/* Inner Concentric Rim */}
            <circle
              cx="32"
              cy="32"
              r="21.5"
              stroke="url(#vedicGoldGradient)"
              strokeWidth="1.3"
              opacity="0.9"
            />

            {/* 16 Golden Spokes */}
            {Array.from({ length: 16 }, (_, i) => (
              <path
                key={i}
                d="M32 5.5 L29 25.5 L32 21.5 L35 25.5 Z"
                fill="url(#vedicGoldGradient)"
                stroke="#6B4110"
                strokeWidth="0.3"
                filter="url(#vedicShadow)"
                transform={`rotate(${i * 22.5} 32 32)`}
              />
            ))}

            {/* Center Hub Outer Ring */}
            <circle
              cx="32"
              cy="32"
              r="7"
              fill="url(#vedicHubRadial)"
              stroke="url(#vedicGoldGradient)"
              strokeWidth="1.3"
              filter="url(#vedicShadow)"
            />

            {/* Center Golden Jewel / Hub Core */}
            <circle cx="32" cy="32" r="3" fill="#FFFDF5" opacity="0.95" />
          </svg>
        </span>
      </div>

      {/* Brand Typography */}
      <span className="brand-name flex flex-col justify-center leading-tight">
        <span
          className="font-serif text-[12px] lg:text-[13px] font-semibold tracking-wider text-foreground transition-colors group-hover:text-[#a82522]"
          style={{ fontFamily: "var(--font-display, 'Cinzel', Georgia, serif)" }}
        >
          VEDIC GLOBAL
        </span>
        <span
          className="font-serif text-[10.5px] lg:text-[11.5px] font-medium tracking-wide text-foreground/90"
          style={{ fontFamily: "var(--font-display, 'Cinzel', Georgia, serif)" }}
        >
          FOUNDATION
        </span>
        <span
          className="brand-caption text-[7px] lg:text-[7.5px] font-semibold tracking-[0.14em] uppercase mt-0.5"
          style={{ color: '#B8863B' }}
        >
          CHARITABLE TRUST
        </span>
      </span>
    </Link>
  );
}
