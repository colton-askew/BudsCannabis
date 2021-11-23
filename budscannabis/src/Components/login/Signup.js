import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import { Auth } from 'aws-amplify';


async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email          // optional
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}


export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label> <br />
          <Form.Control
            autoFocus
            type="username"
            value={user.username}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="JohnDoe@gmail.com"
          /> <br />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label> <br />
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="JohnDoe@gmail.com"
          /> <br />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label> <br />
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="confirm_password">
          <Form.Label>Confirm Password</Form.Label> <br />
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </Form.Group>
        <br />
        <Form.Control type="checkbox" className="checkbox"/>Remember me    
        <a href="PasswordRecovery" className="ForgotPassword"> Forgot Password?</a>
        <br />
        <Button block size="lg" type="submit"  disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}