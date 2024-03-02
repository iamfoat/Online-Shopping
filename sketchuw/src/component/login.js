import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or authentication logic
    console.log('Submitted:', formData);
  };

  return (
    <div className='login'>
    <div className="form-container">
      <h1>เข้าสู่ระบบ</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">อีเมล</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">รหัสผ่าน</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button variant="contained">เข้าสู่ระบบ</Button>
         <p>ยังไม่ได้เป็นสมาชิก?</p><a href='#'>สมัครสมาชิก</a>
      </form>
    </div>
    </div>
  );
};

export default Login;
