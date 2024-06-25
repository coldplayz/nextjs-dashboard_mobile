import Image from "next/image";

import CTALink from "./CTALink";
import logo from "@/public/webtodos_logo2.png";
import NavBarNav from "@/components/NavBarNav";

type Props = {
  CTALabel?: string;
  CTAHref?: string;
};

export default function NavBar({
  CTALabel = 'Sign In',
  CTAHref = '/signin',
}: Props) {
  return (
    <header className="px-3 py-2 border-b flex flex-row justify-between bg-white">
      <Image
        src={logo}
        alt="Website Logo"
        width={100}
        // height={5}
      />
      <NavBarNav
        CTALabel={CTALabel}
        CTAHref={CTAHref}
      />
    </header>
  );
}
