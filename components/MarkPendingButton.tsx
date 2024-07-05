"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
// import * as _ from "lodash";
// import { v4 } from "uuid";

import { updateTask } from "@/lib/actions";
import { debounceFunc } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/gb-spinner";
import { useTaskDispatch } from "@/lib/providers/TasksProvider";
import { TaskActions } from "@/app.config";

const debouncedToast = debounceFunc(toast, 1000);

type Props = {
  taskId: string, // task ID
};

export default function MarkPendingButton({ taskId }: Props) {
  const initialState: FormState = { __v: 0 };
  const [formState, dispatch] = useFormState(
    updateTask,
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
          type: TaskActions.UPDATE,
          id: taskId,
          payload: formState.payload,
        });
      }

      // Mark current form state as stale.
      lastVersion.current = formState.__v;
    }
  }, [
    formState.__v,
    formState.success,
    formState.payload,
    taskDispatch,
    taskId,
  ]);

  // TODO: put toast call in use effect
  if (formState.__v !== lastVersion.current) {
    // Just returned with state update from server action...
    if (formState.success) debouncedToast.success('Task created successfully!');
    if (formState.success === false) debouncedToast.error(
      formState.apiErrorMessage
      || formState.clientErrorMessage
      || 'Something went wrong'
    );
  } // ...else, stale state; don't toast.

  return (
    <div className="w-full">
      <form
        action={dispatch}
        // key={id}
        className="flex flex-col items-center gap-y-6"
      >
        <Input
          type="hidden"
          name="done"
          value="false"
        />

        <Input
          type="hidden"
          name="taskId"
          value={taskId}
        />

        <div className="w-full">
          <Buttn />
        </div>
      </form>
    </div>
  );
}

const Buttn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? <LoadingSpinner srText="Processing..." /> : 'Mark Pending'}
    </Button>
  );
};












/*
import { Button } from "@/components/ui/button";
import { updateTask } from "@/lib/actions";
 
export default function MarkPendingButton() {
  return (
    <form action={updateTask}>
      <input name="done" type="hidden" value="false" />
      <Button variant="outline" type="submit">Sign Out</Button>
    </form>
  )
}
*/
