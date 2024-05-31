import React from 'react';
import { useParams } from 'react-router-dom';
import { getPageById } from '../data';

const ViewPage = () => {
  const { id } = useParams();
  const page = getPageById(id);

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      {page.components.map((component, index) => (
        <div key={index}>
          <h3>{component.type}</h3>
          <p>{component.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewPage;
