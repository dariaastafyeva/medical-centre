import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className='content--wrapper'>
      <div className='login'>
        <h1>Войти</h1>
        <form >
          <input required type="text" placeholder="username" name="username" onChange={handleChange} />
          <input required type="email" placeholder="email" name="email" onChange={handleChange} />
          <input required type="password" placeholder="password" name="password" onChange={handleChange} />
          <button onClick={handleSubmit}>Register</button>
          {error && <p>{error}</p>}
          <span>Уже есть аккаунт? <Link to="/login">Войти</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Registration