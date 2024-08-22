import { useLoaderData, Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { loginUser } from '/src/api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  console.log('login action');
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  console.log({ email, password });
  const pathname = new URL(request.url).searchParams.get('redirectTo');
  try {
    const data = await loginUser({ email, password });
    console.log(data);
    localStorage.setItem('loggedin', true);
    const response = redirect(pathname || '/host');
    response.body = true;
    return response;
  } catch (e) {
    console.error(e.message);
    localStorage.setItem('loggedin', false);
    return e;
  }
  // return null;
}

export default function Login() {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <Form method="post" className="login-form" replace>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <button disabled={navigation.state === 'submitting'}>
          {navigation.state === 'submitting' ? 'Signing in...' : 'Sign in'}
        </button>
      </Form>
    </div>
  );
}
