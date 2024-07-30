import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { loginUser } from '/src/api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    // const asyncLogin = async () => {
    //   const data = await loginUser(loginFormData);
    //   console.log(data);
    // };
    // asyncLogin();
    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        navigate('/host', { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => {
        setStatus('idle');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={loginFormData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginFormData.password}
          onChange={handleChange}
        />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
