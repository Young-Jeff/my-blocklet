"use client";

import { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ProfileSchemaDTO, profileSchema,
} from "@/features/profile/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdateProfile, useGetProfile } from "@/features/profile/api";

export const ProfilePage = () => {
  const [editState, setEditState] = useState(false);
  const { data, loading } = useGetProfile();
  const [name, setName] = useState("N/A");
  const [email, setEmail] = useState("N/A");
  const [phone, setPhone] = useState("N/A");
  const form = useForm<ProfileSchemaDTO>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  useEffect(() => {
    if (data?.profile) {
      const { profile } = data;
      form.setValue("name", profile.name as string);

      form.setValue("email", profile.email as string);
      form.setValue("phone", profile.phone as string);
      form.setValue("id", profile.id);
      form.clearErrors();
      setName(profile.name as string);
      setEmail(profile.email as string);
      setPhone(profile.phone as string);
    }
  }, [data, form]);
  const updateQuery = useUpdateProfile();
  async function handleSubmit(values: ProfileSchemaDTO) {
    await updateQuery.runAsync(values);
    setName(form.getValues("name"));
    setEmail(form.getValues("email"));
    setPhone(form.getValues("phone"));
    setEditState(false);
  }

  return (
    <div className="w-64 sm:w-96">
      {
       editState
         ? (
           <Form {...form}>
             <form autoComplete="off">
               <div className="flex flex-col">
                 <FormField
                   control={form.control}
                   name="name"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>用户名</FormLabel>
                       <FormControl>
                         <Input placeholder="请输入用户名" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
                 <FormField
                   control={form.control}
                   name="email"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>邮箱</FormLabel>
                       <FormControl>
                         <Input placeholder="请输入邮箱" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
                 <FormField
                   control={form.control}
                   name="phone"
                   render={({ field }) => (
                     <FormItem>
                       <FormLabel>手机号</FormLabel>
                       <FormControl>
                         <Input placeholder="请输入手机号" {...field} />
                       </FormControl>
                       <FormMessage />
                     </FormItem>
                   )}
                 />
                 <br />
                 <div className="flex justify-between">
                   <Button
                     type="button"
                     disabled={updateQuery.loading}
                     onClick={() => form.handleSubmit(handleSubmit)()}
                   >

                     save
                   </Button>
                   <Button
                     type="button"
                     onClick={() => setEditState(false)}
                   >
                     cancel
                   </Button>
                 </div>
               </div>
             </form>
           </Form>
         )
         : (
           <div>
             <div>
               <span>用户名: </span>
               <span>{name}</span>
             </div>
             <div>
               <span>邮箱: </span>
               <span>{email}</span>
             </div>
             <div>
               <span>手机号: </span>
               <span>{phone}</span>
             </div>
             <br />
             <Button
               type="button"
               className="w-full"
               onClick={() => setEditState(true)}
             >

               Edit profile
             </Button>
           </div>
         )
     }
    </div>
  );
};
