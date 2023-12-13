import React from 'react';
import '@mantine/core/styles.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function PageLayout({ children }: PageLayoutProps) {
  return (
    // bg-cyan-100 <-- blue color I like
    <div className=" h-full">
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default PageLayout;

export type PageLayoutProps = {
  children?: React.ReactNode;
};
