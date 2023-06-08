export default function Container({
   children,
   className,
   hero,
}) {
   return (
      <div
         className={`${className} ${
            hero ? "max-w-[1920px]" : "max-w-7xl"
         } mx-auto`}
      >
         {children}
      </div>
   );
}
