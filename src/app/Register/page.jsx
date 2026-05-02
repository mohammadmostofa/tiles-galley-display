"use client";

import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

export default function Register () {
 const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);

  };


  return (
    
    <div className="flex flex-col justify-center  items-center container mx-auto py-20">

    <Form className="flex justify-center flex-col gap-4  py-5 px-20 rounded-2xl shadow-xl border " onSubmit={onSubmit}>
             
             <h2 className="text-center font-bold text-3xl pb-6">Register Your Account </h2>

     {/* name */}
   <TextField
        isRequired
        name="name"
        type="text"
        validate={(value) => {
          if (!value || value.trim().length < 2)  {
            return "Enter your Name";
          }

          return null;
        }}
      >
        <Label className="text-white">Name</Label>
        <Input placeholder="Your Name" />
        <FieldError />
      </TextField>
     

     {/* img uri */}

<TextField
  isRequired
  name="image"
  type="text"
  validate={(value) => {
    if (!value) return "Image URL is required";

    const urlPattern =
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif|svg))$/i;

    if (!urlPattern.test(value)) {
      return "Please enter a valid image URL (jpg, png, webp, gif, svg)";
    }

    return null;
  }}
>
  <Label className="text-white">Image URL</Label>
  <Input placeholder="https://example.com/image.jpg" />
  <FieldError />
</TextField>

      {/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label className="text-white">Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>



       {/* password */}
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label className="text-white">Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
            Register
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      <p className="text-center pt-4">
        Already have an account? <a className="underline"  href="">Login</a>
      </p>
    </Form>


    </div>

  );
}