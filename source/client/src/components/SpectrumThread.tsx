/** Design system reminder — Calm Laboratory's liquid spectrum is a recurring brand connector, never a one-off legend. */
export function SpectrumThread({ className = "" }: { className?: string }) {
  return <div className={`spectrum-thread ${className}`} aria-hidden="true">
    <svg viewBox="0 0 1200 105" preserveAspectRatio="none" focusable="false">
      <defs>
        <linearGradient id="liquid-spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8D3DD" /><stop offset="24%" stopColor="#F4D352" /><stop offset="48%" stopColor="#CB852B" /><stop offset="70%" stopColor="#D46B6B" /><stop offset="100%" stopColor="#16A3A0" />
        </linearGradient>
      </defs>
      <path d="M-20,48 C110,10 218,84 350,48 S584,14 715,49 S953,90 1220,31" fill="none" stroke="url(#liquid-spectrum)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="350" cy="48" r="5" fill="#fff" stroke="#CB852B" strokeWidth="2" /><circle cx="715" cy="49" r="5" fill="#fff" stroke="#D46B6B" strokeWidth="2" />
    </svg>
  </div>;
}
