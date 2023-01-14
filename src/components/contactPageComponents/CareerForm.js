import React from "react";
import { useForm, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const errMsg = "This field is required";

const schema = z.object({
  first_name: z.string().min(1, errMsg),
  last_name: z.string().min(1, errMsg),
  email: z.string().email(),
  phone: z.string().optional(),
  position: z.string().min(1, errMsg),
  resume: z.any(z.instanceof(File, "Please Upload Resume")),
});

const CareerForm = () => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
  };

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { errors } = formState;

  const submitForm = (formValues) => {
    const { first_name, last_name, email, phone, position, resume } =
      formValues;
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("resume", resume[0]);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://127.0.0.1:8000/api/employees/post/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form
      className="text-start"
      encType="multipart/form-data"
      onSubmit={handleSubmit(submitForm)}
    >
      <Form.Group>
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
        <Form.Label>Position*</Form.Label>
        <Form.Control {...register("position")} type="text" />
        {errors.position?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.position?.message}
          </p>
        )}
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicTextField">
        <Form.Label>Resume*</Form.Label>
        <Form.Control {...register("resume")} type="file" />
        {errors.resume?.message && (
          <p className="mt-1" style={{ color: "red" }}>
            {errors.resume?.message}
          </p>
        )}
      </Form.Group>

      <Button className="yellow-btn mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CareerForm;
