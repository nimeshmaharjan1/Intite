import Image from 'next/image';
import React from 'react';

import SimpleImageSlider from 'react-simple-image-slider';
const Carousel = () => {
    const images = [
        { url: '/assets/carousel/jp_HP_Mockup_CW3722_Wupdate_int.jpg' },
        {
            url: 'https://www.intimissimi.com/on/demandware.static/-/Library-Sites-IntimissimiContentLibrary/default/dw82bc210f/images/us_HP_HeroBanner_CW4322_LoyaltyOnlyFriendsAndFamily20Off_int.jpg',
        },
    ];
    const [DeviceWidth, setDeviceWidth] = React.useState(0);
    const [DeviceHeight, setDeviceHeight] = React.useState(0);
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
        window.addEventListener('resize', () => {
            setDeviceWidth(window.innerWidth);
            setDeviceHeight(window.innerHeight);
        });
    }, []);
    if (!isMounted) return null;
    return (
        <SimpleImageSlider
            width={DeviceWidth > 1440 ? DeviceWidth - 19 : DeviceWidth}
            height={DeviceWidth <= 426 ? 400 : '90vh'}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={2}
        />
    );
};

export default Carousel;
