import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../components/Layout';
import LandingPageForm from '../components/LandingPageForm';

const NewPage = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <h1>Create New Landing Page</h1>
      <LandingPageForm />
    </Layout>
  );
};

export default NewPage;
