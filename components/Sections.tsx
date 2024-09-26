import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef } from 'react'

interface Props {
  children: React.ReactNode;
  className: string;
  // theme: string;
  // setTheme: (value: string) => void;
}

const Sections = ({ children, className}: Props) => {
  // let container = useRef(null);
  // let {scrollYProgress} = useScroll({
  //   target: container,
  //   offset: [ "start center", "end center"],
  // })

  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  // if( value > 0 && value < 1) {
  //   setTheme(theme);
  // }})

  return (
    <section
    className={`bg-neutral-100 ${className}`} 
    // ref={container}
    >
      {children}
    </section> 
  )
}

export default Sections