import { useTheme } from 'next-themes';
import Head from 'next/head';
import React from 'react';
import Header from './header';
import Footer from './footer';
import ThemeToggler from '@components/ui/theme-toggler';
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
        setTheme('luxury');
    }, [setTheme]);
    if (!isMounted) return null;
    return (
        <section className="min-h-screen overflow-x-hidden relative">
            <Head>
                <title>Base</title>
                <meta name="description" content="Website for base" />
            </Head>
            <header className={`sticky top-0 z-50 ${resolvedTheme === 'luxury' ? 'bg-black' : 'bg-white'}`}>
                <Header></Header>
            </header>
            <main>{children}</main>
            <Footer></Footer>
            <div className="fixed bottom-5 right-5 md:right-10">
                <ThemeToggler></ThemeToggler>
            </div>
        </section>
    );
};

export default MainLayout;
