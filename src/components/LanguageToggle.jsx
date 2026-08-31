const options = [
  { id: 'en', label: 'English' },
  { id: 'hi', label: 'हिन्दी' },
];

export default function LanguageToggle({ language, onChange }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-sm">
      {options.map((option) => {
        const isActive = option.id === language;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition ${
              isActive
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
