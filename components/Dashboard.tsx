import React from 'react';
import { ScrollButton } from './Buttons/Buttons';
import ContactMe from './ContactMe';
import ProjectPreview from './ProjectPreview';
import { MyProjects } from '@/constants';

const Dashboard = () => {
  return (
    <main className='max-w-6xl mx-auto h-full p-3 relative'>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-7 px-24'>
        {MyProjects.map((project) => (
          <ProjectPreview
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            websiteLink={project.websiteLink}
            sourceLink={project.sourceLink}
            bgColor={project.bgColor}
            dark={project.dark}
          />
        ))}
      </div>

      {/* 
      <div className='absolute right-6 bottom-6'>
        <ScrollButton type='up' to='section-1' />
      </div> 
      */}
    </main>
  );
};

export default Dashboard;
