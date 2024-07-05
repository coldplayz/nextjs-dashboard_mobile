// import { getTasks } from "@/lib/apis/backend/get-tasks";
// import { signoutUser, getTasks } from "@/lib/actions";
// import { v4 } from "uuid";
import PendingTasksList from "@/components/PendingTasksList";

export default async function PendingTasks() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Pending tasks</h1>
        <p className="text-muted-foreground text-center tracking-tight">See and manage all your pending tasks</p>
      </div>

      <div className="">
        <PendingTasksList />
      </div>
    </div>
  );
}
