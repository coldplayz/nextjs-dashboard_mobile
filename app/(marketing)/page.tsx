import Link from "next/link";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";

import CTALink from "@/components/CTALink";
import hero from "@/public/webnotes_hero.png";

export default function Page() {
  // return <h1 className="px-3 py-1 bg-gray-50 text-gray-800 rounded-md shadow-md">Hello, Next.js!</h1>

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl text-gray-900 font-bold tracking-tight">Welcome to WebTodos!</h1>

      <p className="text-gray-500">Looking to keep track of your tasks on the move? Look no more as your favourite web task boaord - WebTodos - has you covered. Seamlessly keep track of your pending and completed tasks and never miss a deadline.</p>

      <CTALink
        label="Get Started"
        link="/signin"
      />

      <Image
        src={hero}
        alt="Hero image"
      />
    </div>
  );
}
