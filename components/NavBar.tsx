import Image from "next/image";

import CTALink from "./CTALink";
// import logo from "@/public/webTasks_logo.png";
import Logo from "@/components/LogoImage";
import NavBarNav from "@/components/NavBarNav";

type Props = {
  CTALabel?: string;
  CTAHref?: string;
  children: React.ReactNode;
};

export default function NavBar({
  CTALabel = 'Sign In',
  CTAHref = '/signin',
  children,
}: Props) {
  return (
    <header className="px-3 py-2 border-b flex flex-row justify-between bg-white">
      <div className="flex items-center gap-2">
        {children}
        <div className="flex items-center w-28">
          <Logo />
        </div>
      </div>
      <NavBarNav
        CTALabel={CTALabel}
        CTAHref={CTAHref}
      />
    </header>
  );
}
