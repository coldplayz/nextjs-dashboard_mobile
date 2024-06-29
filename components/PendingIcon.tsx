import { GiSandsOfTime } from "react-icons/gi";
import { cn } from "@/lib/utils";

type PendingIconProps = {
  className?: string;
};

export default function PendingIcon({
  className = '',
}) {
  return (
    <GiSandsOfTime className={cn(className)} />
  );
}
