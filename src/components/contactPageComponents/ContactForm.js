import React from "react";
import { useForm, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const errMsg = "This field must contain at least 1 character";

const schema = z.object({
  first_name: z.string().min(1, errMsg),
  last_name: z.string().min(1, errMsg),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, errMsg),
});

const ContactForm = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { errors } = formState;

  const submitForm = (formValues) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };

    fetch("http://127.0.0.1:8000/api/clients/post/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form noValidate className="text-start" onSubmit={handleSubmit(submitForm)}>
      <Form.Group className="my-3" controlId="formBasicName">
        <Form.Label>First Name*</Form.Label>
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => <Form.Control {...field} />}
        />
        {errors.first_name?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.first_name?.message}
          </p>
        )}
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicName">
        <Form.Label>Last Name*</Form.Label>
        <Form.Control {...register("last_name")} type="text" />
        {errors.last_name?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.last_name?.message}
          </p>
        )}
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicEmail">
        <Form.Label>Email*</Form.Label>
        <Form.Control {...register("email")} type="email" />
        {errors.email?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.email?.message}
          </p>
        )}
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicName">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control {...register("phone")} type="text" />
        {errors.phone?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.phone?.message}
          </p>
        )}
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Subject</Form.Label>
        <Form.Control {...register("subject")} type="text" />
        {errors.subject?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.subject?.message}
          </p>
        )}
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Message*</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register("message")}
          type="text"
        />
        {errors.message?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.message?.message}
          </p>
        )}
      </Form.Group>
      <Button className="yellow-btn mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
