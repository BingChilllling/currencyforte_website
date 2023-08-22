import React from 'react';
import  { Header } from './';

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout;