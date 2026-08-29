const variants = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  muted: 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100',
};

export default function Button({ children, onClick, variant = 'primary', className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
