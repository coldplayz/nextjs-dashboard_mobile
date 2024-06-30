import Link from "next/link";
import { GrLinkNext } from 'react-icons/gr';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  // label: 'Sign In' | 'Sign Up' | 'Get Started';
  label: string;
  link: string;
  className?: string;
};

export default function CTALink({ label, link, className }: Props) {
  return (
    <div>
      <Button asChild>
        <Link
          href={link}
          className={cn(className)}
        >
          {label}
          <GrLinkNext className="ml-3" />
        </Link>
      </Button>
    </div>
  );
}
