import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="page-transition flex min-h-screen items-center justify-center bg-slate-50 px-5 py-8 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">The page you are looking for does not exist or may have moved.</p>
        <Button className="mt-6" onClick={() => navigate('/home')}>Go back to Home</Button>
      </div>
    </div>
  );
}
