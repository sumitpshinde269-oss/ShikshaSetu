const variants = {
  primary: 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-200',
  secondary: 'bg-white text-slate-700 border border-slate-200 shadow-sm',
  success: 'bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-lg shadow-emerald-200',
  ghost: 'bg-slate-100 text-slate-700',
};

export default function Button({ children, onClick, variant = 'primary', className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
