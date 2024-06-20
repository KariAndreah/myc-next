import React from 'react';
import '@mantine/core/styles.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function PageLayout({
  children,
  className,
  hasFilter,
  hasMobileFilter,
  hasBackButton,
}: PageLayoutProps) {
  return (
    // bg-cyan-100 <-- blue color I like bg-black-white shadow-box-shadow-background bg-cover
    <div className={`${className}`}>
      <Header
        hasFilter={hasFilter}
        hasMobileFilter={hasMobileFilter}
        hasBackButton={hasBackButton}
      />
      <section className="bg-black-white bg-cover">{children}</section>
      <Footer />
    </div>
  );
}

export default PageLayout;

export type PageLayoutProps = {
  children?: React.ReactNode;
  className?: any;
  hasFilter?: any;
  hasMobileFilter?: any;
  hasBackButton?: any;
};
