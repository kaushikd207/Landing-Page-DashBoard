export const login = (username, password) => {
  // Dummy authentication logic
  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('auth', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('auth');
};

export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};
