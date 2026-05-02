"use client";
import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal () {
  const onSubmit = async (e) => {
      e.preventDefault();
       
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
  
      await authClient.updateUser({
      name: data.name,
      image: data.image,

    });


  }
  return (
    <Modal>
      <Button variant="secondary"> <BiEdit/> Update your Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update user </Modal.Heading> 
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" >
                    <Label>Name</Label>
                    <Input name="name" type="text" placeholder="Enter your name" />
                  </TextField>


                  <TextField className="w-full">
                   <Label>Image URL</Label>
                   <Input name="image" type="url" placeholder="image URL" />
                 </TextField>
                  
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">save</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}