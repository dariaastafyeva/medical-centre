import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='content--wrapper'>
      <div className='login'>
        <h1>Войти</h1>
        <form >
          <input required type="text" placeholder="username" name="username" onChange={handleChange} />
          <input required type="password" placeholder="password" name="password" onChange={handleChange} />
          <button onClick={handleSubmit}>Войти</button>
          {error && <p>{error}</p>}
          <span>Еще нет аккаунта? <Link to="/register">Регистрация</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login