import React from 'react';
import airline_ticket from '../public/assets/projects/airline_ticket.jpg';
import online_shopping from '../public/assets/projects/online_shopping.jpg'
import transport_management from '../public/assets/projects/transport_management.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem title='Airline Ticket Management System' backgroundImg={airline_ticket} projectUrl='/airline'/>

          <ProjectItem title='Online Shop Management System' backgroundImg={online_shopping} projectUrl='/shopping'/>

          <ProjectItem title='Transport Management System' backgroundImg={transport_management} projectUrl='/transport'/>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
