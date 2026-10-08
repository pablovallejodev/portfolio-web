type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-teal to-ink font-mono text-sm font-semibold text-white shadow-soft ${className}`}
    >
      <span className="relative z-10">PV</span>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </span>
  );
}
