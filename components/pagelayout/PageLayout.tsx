import React from 'react';
import '@mantine/core/styles.css';
import Script from 'next/script';
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
    <div className={`${className} h-[100vh]`}>
      <Header
        hasFilter={hasFilter}
        hasMobileFilter={hasMobileFilter}
        hasBackButton={hasBackButton}
      />
      <section>{children}</section>
      <Footer />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2688526385644878"
      />
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
