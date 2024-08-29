import { useFormStatus } from 'react-dom';
import { Button } from "@nextui-org/react";

type SubmitButtonProps = {
    label?: string;
    isSubmitting?: boolean;
    color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
    isDisabled?: boolean;
  }
  
  export function SubmitButton({ label, color, isDisabled = false, isSubmitting = false }: SubmitButtonProps) {
    const { pending } = useFormStatus();
  
    return (
      <Button
        isDisabled={isDisabled}
        className='min-w-32'
        type='submit'
        color={color}
        radius='full'
        isLoading={pending || isSubmitting}>
        {label || "Submit"}
      </Button>
    );
  }