import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Mail, Settings, LogOut } from 'lucide-react';

export function MyAccount() {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-white mb-4">My Account</h1>
          <p className="text-white/70 mb-6">Please sign in to view your account</p>
          <Button
            onClick={() => navigate('/login')}
            className="bg-white text-black hover:bg-white/90"
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          My Account
        </h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Profile</h2>
                <p className="text-white/70">Manage your account settings</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Mail className="w-5 h-5 text-white/70" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="text-white">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <User className="w-5 h-5 text-white/70" />
                <div>
                  <p className="text-sm text-white/70">User ID</p>
                  <p className="text-white text-sm font-mono">{user.id.slice(0, 20)}...</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Settings className="w-5 h-5 text-white/70" />
                <div>
                  <p className="text-sm text-white/70">Account Created</p>
                  <p className="text-white">
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Button
                onClick={handleSignOut}
                variant="destructive"
                className="w-full bg-red-500/20 hover:bg-red-500/30 text-white border border-red-500/50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
