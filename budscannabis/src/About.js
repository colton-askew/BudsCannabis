import React, { useState } from "react";
import '../src/Components/About.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };               
  return (
    <div class="contactForm" >
      <Form onSubmit={handleSubmit} >
        <div>   
          <h1>Contact Us</h1>
          <Form.Group size="lg" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="John Doe"
              />
          </Form.Group>
      { // label htmlFor="name">Name:</label>
       // <input type="text" id="name" required />
      }
        </div>
        <div>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="JohnDoe@gmail.com"
          />
        </Form.Group>

        {
        //<label htmlFor="email">Email:</label>
        //<input type="email" id="email" required />
        }
        </div>
        <div>
          <Form.Group size="lg" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}
             placeholder="I like weed alot."
          />
          </Form.Group>
          {
        //<label htmlFor="message">Message:</label>
        //<textarea id="message" required />
          }
        </div>
        <Button block size ="lg" type="submit">{status}</Button>
      </Form>
    </div>
  );
};

export default ContactForm;