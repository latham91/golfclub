import UserMenuItem from "./UserMenuItem";
import { FaGolfBall } from "react-icons/fa";
import { HiCog6Tooth } from "react-icons/hi2";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

export default function UserMenu({ closeMenu }) {
   return (
      <div
         onMouseLeave={closeMenu}
         className="absolute w-52 border-[2px] rounded-md top-14 right-0 bg-neutral-50 border-slate-900/90 overflow-hidden text-slate-900 font-sans"
      >
         <div className="p-2 font-semibold border-b-[1px]">
            Member Settings
         </div>
         <UserMenuItem
            label="Book a Tee Time"
            icon={FaGolfBall}
         />
         <UserMenuItem
            label="Enter Competitions"
            icon={AiTwotoneCalendar}
         />
         <UserMenuItem
            label="Manage Account"
            icon={HiCog6Tooth}
         />
         <UserMenuItem
            label="Sign Out"
            icon={FiLogOut}
            href="/signout"
         />
      </div>
   );
}
