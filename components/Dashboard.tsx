import React from 'react';
import { ScrollButton } from './Buttons/Buttons';
import ProjectPreview from './ProjectPreview';
import { MyProjects } from '@/constants';

const Dashboard = () => {
  return (
    <main className='max-w-6xl mx-auto h-full p-3'>
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
    </main>
  );
};

export default Dashboard;
