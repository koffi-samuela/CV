import React from 'react'
// import Outlet from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
export default function Template() {
  return (
    <>
    <Header />   
        <main>
            <Outlet />
        </main>
    <Footer />
    </>
  )
}
