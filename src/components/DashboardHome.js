import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPages, deletePage } from '../data';

const DashboardHome = () => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPages(getPages());
  }, []);

  const handleDelete = (id) => {
    deletePage(id);
    setPages(getPages());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard/new">
        <button>Create New Landing Page</button>
      </Link>
      <ul>
        {pages.map(page => (
          <li key={page.id}>
            <h2>{page.title}</h2>
            <p>{page.description}</p>
            <Link to={`/edit/${page.id}`}>Edit</Link>
            <Link to={`/preview/${page.id}`}>Preview</Link>
            <Link to={`/view/${page.id}`}>View</Link>
            <button onClick={() => handleDelete(page.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardHome;
