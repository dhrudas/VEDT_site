import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedRoute from '@/components/ProtectedRoute';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Experiences from './pages/Experiences';
import Flights from './pages/Flights';
import Neighbourhoods from './pages/Neighbourhoods';
import PlanYourTrip from './pages/PlanYourTrip';
import Kids from './pages/Kids';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cream">
        <div className="flex flex-col items-center gap-4">
          <svg viewBox="0 0 120 42" fill="none" className="h-10 w-auto">
            <text x="0" y="36" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fill="#1a2133" letterSpacing="-2">VEDT</text>
            <path d="M18 28 Q48 20 90 26" stroke="#b8973a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          </svg>
          <div className="w-8 h-8 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login" replace />} />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/neighbourhoods" element={<Neighbourhoods />} />
          <Route path="/plan" element={<PlanYourTrip />} />
          <Route path="/kids" element={<Kids />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App