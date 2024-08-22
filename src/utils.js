import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedin')) || false;
  if (!isLoggedIn) {
    const { pathname } = new URL(request.url);
    const response = redirect(`/login?redirectTo=${pathname}&message=You must log in first`);
    response.body = true;
    throw response;
  }
  return null;
}
