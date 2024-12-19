"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const Cards = () => {
    const CardData = [
        {
            title: 'Responsive Design',
            features: [
                'Ensuring websites look great on all devices',
                'Flexible grid layouts',
                'Media queries for adaptability',
                'Optimized images for faster loading',
                'Touch-friendly navigation'
            ]
        },
        {
            title: 'UI/UX Prototyping',
            features: [
                'Creating interactive prototypes',
                'User flow diagrams',
                'Wireframing and mockups',
                'Usability testing and feedback',
                'Iterative design improvements'
            ]
        },
        {
            title: 'SEO Optimization',
            features: [
                'Keyword research and integration',
                'Optimizing meta tags and descriptions',
                'Ensuring fast load times',
                'Creating SEO-friendly URLs',
                'Improving site architecture'
            ]
        },
        {
            title: 'Custom Animations',
            features: [
                'Engaging CSS animations',
                'Interactive JavaScript effects',
                'Smooth transitions and hover effects',
                'Animation libraries integration',
                'Performance optimization for animations'
            ]
        },
        {
            title: 'Cross-Browser Compatibility',
            features: [
                'Testing across major browsers',
                'Ensuring consistent design and functionality',
                'Polyfills for unsupported features',
                'Debugging browser-specific issues',
                'Maintaining legacy browser support'
            ]
        }
    ];

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-8 text-center">
                Services
            </h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                centeredSlides={true}
                slidesPerView={1.2}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 2.2,
                    },
                    1024: {
                        slidesPerView: 3.2,
                    },
                }}
                className="relative "
            >
                {CardData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className="py-10">

                        <div className="relative flex flex-col justify-center bg-white rounded-xl shadow-lg p-6 border border-gray-200 transform transition-transform hover:scale-105">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                {data.title}
                            </h3>
                            <ul className="text-sm leading-relaxed text-gray-600">
                                {data.features.map((feature, idx) => (
                                    <li key={idx} className="mb-2">
                                        - {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            </div>
        </div>
    );
};

export default Cards;
