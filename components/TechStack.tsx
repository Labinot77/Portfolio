import { TechStackIcons } from '@/constants'
import Image from 'next/image'

const TechStack = () => {
  return (
      <nav className='fixed top-2 w-screen flex justify-center z-10'>
        <ul className='backdrop-blur-sm rounded-lg bg-neutral-400/20 flex gap-2 px-4 py-5 shadow-xl'> 
          {TechStackIcons.map((icon, index) => (
            <div key={index} className='flex justify-center border-[1px] border-neutral-800/50 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 overflow-hidden'> 
              <Image className='text-white rounded-md' src={icon.icon} alt="css" width={38} height={38} />
            </div>
          ))}
        </ul>
      </nav>
  )
}

export default TechStack