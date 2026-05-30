import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import FluidFooter from './FluidFooter';
import CustomCursor from './CustomCursor/CustomCursor';

// --- PASTE THE IMPORT HERE ---
import '../styles/main.scss';

function MainLayout() {
    return (
        <>
            <CustomCursor />
            <Header />
            <main>
                <Outlet />
            </main>
            <FluidFooter />
        </>
    );
}

export default MainLayout;