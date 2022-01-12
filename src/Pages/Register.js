// import axios from "axios";
// import { useState } from "react";
import React from "react";
import { Form } from "react-bootstrap";


const Register = () => {
  // const [name_user, setName] = useState("");
  // const [image_user, setImage] = useState("");
  // const [address_user, setAddress] = useState("");
  // const [city_user, setCity] = useState("");
  // const [uf_user, setUF] = useState("");
  // const [cep_user, setCep] = useState("");
  // const [country_user, setCountry] = useState("");
  // const [tel_user, setTel] = useState("");
  // const [email_user, setEmail] = useState("");
  // const [password_user, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const user = {
  //     name_user: name_user,
  //     image_user: image_user,
  //     address_user:  address_user,
  //     city_user: city_user,
  //     uf_user: uf_user,
  //     cep_user: cep_user,
  //     country_user: country_user,
  //     tel_user:  tel_user,
  //     email_user: email_user,
  //     password_user: password_user,
  //     passwordConfirmation: passwordConfirmation,
  //   };

  //   console.log(user)

  //   axios.post("user/register", user).then(console.log("Usuario cadastrado"));
  // };

  return (
    <div className="container">
      <Form className="bg-transparent rounded ml-8 " type='submit'>
        <Form.Group className="mb-3 w-100 " controlId="Name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="Email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="example@example.com.br" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="Password">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="PasswordConfirmation">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <input className='ml-auto' variant="primary" type="submit" value="Enviar"/>
      </Form>
    </div>
  );
};

export default Register;
