import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../hooks';
import { Spinner } from 'react-bootstrap';
import { loginUser } from 'actions/userActions';
import Loader from '../components/Loader/Loader';
import styles from './login.module.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();
  const { loading, errorMessage } = userDetails;

  const handleLogin = async (e) => {
    e.preventDefault();

    let response = await loginUser(dispatch, { email, password });
    if (!response) return;
    props.history.push('/admin/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={{ width: 200 }}>
        <h1>Login Page</h1>
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        {loading && <Loader />}
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? <Spinner animation="grow" /> : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
