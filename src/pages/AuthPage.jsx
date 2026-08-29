import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">ShikshaSetu</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
              <input defaultValue="student@shikshasetu.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:bg-white" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" defaultValue="password123" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-slate-400 focus:bg-white" />
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <Button className="flex-1" onClick={() => navigate('/home')}>Sign in</Button>
            <Button variant="secondary" className="flex-1" onClick={() => navigate('/home')}>Create account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
