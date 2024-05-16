import '@mantine/core/styles.css';
import { Card } from '@mantine/core';
import PageLayout from '@/components/pagelayout/PageLayout';

const NotFound = () => (
  <PageLayout className="h-[100%] items-center">
    <div className="flex flex-col items-center justify-center py-36 h-full ">
      <Card className="flex flex-1 bg-slate-500 pt-32 max-w-[800px]">
        <h1 className="text-7xl inherit bg-gradient-to-r from-blue-400 to-orange-600 inline-block font-bold text-transparent bg-clip-text text-center">
          Oops!
        </h1>
        <h2 className="font-light text-2xl lg:text-4xl md:text-3xl px-2 text-center text-[#1A1F2C]">
          <p>We lost this page</p>
          <p>
            Let me help you back
            <a className="text-blue-400" href="/">
              {' '}
              home
            </a>
          </p>
        </h2>
      </Card>
    </div>
  </PageLayout>
);

export default NotFound;
