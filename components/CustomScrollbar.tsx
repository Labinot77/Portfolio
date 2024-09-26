import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoHomeSharp } from 'react-icons/io5';

const CustomScrollbar = () => {
  const [activeSection, setActiveSection] = useState<string>('section-1');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this value to control when the section is considered "in view"
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className='hidden lg:block fixed left-4 bottom-[50%] transition-all duration-75 ease-in-out'>
      <div className='flex flex-col gap-2 justify-center items-center h-full w-full'>
        {/* Home Icon */}
        <div
          className={`rounded-full p-3 ${
            activeSection === 'section-1' ? 'bg-blue-500' : 'bg-black dark:bg-white'
          }`}
        >
          <IoHomeSharp
            className={`${
              activeSection === 'section-1' ? 'text-white' : 'dark:text-black text-white'
            }`}
            size={20}
          />
        </div>

        {/* GitHub Icon */}
        <div
          className={`rounded-full p-3 ${
            activeSection === 'section-2' ? 'bg-blue-500' : 'bg-black dark:bg-white'
          }`}
        >
          <FaGithub
            className={`${
              activeSection === 'section-2' ? 'text-white' : 'dark:text-black'
            }`}
            size={20}
          />
        </div>
      </div>
    </main>
  );
};

export default CustomScrollbar;
