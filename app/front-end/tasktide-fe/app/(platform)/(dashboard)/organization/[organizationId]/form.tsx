"use client";

import { createBoard } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-button";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log("Board created", data);
    },
    onError: (error) => {
      console.error("Error creating board", error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" label="That's the label" errors={fieldErrors} />
      </div>
      <FormSubmit>Submit</FormSubmit>
    </form>
  );
};
