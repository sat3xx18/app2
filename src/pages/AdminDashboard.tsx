import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-brand-green">Admin Dashboard</h1>
          <button
            onClick={() => signOut()}
            className="bg-brand-green text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
          >
            Sign Out
          </button>
        </div>
        
        {/* Add your admin dashboard content here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-serif mb-4">Products</h2>
            {/* Add product management UI */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-serif mb-4">Orders</h2>
            {/* Add order management UI */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-serif mb-4">Users</h2>
            {/* Add user management UI */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;