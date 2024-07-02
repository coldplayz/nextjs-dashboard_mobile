"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { CiCirclePlus } from "react-icons/ci";
// import * as _ from "lodash";
// import { v4 } from "uuid";

import { createTask, getTasks } from "@/lib/actions";
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
import { useTaskDispatch } from "@/lib/providers/TasksProvider";
import { TaskActions } from "@/app.config";

const debouncedToast = debounceFunc(toast, 1000);

export default function CreateTaskDialog() {
  const [inputState, setInputState] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const initialState: FormState = { __v: 0 };
  const [formState, dispatch] = useFormState(
    createTask,
    initialState
  );
  const taskDispatch = useTaskDispatch();
  const lastVersion = useRef(0);
  // const id = v4();

  useEffect(() => {
    if (formState.__v !== lastVersion.current) {
      if (formState.success) {
        // console.log(formState.payload); // SCAFF
        taskDispatch({
          type: TaskActions.CREATE,
          payload: formState.payload,
        });
        setIsOpen(false);
      }

      // Mark current form state as stale.
      lastVersion.current = formState.__v;
    }
  }, [formState.__v, formState.success, formState.payload, taskDispatch]);

  // console.log(id); // SCAFF
  if (formState.__v !== lastVersion.current) {
    // Just returned with state update from server action...
    if (formState.success) debouncedToast.success('Task created successfully!');
    if (formState.success === false) debouncedToast.error(
      formState.apiErrorMessage
      || formState.clientErrorMessage
      || 'Something went wrong'
    );
  } // ...else, stale state; don't toast.

  const handleChange = (e: any) => {
    setInputState(e.target?.value);
  };

  return (
    <div className="w-full">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              // key={id}
              className="flex flex-col items-center gap-y-6"
            >
              <div className="w-full">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  type="text"
                  name="description"
                  // value={formState.success ? '' : inputState}
                  value={inputState}
                  placeholder="Enter the task description"
                  // key={formState.success ? v4() : 'error'}
                  // key={id}
                  onChange={handleChange}
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
