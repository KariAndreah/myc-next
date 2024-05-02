'use client';

import '@mantine/core/styles.css';
import { Card } from '@mantine/core';
import PageLayout from '../pagelayout/PageLayout';

const About = () => {
  console.log('About');
  return (
    <PageLayout className="h-[100%] items-center bg-black-white bg-cover shadow-box-shadow-background">
      <div className="flex flex-col items-center justify-center py-36">
        <Card className="flex flex-1 bg-slate-500 pt-32 max-w-[800px]">
          <h1>
            {' '}
            <span className="font-bold">Open</span> MYC{' '}
          </h1>
          <p>
            Welcome to OpenMYC: an open mic locating application built by Kari Burt. Kari is a
            comedian from Houston Texas who now lives in Brooklyn.
          </p>
          <p>Any issues feel free to email: openmycapp@gmail.com</p>
          <p>If you would like to submit a mic follow the link below:</p>
          <p>Submit a Link</p>
          <p>
            If you are enjoying the app my Venmo, Cashapp, are below. Especially if you actually
            make it{' '}
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};

export default About;

export type AboutProps = {};
