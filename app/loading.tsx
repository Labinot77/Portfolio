import { AiOutlineLoading } from 'react-icons/ai'

const loading = () => {
  return (
   <main className='h-screen w-full flex justify-center items-center'>
      <AiOutlineLoading size={28} className='animate-spin text-white' />
    </main>
  )
}

export default loading