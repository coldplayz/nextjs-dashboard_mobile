import CreateTaskDialog from "@/components/CreateTaskDialog";
import PendingTasksOverview from "@/components/PendingTasksOverview";
import CompletedTasksOverview from "@/components/CompletedTasksOverview";
// import { getTasks } from "@/lib/apis/backend/get-tasks";
import { signoutUser, getTasks } from "@/lib/actions";
// import { v4 } from "uuid";

export default async function DashboardPage() {
  // const tasksData: any[] = await getTasks();
  const res = await getTasks();
  if (res.status === 401) return await signoutUser();

  // const id = v4();
  console.log('rendering dashboard...'); // SCAFF

  const tasksData: any[] = (await res.json()).data;
  const tasks = tasksData || [];
  const pendingTasks = tasks.filter((task) => !task.done);
  const completedTasks = tasks.filter((task) => task.done);

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Welcome Home!</h1>
        <p className="text-muted-foreground text-center tracking-tight">You can create new tasks, or see an overview of all your existing tasks.</p>
        <div className="w-5/6">
          <CreateTaskDialog />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold">Task Summaries</h2>
        <div className="p-4 pt-8 bg-white rounded-lg shadow-lg">
          <PendingTasksOverview numPending={pendingTasks.length} />
        </div>
        <div className="p-4 pt-8 bg-white rounded-lg shadow-lg">
          <CompletedTasksOverview numCompleted={completedTasks.length} / >
        </div>
      </div>
    </div>
  );
}
