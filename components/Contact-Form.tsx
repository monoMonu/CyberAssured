"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormFields {
   firstName: string;
   surname: string;
   telephone: string;
   email: string;
   message: string;
}

export default function ContactForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitSuccessful },
   } = useForm<ContactFormFields>();

   const onSubmit = (data: ContactFormFields) => {
      console.log("Submitted data:", data, isSubmitSuccessful);
      // You can send this to a backend API or display a success toast
   };

   return (
      <div className="max-w-screen-lg mx-auto px-4 py-16">
         <h1 className="text-4xl font-bold mb-2 text-primary">Get in touch</h1>
         <p className="text-muted-foreground mb-8">
            Fields marked with an <span className="text-destructive">*</span> are required
         </p>

         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <Label className="mb-3" htmlFor="firstName">First name <span className="text-destructive">*</span></Label>
                  <Input
                     id="firstName"
                     {...register("firstName", { required: true })}
                     placeholder="John"
                  />
                  {errors.firstName && <p className="text-sm text-destructive">First name is required.</p>}
               </div>

               <div>
                  <Label className="mb-3" htmlFor="surname">Surname <span className="text-destructive">*</span></Label>
                  <Input
                     id="surname"
                     {...register("surname", { required: true })}
                     placeholder="Doe"
                  />
                  {errors.surname && <p className="text-sm text-destructive">Surname is required.</p>}
               </div>
            </div>

            <div>
               <Label className="mb-3" htmlFor="telephone">Telephone <span className="text-destructive">*</span></Label>
               <Input
                  id="telephone"
                  type="tel"
                  {...register("telephone", { required: true })}
                  placeholder="+1 234 567 8901"
               />
               {errors.telephone && <p className="text-sm text-destructive">Telephone is required.</p>}
            </div>

            <div>
               <Label className="mb-3" htmlFor="email">Email <span className="text-destructive">*</span></Label>
               <Input
                  id="email"
                  type="email"
                  {...register("email", {
                     required: "Email is required",
                     pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                     },
                  })}
                  placeholder="john@example.com"
               />
               {errors.email && <p className="text-sm text-destructive">{errors.email.message as string}</p>}
            </div>

            <div>
               <Label className="mb-3" htmlFor="message">Message <span className="text-destructive">*</span></Label>
               <Textarea
                  id="message"
                  {...register("message", { required: true })}
                  placeholder="Type your message here..."
                  rows={5}
               />
               {errors.message && <p className="text-sm text-destructive">Message is required.</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto text-lg">
               {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
         </form>
      </div>
   );
}
