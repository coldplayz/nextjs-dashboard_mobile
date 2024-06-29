import Image from "next/image";

import logo from "@/public/webTasks_logo.png";

export default function LogoImage({
}) {
  return (
    <div className="w-full">
      <Image
        src={logo}
        alt="Website Logo"
        className="object-contain"
        // objectFit="contain"
        // width={100}
        // height={5}
      />
    </div>
  );
}
