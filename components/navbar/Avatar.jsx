import Image from "next/image";

export default function Avatar({ src, alt }) {
   return (
      <Image
         src={src || "/images/placeholder.jpg"}
         height={40}
         width={40}
         alt={alt || "Avatar"}
         draggable={false}
         className="border-2 rounded-full border-slate-400/50"
      />
   );
}
