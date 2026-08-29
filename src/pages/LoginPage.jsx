import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.3),_transparent_32%),linear-gradient(180deg,#f8fbff_0%,#ecfff6_100%)] px-5 py-8">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-500 text-4xl shadow-soft">🎒</div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">ShikshaSetu</p>
          <h1 className="mt-3 text-4xl font-black text-slate-800">Learn with joy</h1>
          <p className="mt-2 text-base text-slate-600">A bright path to curiosity, practice, and progress.</p>
        </div>

        <div className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Student name</label>
            <input
              defaultValue="Aarav"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:soft-ring"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Choose avatar</label>
            <div className="grid grid-cols-4 gap-3">
              {['🐼', '🦊', '🐻', '🐯', '🐨', '🐵', '🦄', '🐰'].map((emoji, index) => (
                <button
                  key={emoji}
                  type="button"
                  className={`flex h-14 items-center justify-center rounded-2xl border text-2xl transition ${index === 1 ? 'border-sky-400 bg-sky-50 shadow-sm' : 'border-slate-200 bg-slate-50 hover:border-sky-200 hover:bg-sky-50'}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <Button className="w-full" onClick={() => navigate('/grade-selection')}>
            Start learning
          </Button>
        </div>
      </div>
    </div>
  );
}
