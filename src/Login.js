import React, { useState, useEffect } from 'react';
import { LoginForm, LoginInput, UserId, Error, Welcome } from './styles.js';

export default function Login(props) {
  const {isLogged, setIsLogged} = props;
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const authToken = '12345abcde';

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    let storedToken = sessionStorage.getItem('token');
    if(storedToken === authToken) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      console.log('Token Missing or Mismatching');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginDetails = {
      id: 'john',
      pwd: 'abcdef'
    }

    if(userId !== loginDetails.id || password !== loginDetails.pwd) {
      setError('Incorrect Login');
    } else {
      sessionStorage.setItem('token', authToken);
      setError('');
      setUserId('');
      setPassword('');
    }
  }

  if(isLogged) {
    return <Welcome>Hello John</Welcome>;
  } else {
    return (
    <LoginForm onSubmit={handleSubmit}>
      <UserId type='text' value={userId} placeholder='user id' onChange={handleUserIdChange}></UserId>
      <LoginInput type='password' value={password} placeholder='password' onChange={handlePasswordChange}></LoginInput>
      { error && <Error>{error}</Error> }
      <input type='submit' hidden></input>
    </LoginForm>
    );
  }
}
