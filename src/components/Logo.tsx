export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        {/* Top Left Green */}
        <ellipse cx="30" cy="30" rx="22" ry="14" transform="rotate(45 30 30)" fill="#78a22f" />
        {/* Top Right Red */}
        <ellipse cx="70" cy="30" rx="22" ry="14" transform="rotate(-45 70 30)" fill="#e33226" />
        {/* Bottom Left Green */}
        <ellipse cx="30" cy="70" rx="22" ry="14" transform="rotate(-45 30 70)" fill="#78a22f" />
        {/* Bottom Right Green */}
        <ellipse cx="70" cy="70" rx="22" ry="14" transform="rotate(45 70 70)" fill="#78a22f" />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="text-4xl font-black tracking-tighter text-[#e33226] lowercase leading-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          extra
        </span>
        <span className="text-[11px] text-gray-500 tracking-wide text-right pr-0.5 leading-tight mt-0.5">
          zgjedhja ime e parë
        </span>
      </div>
    </div>
  );
}
