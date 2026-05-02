"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function Login () {
 const onSubmit = async (e) => {
    e.preventDefault();
     
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const res = await authClient.signIn.email({
    email: data.email,
    password: data.password,
    callbackURL : '/'

  });

  if (res.error) {
     alert(res.error.message);
    return;
  } 
    else  {
      
       alert("Login In successfully!");
  }

  };


  // Google signIn function 

  const handleGoogleSignIn = async () => {
     await authClient.signIn.social({
      provider: 'google',
     })
  }


  return (
       
    <div className="flex flex-col justify-center min-h-[100vh] items-center container mx-auto py-10 ">
    
    <div className="  rounded-2xl shadow-xl bg-gray-800 p-5 ">
       
    <h2 className="text-center font-bold text-3xl pb-6">Login Your Account </h2>

    <Form className="flex justify-center flex-col gap-4" onSubmit={onSubmit}>
             
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
            Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>

    <div>
                        <p className="text-center py-4 "> or </p>
            <button onClick={handleGoogleSignIn} className=" mt-2 btn w-full bg-gray-600  text-white"> <GrGoogle className="text-yellow-300"/> Login with Google </button>

    </div>
              

    </div>

    </div>

  );
}