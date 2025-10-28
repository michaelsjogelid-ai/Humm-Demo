import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function MyDashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          My Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Active Projects</h3>
            <p className="text-white/70">You have 0 active projects</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Recent Ideas</h3>
            <p className="text-white/70">No recent ideas yet</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Resources</h3>
            <p className="text-white/70">Explore available resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}
