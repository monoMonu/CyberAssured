'use client'

import React from "react";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

const budgetOptions = ["< $10,000", "$10,000 - $50,000", "$50,000 - $100,000", "> $100,000"];
const deviceOptions = ["1-50", "51-200", "201-1000", ">1000"];
const maturityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const manpowerOptions = ["0", "1-2", "3-5", "6+"];

const businessNeeds = [
   "Reduce Security Costs",
   "Achieve Regulatory Compliance",
   "Supply Chain Risk",
   "Business Services Protection",
   "End User Trust Management",
   "Intellectual Property and Brand Protection",
   "Cyber Resilience",
   "E-commerce",
   "Remote Working",
];

const securityThreats = [
   "Ransomware",
   "Data Loss",
   "Phishing",
   "Insider Threats",
   "Malware",
   "Network Intrusion",
   "Web Attacks",
   "Unauthorised Change",
   "Policy Violations",
];

type SocFormValues = {
   budget: string;
   devices: string;
   maturity: string;
   manpower: string;
   needs: string[];
   threats: string[];
};

export default function SocForm() {
   const form = useForm<SocFormValues>({
      defaultValues: {
         budget: "",
         devices: "",
         maturity: "",
         manpower: "",
         needs: [],
         threats: [],
      },
   });

   function onSubmit(values: SocFormValues) {
      console.log(values);
   }

   return (
      <div className="max-w-screen-xl mx-auto lg:px-12 px-4 py-10 mb-10 shadow-lg bg-muted">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               {/* Budget Dropdown */}
               <FormField
                  control={form.control}
                  name="budget"
                  rules={{ required: "Budget is required" }}
                  render={({ field }) => (
                     <FormItem className="w-full">
                        <FormLabel>
                           What is the current budget you have for outsourcing security services to a SOC?
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder="Please select one" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {budgetOptions.map(option => (
                                 <SelectItem key={option} value={option}>{option}</SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               {/* Business Needs & Security Threats */}
               <div>
                  <FormLabel>
                     What are the key business drivers to using a SOC service? (tick all that apply)
                  </FormLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
                     {businessNeeds.map(item => (
                        <FormField
                           key={item}
                           control={form.control}
                           name="needs"
                           render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                 <FormControl>
                                    <Checkbox
                                       checked={field.value.includes(item)}
                                       onCheckedChange={(checked) => {
                                          return checked
                                             ? field.onChange([...field.value, item])
                                             : field.onChange(field.value.filter(val => val !== item));
                                       }}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">{item}</FormLabel>
                              </FormItem>
                           )}
                        />
                     ))}
                     {securityThreats.map(item => (
                        <FormField
                           key={item}
                           control={form.control}
                           name="threats"
                           render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                 <FormControl>
                                    <Checkbox
                                       checked={field.value.includes(item)}
                                       onCheckedChange={(checked) => {
                                          return checked
                                             ? field.onChange([...field.value, item])
                                             : field.onChange(field.value.filter(val => val !== item));
                                       }}
                                    />
                                 </FormControl>
                                 <FormLabel className="font-normal">{item}</FormLabel>
                              </FormItem>
                           )}
                        />
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                     control={form.control}
                     name="devices"
                     rules={{ required: "Device count is required" }}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="min-h-8">Approximately how many devices will the SOC service protect?</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Please select one" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {deviceOptions.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="maturity"
                     rules={{ required: "Maturity rating is required" }}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="min-h-8">If you were to rate your company's security maturity level (10 being high) what would you say?</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Please select one" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {maturityOptions.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="manpower"
                     rules={{ required: "Manpower is required" }}
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel className="min-h-8">How many dedicated internal security resources do you currently have (manpower)?</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Please select one" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {manpowerOptions.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <Button type="submit">Submit</Button>
            </form>
         </Form>
      </div>
   );
}
