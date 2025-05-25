import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop';
const Root = () => {
    return (
        <>
            <ScrollToTop /> 
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;