"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { createTask } from "@/lib/actions";
import { LoadingSpinner } from "@/components/ui/gb-spinner";

export default function CreateTaskForm() {
  const initialState: FormState = {};
  const [formState, dispatch] = useFormState(
    createTask,
    initialState
  );

  // console.log(formState); // SCAFF
  if (formState.success) toast.success('Task created successfully!');
  if (!formState.success) toast.error(
    formState.apiErrorMessage
    || formState.clientErrorMessage
    || 'Something went wrong'
  );

  return (
    <div className="w-full">
      <form
        action={dispatch}
        className="flex flex-col items-center gap-y-6"
      >
        <div className="w-full">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            name="description"
            placeholder="Enter the task description"
            required
          />
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {
              formState.validationErrors?.description &&
              formState.validationErrors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))
            }
          </div>
        </div>

        <div id="api-error" aria-live="polite" aria-atomic="true">
          {
            formState.apiErrorMessage && (
              <p className="mt-2 text-sm text-red-500">
                {formState.apiErrorMessage}
              </p>
            )
          }
        </div>

        <Buttn />
      </form>
    </div>
  );
}

const Buttn = () => {
  const { pending } = useFormStatus();

  // const pendingClasses = pending ? '' : '';

  return (
    <Button
      className="w-full"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? <LoadingSpinner srText="Processing..." /> : 'Create Task'}
    </Button>
  );
};
