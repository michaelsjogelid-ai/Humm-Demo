import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Prism from '@/components/ui/prism';
import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { MyIdea } from '@/pages/MyIdea';
import { MyDashboard } from '@/pages/MyDashboard';
import { MyAccount } from '@/pages/MyAccount';
import { Resources } from '@/pages/Resources';
import { Login } from '@/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="fixed inset-0 w-screen h-screen overflow-auto bg-gradient-to-br from-[#eaed4c] via-slate-900 to-[#2edce8]">
          <div className="absolute inset-0 w-full h-full opacity-60">
            <Prism
              animationType="rotate"
              timeScale={0.3}
              height={4}
              baseWidth={6}
              scale={2.8}
              hueShift={3.7}
              colorFrequency={0.8}
              noise={0.3}
              glow={1.2}
              bloom={1.5}
              transparent={true}
            />
          </div>

          <Header />

          <div className="relative z-10 pt-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-idea" element={<MyIdea />} />
              <Route path="/my-dashboard" element={<MyDashboard />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
