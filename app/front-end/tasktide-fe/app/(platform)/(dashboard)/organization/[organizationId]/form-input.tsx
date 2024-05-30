"use client";

import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: { title?: string[] };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-red-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
