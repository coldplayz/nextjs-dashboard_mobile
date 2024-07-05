import { VscKebabVertical } from "react-icons/vsc";

import MarkPendingButton from "@/components/MarkPendingButton";
import TaskDropdownMenu from "@/components/TaskDropdownMenu";

export default function PendingTasksList() {
  return (
    <div>
      {/* <h2 className="text-xl font-bold">Pending Tasks</h2> */}
      <div className="relative p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-md p-2">Task description 123456789012345678901234567890</span>
          <div className="w-full">
            <MarkPendingButton taskId="dummyId" />
          </div>
          <div className="absolute top-3 right-3">
            <TaskDropdownMenu done={false} />
          </div>
        </div>
      </div>
    </div>
  );
}



/*
export default function PendingTasksList_v1() {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-between">
          <span className="border rounded-md p-2 truncate flex-1">Task description 1</span>
          <div className="w-fit flex-1">
            <MarkPendingButton taskId="dummyId" />
          </div>
          <span className="border rounded-md p-2 truncate flex-1">MENU</span>
        </div>
      </div>
    </div>
  );
}
*/
