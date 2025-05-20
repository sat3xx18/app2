import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
          path="/admin/*" 
          element={
            isAdmin ? <AdminDashboard /> : <Navigate to="/login" replace />
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;