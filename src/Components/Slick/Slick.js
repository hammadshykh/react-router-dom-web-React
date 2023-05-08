import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import { default as sliderImages } from "../SliderData/Slider.json"



const SimpleSlider = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        fade: true,
        arrows: false,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <Box shadow='xl'>
            <Slider {...settings} >
                {sliderImages.map((data) => (
                    <Box w="10rem" h='24rem' >
                        <Image
                            cursor="pointer"
                            objectFit="fill"
                            boxSize="full"
                            src={data.image}
                            alt="stock image"
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default SimpleSlider;
