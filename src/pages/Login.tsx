import { SignIn1 } from '@/components/ui/modern-stunning-sign-in';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/my-dashboard');
    }
  }, [user, navigate]);

  return <SignIn1 onClose={() => navigate('/')} />;
}
