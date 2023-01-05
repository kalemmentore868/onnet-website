import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  const initialState = { name: "", email: "", message: "", subject: "" };
  const [eachEntry, setEachEntry] = useState(initialState);
  const { name, email, message, subject } = eachEntry;

  const handleOnChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  return (
    <Form className="text-start">
      <Form.Group className="my-3" controlId="formBasicName">
        <Form.Label>Name*</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          value={name}
          name="name"
          type="text"
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicEmail">
        <Form.Label>Email*</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          value={email}
          name="email"
          type="text"
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          value={subject}
          name="subject"
          type="text"
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Message*</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={handleOnChange}
          value={message}
          name="message"
          type="text"
        />
      </Form.Group>
      <Button className="yellow-btn mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
