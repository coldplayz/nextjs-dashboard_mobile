"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { CiCirclePlus } from "react-icons/ci";
// import * as _ from "lodash";

import { createTask } from "@/lib/actions";
import { debounceFunc } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/gb-spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const debouncedToast = debounceFunc(toast, 1000);

export default function CreateTaskForm() {
  // const [inputState, setInputState] = useState('');
  const initialState: FormState = {};
  const [formState, dispatch] = useFormState(
    createTask,
    initialState
  );

  // console.log(formState); // SCAFF
  if (formState.success) debouncedToast.success('Task created successfully!');
  if (formState.success === false) debouncedToast.error(
    formState.apiErrorMessage
    || formState.clientErrorMessage
    || 'Something went wrong'
  );

  /*
  const handleSubmit = () => {
    setInputState('');
  };
  */

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="flex gap-3">
            <CiCirclePlus className="w-6 h-6" />
            <span>Add Task</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Task</DialogTitle>
            <DialogDescription>
              Create a new task here. Click Create Task when you are done.
            </DialogDescription>
          </DialogHeader>
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
                  value={formState.success ? '' : undefined}
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

              <DialogFooter className="w-full">
                <Buttn success={formState.success} />
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

type ButtnProp = {
  success?: boolean,
};

const Buttn = ({ success = false }: ButtnProp) => {
  const { pending } = useFormStatus();

  // const pendingClasses = pending ? '' : '';
  // if (success) toast.success('Task created successfully!');

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
