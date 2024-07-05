import { VscKebabVertical } from "react-icons/vsc";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props {
  done: boolean,
};

export default function TaskDropdownMenu({ done }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <VscKebabVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MdOutlineModeEdit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled={done}>
            <MdDeleteOutline className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
