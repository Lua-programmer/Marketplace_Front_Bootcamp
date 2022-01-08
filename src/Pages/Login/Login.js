import React from "react";
import { Form } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react';
import axios from 'axios';
import "./Login.css";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password
    }

    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token)
    })
    .then(window.alert('Bem-vindo'))
  }

  return (
    <div className="Login">
      <h2 className="login-title">Acesse sua Conta</h2>
      <Form className="m-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 font" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 font" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
        </Form.Group>

        <input value="Fazer login" type="submit"/>
      </Form>

      <div className="login-ok">
          <a href="!#">
            <span>Esqueceu sua senha?</span>
          </a>
        </div>
        <span>Ainda não possui uma conta?</span>
        <div className="iconsLogin" >
        
          <a href="/register">
            <FiEdit type="submit" /> Cadastre-se
          </a>
        </div>
      
    </div>
  );
}
export default Login;
