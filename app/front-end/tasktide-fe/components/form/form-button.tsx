"use client";

import { cn } from "@/lib/utils";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "link"
    | "ghost"
    | "outline";
}

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={disabled || pending}
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
