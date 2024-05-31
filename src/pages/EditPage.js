import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import Layout from '../components/Layout';
import LandingPageForm from '../components/LandingPageForm';

const EditPage = () => {
  const { id } = useParams();

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <h1>Edit Landing Page</h1>
      <LandingPageForm />
    </Layout>
  );
};

export default EditPage;
