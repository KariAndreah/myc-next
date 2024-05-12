'use client';

import '@mantine/core/styles.css';
import { Card } from '@mantine/core';
import PageLayout from '../pagelayout/PageLayout';

const About = () => {
  console.log('About');
  return (
    <PageLayout className="items-center">
      <div className="flex flex-col items-center justify-center py-36 bg-black-white bg-cover shadow-box-shadow-background min-h-[100vh]">
        <Card className="flex flex-1 bg-slate-500 pt-32 max-w-[800px]">
          <h1 className="font-bold text-4xl">About</h1>
          <h3 className="font-bold text-xl pt-6">What is this?</h3>
          <p className="pt-2">
            This website provides the location of open mics throughout the 5 boroughs of NYC. Using
            this website, you can find open mics based on the borough, day, time and most
            importantly whether theya re free.
          </p>
          <h3 className="font-bold text-xl pt-6">How can I support the app?</h3>
          <p className="pt-2">
            {' '}
            If you are enjoying the app my Venmo, Cashapp, are below. Especially if you actually
            make it{' '}
          </p>
          <h3 className="font-bold text-xl pt-6">Some mics are missing!</h3>
          <p className="pt-2">
            This website is built based on what mics we know of. If you know of a mic that should be
            on the list feel free to submit a mic! We will try to keep the list as up-to-date as
            possible.
          </p>
          <h3 className="font-bold text-xl pt-6">I have a different issue!</h3>
          <p className="pt-2">Any issues feel free to email: openmycapp@gmail.com</p>

          <h3 className="font-bold text-xl pt-6">So who built this?</h3>
          <p className="pt-2">
            OpenMYC was created by Kari Burt, a comedian from Houston that was trying to navigate
            the NYC open mic scene.
          </p>
          <h3 className="font-bold text-xl pt-6">What is the technology stack?</h3>
          <p className="pt-2">
            OpenMYC is a fullstack application consisting of a NextJS frontend, Node.js backend, and
            a PostreSQL database. The entire stack was deployed at DigitalOcean.
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default About;

export type AboutProps = {};
