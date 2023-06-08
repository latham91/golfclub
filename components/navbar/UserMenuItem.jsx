"use client";

import { useRouter } from "next/navigation";

export default function UserMenuItem({
   icon: Icon,
   label,
   href,
}) {
   const router = useRouter();
   return (
      <div
         onClick={() => router.push(href)}
         className="flex flex-row items-center gap-2 p-2 cursor-pointer hover:bg-blue-500/20 text-slate-900"
      >
         <Icon className="text-lg" />
         {label}
      </div>
   );
}
