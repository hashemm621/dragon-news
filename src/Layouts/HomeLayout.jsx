import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <aside>

                </aside>

                <section className="main">
                    <Outlet></Outlet>
                </section>

                <aside>

                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayout;