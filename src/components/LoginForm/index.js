import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { FormContainer, Form, Title, Label } from './styled';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setUser({ email }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Label>Email</Label>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Label>Password</Label>
        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit">Login</Button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
