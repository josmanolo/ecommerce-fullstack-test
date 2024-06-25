import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { FormContainer, Form, Title, Label } from './styled';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    dispatch(setUser({ email }));
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
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
        <Label>Confirm Password</Label>
        <Input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        <Button type="submit">Register</Button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
