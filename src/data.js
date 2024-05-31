import { v4 as uuidv4 } from 'uuid';

const loadPages = () => {
  const data = localStorage.getItem('landingPages');
  return data ? JSON.parse(data) : [];
};

const savePages = (pages) => {
  localStorage.setItem('landingPages', JSON.stringify(pages));
};

export const getPages = () => {
  return loadPages();
};

export const getPageById = (id) => {
  const pages = loadPages();
  return pages.find(page => page.id === id);
};

export const addPage = (page) => {
  const pages = loadPages();
  pages.push({ ...page, id: uuidv4() });
  savePages(pages);
};

export const updatePage = (updatedPage) => {
  const pages = loadPages();
  const index = pages.findIndex(page => page.id === updatedPage.id);
  if (index !== -1) {
    pages[index] = updatedPage;
    savePages(pages);
  }
};

export const deletePage = (id) => {
  const pages = loadPages();
  const updatedPages = pages.filter(page => page.id !== id);
  savePages(updatedPages);
};
