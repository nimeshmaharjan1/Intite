import React from 'react';
import MainLayout from '@components/layout/main';
import { NextPageWithLayout } from './_app';
import Carousel from '@components/pages/home/carousel';
import Image from 'next/image';
const Home: NextPageWithLayout = () => {
    return (
        <>
            <Carousel></Carousel>
            {/* <section className="new-collection min-h-screen"></section> */}
            <div className="flex flex-col md:flex-row py-8 md:py-16 px-6 md:px-20 gap-8 md:gap-0 justify-center md:justify-around container items-center">
                <div className="bras relative cursor-pointer scale-100 hover:scale-105 transition-all">
                    <span className="absolute top-2/4 left-2/4 font-bold text-2xl  text-white">Bras</span>
                    <Image
                        src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dwd9bb7d50/images/all_HP_CategorieBanners_CW3922_Bra_int.jpg"
                        quality={100}
                        width={500}
                        height={500}
                        alt="bras"
                    ></Image>
                </div>
                <div className="knickers relative cursor-pointer scale-100 hover:scale-105 transition-all">
                    <span className="absolute top-2/4 left-2/4 font-bold text-2xl  text-white">Knickers</span>
                    <Image
                        src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw41d8f8f7/images/all_HP_CategorieBanners_CW3922_Slip_int.jpg"
                        quality={100}
                        width={500}
                        height={500}
                        alt="bras"
                    ></Image>
                </div>
            </div>
            <div className="min-h-screen"></div>
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
