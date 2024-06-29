import PendingIcon from "@/components/PendingIcon";
import CTALink from "@/components/CTALink";
import { ClientRoutes } from "@/app.config";
import CreateTaskDialog from "@/components/CreateTaskDialog";

type Props = {
  numPending: number,
};

export default function PendingTasksOverview({
  numPending,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="px-2 py-3 bg-amber-50 rounded-lg">
        <PendingIcon className="w-10 h-10 text-amber-500" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold">Pending</h3>
        <p className="text-muted-foreground">{`You have ${numPending} pending tasks.`}</p>
      </div>
      <div className="w-full">
        {
          numPending > 0
          ? <CTALink label="See more" link={ClientRoutes.dashboard.pendingTasks} />
          : <CreateTaskDialog />
        }
      </div>
    </div>
  );
}
