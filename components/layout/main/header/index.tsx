import ThemeToggler from '@components/ui/theme-toggler';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import SubHeader from './sub-header';

const Header = () => {
    const { resolvedTheme, setTheme, theme } = useTheme();
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
        setTheme('luxury');
    }, [setTheme]);
    if (!isMounted) return null;
    return (
        <>
            <header className={`wrapper border-b-[1px] sticky top-0 ${theme === 'luxury' ? 'border-b-zinc-800' : 'border-b-zinc-100'} `}>
                <div className="container h-14 flex items-center justify-between">
                    <h2 className="font-light">Women</h2>
                    <div className="brand cursor-pointer">Brand</div>
                    <nav className="flex items-center justify-between gap-4">
                        <Link href="/auth/sign-up">
                            <button className="btn btn-primary btn-sm">Login</button>
                        </Link>
                        <ThemeToggler></ThemeToggler>
                    </nav>
                </div>
            </header>
            <SubHeader></SubHeader>
        </>
    );
};

export default Header;
