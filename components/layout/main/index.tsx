import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from 'react';
import Header from './header';
import Footer from './footer';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { resolvedTheme } = useTheme();
    return (
        <section className="min-h-screen overflow-x-hidden">
            <Head>
                <title>Base</title>
                <meta name="description" content="Website for base" />
            </Head>
            <header className={`sticky top-0 z-50 ${resolvedTheme === 'luxury' ? 'bg-black' : 'bg-white'}`}>
                <Header></Header>
            </header>
            <main>{children}</main>
            <Footer></Footer>
        </section>
    );
};

export default MainLayout;
