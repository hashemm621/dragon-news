import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/leftAside';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 my-3 mx-auto'>
                    <LatestNews/>
                </section>
                <nav className='w-11/12 my-3 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 *:border'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>

                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayout;