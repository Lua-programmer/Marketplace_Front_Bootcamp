import React from "react";
import { Form } from "react-bootstrap";
import { FiSend, FiEdit } from "react-icons/fi";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <div className="iconsLogin">
        <p>
          <FiSend /> Entrar
        </p>
        <p>
          <FiEdit /> Cadastre-se
        </p>
      </div>
    </>
  );
};

export default Login;
