import React from 'react';
import { useParams } from 'react-router-dom';
import { getPageById } from '../data';

const PreviewPage = () => {
  const { id } = useParams();
  const page = getPageById(id);

  return (
    <div>
      <h1>Preview Landing Page</h1>
      {page ? (
        <div>
          <h2>{page.title}</h2>
          <p>{page.description}</p>
          {page.components.map((component, index) => (
            <div key={index}>
              <h3>{component.type}</h3>
              <p>{component.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Page not found</p>
      )}
    </div>
  );
};

export default PreviewPage;
