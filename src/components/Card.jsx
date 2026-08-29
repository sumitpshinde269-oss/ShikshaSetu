export default function Card({ children, className = '', onClick, role = 'button' }) {
  return (
    <div
      onClick={onClick}
      role={onClick ? role : undefined}
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors ${onClick ? 'cursor-pointer hover:bg-slate-50' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
