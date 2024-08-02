"use client"
import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

  import { Input } from "@/components/ui/input";
import { FormFieldType } from './forms/PatientForm';

  interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType
  }

    const CustomFormField = ({ control, fieldType }: CustomProps) => {
  return (
    <FormField
    control={control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} className="dark"/>
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
   )
}

export default CustomFormField
