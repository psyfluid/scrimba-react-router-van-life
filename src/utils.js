import { redirect } from 'react-router-dom';

export async function requireAuth() {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedin')) || false;
  if (!isLoggedIn) {
    const response = redirect('/login?message=You must log in first');
    response.body = true;
    return response;
  }
  return null;
}
