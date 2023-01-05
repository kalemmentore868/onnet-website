import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CareerForm = () => {
  const initialState = { name: "", email: "", position: "", number: "" };
  const [eachEntry, setEachEntry] = useState(initialState);
  const { name, email, position, number } = eachEntry;

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
        <Form.Label>Position*</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          value={position}
          name="position"
          type="text"
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Number*</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          value={number}
          name="number"
          type="number"
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Resume*</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button className="yellow-btn mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CareerForm;
