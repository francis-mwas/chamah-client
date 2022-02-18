import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../../hooks';
import { loginUser } from 'actions/userActions';
import styles from './login.module.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  // console.log('The dispatched error: ', errorMessage);

  const handleLogin = async (e) => {
    console.log('Inside handle login');
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { email, password });
      console.log('The response: ', response);
      if (response) {
        props.history.push('/admin/dashboard');
      } else {
        console.log('The error occurred');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={{ width: 200 }}>
        <h1>Login Page</h1>
        {/* {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null} */}
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
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
