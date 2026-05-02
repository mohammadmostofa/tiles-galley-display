"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
   const userData = authClient.useSession()
    const UserDa = userData.data?.user;
  return (
    <div className='min-h-[80vh] pt-20'>
           
           <Card className='max-w-96 mx-auto flex justify-center items-center py-15 container bg-slate-700 ' >

                 <Avatar className='w-20 h-20  '>
                     <Avatar.Image alt={UserDa?.name} src={UserDa?.image} referrerPolicy='no-referrer' />
                     <Avatar.Fallback> {UserDa?.name[0]} </Avatar.Fallback>
                   </Avatar>

                  <h2 className='text-2xl font-bold pt-5'> {UserDa?.name} </h2>
                  <p className='pt-2' > {UserDa?.email} </p>

           </Card>

    </div>
  );
};

export default ProfilePage;