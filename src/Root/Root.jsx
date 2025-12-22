
import React from 'react';
import { Outlet } from 'react-router';
import Navbar3 from '../Navbar/Navbar3'
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar3></Navbar3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;