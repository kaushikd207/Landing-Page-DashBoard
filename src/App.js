import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import PreviewPage from './pages/PreviewPage';
import ViewPage from './pages/ViewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/new" element={<NewPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/preview/:id" element={<PreviewPage />} />
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
