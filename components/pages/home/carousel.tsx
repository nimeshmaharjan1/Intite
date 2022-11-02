import Image from 'next/image';
import React from 'react';

import SimpleImageSlider from 'react-simple-image-slider';
const Carousel = () => {
    const images = [
        { url: '/assets/carousel/jp_HP_Mockup_CW3722_Wupdate_int.jpg' },
        { url: '/assets/carousel/de-at_HP_HeroBanner_CW4222_HeidiAndLeniCampaign_2ndUpdate_int.jpg' },
    ];
    const [DeviceWidth, setDeviceWidth] = React.useState(0);
    const [DeviceHeight, setDeviceHeight] = React.useState(0);
    React.useEffect(() => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
        window.addEventListener('resize', () => {
            setDeviceWidth(window.innerWidth);
            setDeviceHeight(window.innerHeight);
        });
    }, []);
    console.log(DeviceWidth);
    return (
        <SimpleImageSlider
            width={DeviceWidth > 1440 ? DeviceWidth - 5 : DeviceWidth}
            height={DeviceWidth <= 426 ? 400 : '90vh'}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={DeviceWidth <= 426 ? false : true}
            autoPlayDelay={8}
        />
    );
};

export default Carousel;
