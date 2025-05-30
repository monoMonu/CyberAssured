"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormFields>();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: ContactFormFields) => {
    setSuccessMessage("");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Your message has been sent successfully.");
        reset();
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
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
            <Label htmlFor="firstName">First name <span className="text-destructive">*</span></Label>
            <Input id="firstName" {...register("firstName", { required: true })} placeholder="John" />
            {errors.firstName && <p className="text-sm text-destructive">First name is required.</p>}
          </div>

          <div>
            <Label htmlFor="surname">Surname <span className="text-destructive">*</span></Label>
            <Input id="surname" {...register("surname", { required: true })} placeholder="Doe" />
            {errors.surname && <p className="text-sm text-destructive">Surname is required.</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="telephone">Telephone <span className="text-destructive">*</span></Label>
          <Input id="telephone" type="tel" {...register("telephone", { required: true })} placeholder="+1 234 567 8901" />
          {errors.telephone && <p className="text-sm text-destructive">Telephone is required.</p>}
        </div>

        <div>
          <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
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
          <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
          <Textarea id="message" {...register("message", { required: true })} placeholder="Type your message here..." rows={5} />
          {errors.message && <p className="text-sm text-destructive">Message is required.</p>}
        </div>

        {successMessage && <p className="text-green-600 font-medium">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 font-medium">{errorMessage}</p>}

        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto text-base">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
