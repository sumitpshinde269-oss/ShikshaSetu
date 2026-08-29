export default function Card({ children, className = '', onClick, role = 'button' }) {
  return (
    <div
      onClick={onClick}
      role={onClick ? role : undefined}
      className={`rounded-[28px] border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
