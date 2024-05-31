import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addPage, updatePage, getPageById } from '../data';

const LandingPageForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const page = getPageById(id);
      if (page) {
        setTitle(page.title);
        setDescription(page.description);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPage = { title, description, components: [] };
    if (id) {
      updatePage({ ...newPage, id });
    } else {
      addPage(newPage);
    }
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LandingPageForm;
