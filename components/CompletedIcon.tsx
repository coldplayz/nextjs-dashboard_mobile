import { cn } from "@/lib/utils";
import { IoCheckmarkDone } from "react-icons/io5";

type CompletedIconProps = {
  className?: string;
};

export default function CompletedIcon({
  className = '',
}) {
  return (
    <IoCheckmarkDone className={cn(className)} />
  );
}
