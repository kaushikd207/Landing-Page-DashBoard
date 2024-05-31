import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../components/Layout';
import DashboardHome from '../components/DashboardHome';

const Dashboard = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <DashboardHome />
    </Layout>
  );
};

export default Dashboard;
