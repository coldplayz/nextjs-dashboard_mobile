import CompletedIcon from "@/components/CompletedIcon";
import CreateTaskDialog from "@/components/CreateTaskDialog";
import CTALink from "@/components/CTALink";
import { ClientRoutes } from "@/app.config";

type Props = {
  numCompleted: number,
};

export default function CompletedTasksOverview({
  numCompleted,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="px-2 py-3 bg-green-50 rounded-lg">
        <CompletedIcon className="w-10 h-10 text-green-500" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-primary">Completed</h3>
        <p className="text-muted-foreground">{`You have ${numCompleted} completed tasks.`}</p>
      </div>
      <div className="w-full">
        {
          numCompleted > 0
          ? <CTALink label="See more" link={ClientRoutes.dashboard.completedTasks} className="w-full" />
          : <CreateTaskDialog />
        }
      </div>
    </div>
  );
}




/*
export default function CompletedTasksOverview() {
  return (
    <div className="flex items-center justify-between">
      <div className="h-full px-2 py-3 bg-green-50 rounded-lg">
        <CompletedIcon className="w-10 h-10 text-green-500" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col">
          <h3 className="font-bold">Completed</h3>
          <p className="text-muted-foreground">You have 0 completed tasks.</p>
        </div>
        <div className="w-full">
          <CreateTaskDialog />
        </div>
      </div>
    </div>
  );
}
*/
