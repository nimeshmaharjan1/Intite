import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';

const SubHeader = () => {
    const { resolvedTheme } = useTheme();
    return (
        <header className={`sub-header wrapper border-b-[1px] ${resolvedTheme === 'luxury' ? 'border-b-zinc-800' : 'border-b-zinc-200'} `}>
            <nav className="container px-6 md:px-32  flex items-center justify-between">
                <Link href="/" className={`h-12 text-[13px] font-[500] flex items-center justify-center`}>
                    New Arrivals
                </Link>
                <Link href="/" className={`h-12 text-[13px] font-[500] flex items-center justify-center`}>
                    Bras
                </Link>
                <Link href="/" className={`h-12 text-[13px] font-[500] flex items-center justify-center`}>
                    Knickers
                </Link>
                <Link href="/" className={`h-12 text-[13px] font-[500] flex items-center justify-center`}>
                    Lingerie
                </Link>
                <Link href="/" className={`h-12 text-[13px] font-[500] flex items-center justify-center`}>
                    Collections
                </Link>
            </nav>
        </header>
    );
};

export default SubHeader;
