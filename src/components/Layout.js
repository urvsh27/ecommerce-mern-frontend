import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header />
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'TrendCart App',
  description: 'E-commerce site using mern stack.',
  keywords: 'mongodb, express, react, nodejs',
};

export default Layout;
