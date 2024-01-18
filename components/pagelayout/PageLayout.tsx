import React from 'react';
import '@mantine/core/styles.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function PageLayout({ children, className }: PageLayoutProps) {
  return (
    // bg-cyan-100 <-- blue color I like
    <div className={`bg-black-white bg-cover shadow-box-shadow-background ${className}`}>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default PageLayout;

export type PageLayoutProps = {
  children?: React.ReactNode;
  className?: any;
};
