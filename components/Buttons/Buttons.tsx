"use client"

import { FaArrowDown, FaArrowUp } from "react-icons/fa6";


export const ScrollButton = ({ type }: { type : string}) => {
  return (
    <div className='flex justify-center items-center'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        {type === "up" ? <FaArrowUp /> : <FaArrowDown />}
      </button>
    </div>
  )
}

// export const SubmitButton = () => {
//   return (
//     <div className='flex justify-center items-center'>
//       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//       </button>
//     </div>
//   )
// }