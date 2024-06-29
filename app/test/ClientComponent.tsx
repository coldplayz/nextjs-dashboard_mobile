'use client';

import { join } from "path";

import { x2 } from "./serverApi";
const x3 = window.location.href;

export default function Component() {
  const x = join('/my', 'joined', 'path');
  const env = !!window ? 'client' : 'server';

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-3/4 p-2 bg-gray-100">
        <div className="font-bold text-2xl">{x}</div>
        <p className="text-muted-foreground">{process.env.API_PREFIX}</p>
        <p className="text-muted-foreground">{env}</p>
        {/* <p className="text-muted-foreground">{x3}</p> */}
      </div>
    </div>
  );
}
