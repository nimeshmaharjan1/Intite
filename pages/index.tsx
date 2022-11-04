/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MainLayout from '@components/layout/main';
import { NextPageWithLayout } from './_app';
import Carousel from '@components/pages/home/carousel';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Splide, SplideSlide } from '@splidejs/react-splide';

const Home: NextPageWithLayout = () => {
    const { resolvedTheme } = useTheme();
    return (
        <>
            <Carousel></Carousel>
            <section className="new-collection mt-8 md:mt-12 flex flex-col items-center container px-6 md:px-0">
                <div className="tabs mb-4 whitespace-nowrap">
                    <span className="tab tab-bordered  tab-active">New Collection</span>
                    <span className="tab tab-bordered"> Ultralight with Cashmere</span>
                </div>
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        pagination: false,
                        type: 'loop',
                        drag: 'free',
                        perPage: 5,
                        perMove: 1,
                        focus: 0,
                        omitEnd: true,
                        arrows: false,
                        gap: '1rem',
                        breakpoints: {
                            768: {
                                perPage: 4,
                            },
                            426: {
                                perPage: 2,
                            },
                        },
                    }}
                >
                    <SplideSlide className="cursor-pointer">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dwc0b3c7ff/images/all_HP_ModuleWithContent_CW4022_HeidiUndLeniCampaign_06_int.jpg"
                            alt="Image 1"
                        />
                    </SplideSlide>
                    <SplideSlide className="cursor-pointer">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dwf4707075/images/all_HP_ModuleWithContent_CW4022_HeidiUndLeniCampaign_05_int.jpg"
                            alt="Image 2"
                        />
                    </SplideSlide>
                    <SplideSlide className="cursor-pointer">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw59815d79/images/all_HP_ModuleWithContent_CW4022_HeidiUndLeniCampaign_07_int.jpg"
                            alt="Image 2"
                        />
                    </SplideSlide>
                    <SplideSlide className="cursor-pointer">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw8c6efde6/images/all_HP_ModuleWithContent_CW4022_HeidiUndLeniCampaign_03_int.jpg"
                            alt="Image 2"
                        />
                    </SplideSlide>
                    <SplideSlide className="cursor-pointer">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dwf1f96002/images/all_HP_ModuleWithContent_CW4022_HeidiUndLeniCampaign_04_int.jpg"
                            alt="Image 2"
                        />
                    </SplideSlide>
                </Splide>
            </section>
            <div className="flex flex-col md:flex-row lg:min-h-[80vh] px-6 md:px-24 gap-4 lg:gap-0 md:gap-4 justify-center md:justify-around container items-center pb-0 md:pb-6 pt-6 lg:pt-0 mt-3 sm:mt-0">
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
            <section
                className={`you-may-also-like mt-12 sm:mt-0 ${
                    resolvedTheme === 'luxury' ? 'bg-neutral' : 'bg-[#f9f9f9]'
                } flex flex-col justify-center py-6 gap-4 items-center`}
            >
                <h2 className="text-center text-xl font-sans">You may also like</h2>
                <div className="px-12 pb-6">
                    <Splide
                        options={{
                            pagination: false,

                            type: 'loop',
                            drag: 'free',
                            perPage: 5,
                            perMove: 1,
                            focus: 0,
                            omitEnd: true,
                            arrows: true,
                            gap: '2rem',
                            breakpoints: {
                                768: {
                                    perPage: 4,
                                },
                                426: {
                                    perPage: 2,
                                },
                            },
                        }}
                    >
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwc78957d9/images/LCD2474998I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 1"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw9a89077c/images/RID2470989I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw56ca84b7/images/SPD2470989I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw6127dea5/images/RIF2465019-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw0175f958/images/SC2465B019-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwc4e0aefa/images/RID2471991I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw76d2d653/images/SID2471991I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw4e4e2da0/images/RPS2466987I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                        <SplideSlide className="cursor-pointer">
                            <img
                                src="https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw6008bd3b/images/SID2466987I-M.jpg?sw=400&sfrm=jpeg"
                                alt="Image 2"
                            />
                        </SplideSlide>
                    </Splide>
                </div>
            </section>
            <section className="perfect-bra wrapper">
                <div className="container mt-10 flex flex-col md:flex-row gap-4 px-4 items-center">
                    <div className="left">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw8b0adcc7/images/hp/all_HP_ImagesWithTXT_Left_CW3820_FindYourPerfectBra_int.jpg"
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <img
                            src="https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw516733d7/images/all_HP_ImagesWithTXT_Right_CW1621_LoyaltyUpdate_int.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
