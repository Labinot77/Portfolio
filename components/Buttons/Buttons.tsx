"use client";

import Link from "next/link";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

interface Props {
  type: string;
  to: string;
}

export const ScrollButton = ({ type, to }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={`#${to}`}>
        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {type === "up" ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </Link>
    </div>
  );
};

// export const SubmitButton = () => {
//   return (
//     <div className='flex justify-center items-center'>
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//       </button>
//     </div>
//   )
// }

export const redirectToSite = ({ link, icon }: { link: string; icon: React.ReactNode; }) => {
  <Link href={`#${link}`}>
  <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {icon}
  </button>
</Link>
}