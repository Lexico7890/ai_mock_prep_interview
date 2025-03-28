import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldsProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: "text" | "password" | "email" | "file";
}

const FormField = ({ control, name, label, placeholder, type = "text" }: FormFieldsProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
              <FormLabel className="label">{label}</FormLabel>
              <FormControl>
                <Input placeholder={placeholder} type={type} {...field} className="input"/>
              </FormControl>
              <FormMessage />
            </FormItem>
      )}
    />
  );
};

export default FormField;
