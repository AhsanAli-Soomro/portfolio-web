"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectsPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const projects = [

        {
            title: 'DailyPulse',
            heading: 'YOUR PULSE ON NEWS TRENDS AND THOUGHTFUL INSIGHTS',
            description: 'DailyPulse is your ultimate destination for diverse blogs and real-time news on every topic imaginable. From the latest tech trends to lifestyle insights, we cover it all—curated by a team of passionate writers and experts in the field.',
            image: '/dailypulseweb.png',
            imageapp: '/dailypulseapp.png',
            features: [
                "Blogs on Every Topic: Stay informed with our comprehensive blogs that cover a wide range of topics. Whether you're interested in technology, lifestyle, business, or entertainment, we've got you covered. Our content is designed to keep you updated with the latest news and trends across every domain.",
                "News Category: Get real-time news updates across multiple sectors, including politics, science, technology, and global events. We ensure you stay informed with accurate and well-researched articles, bringing you the latest developments as they happen.",
                "Categorized for Easy Navigation: Easily explore our blogs through a user-friendly category system. From health and fitness to financial advice, our organized structure ensures that you can quickly find content tailored to your interests.",
                "Engaging Insights: Dive deep into insightful blogs written by experts and passionate writers. Whether it’s a detailed analysis of current trends or practical tips for daily life, our content aims to engage and inspire readers across all walks of life.",
                "Interactive Features: Engage with our community through comments, polls, and discussions. Share your opinions, ask questions, and interact with both writers and fellow readers to enhance your understanding and broaden your perspective."
            ],
            link: 'https://dailyp.vercel.app/'
        },

        {
            title: 'RoyalHunt',
            heading: 'YOUR PREMIER DESTINATION FOR PREMIUM PRODUCTS AND EXCLUSIVE DEALS',
            description: 'RoyalHunt is a one-stop e-commerce platform that offers a curated selection of high-quality products across multiple categories. From fashion and accessories to home essentials and tech gadgets, we bring you the best products at competitive prices, backed by a commitment to exceptional customer service.',
            image: '/royalhuntweb.png',
            imageapp: '/royalhuntapp.png',
            features: [
                "Wide Product Range: Explore an extensive collection of products across categories like fashion, electronics, home decor, beauty, and more. We handpick each item to ensure quality and satisfaction, catering to a variety of tastes and needs.",
                "Exclusive Deals and Discounts: Take advantage of exclusive discounts and special offers available only on RoyalHunt. Our deals are updated regularly, so you can always find great prices on popular items.",
                "User-Friendly Shopping Experience: Enjoy a seamless shopping experience with easy navigation and a clear categorization system. Our platform is designed to make finding and purchasing products effortless, whether you’re on a desktop or mobile device.",
                "Customer Reviews and Ratings: Make informed choices with the help of genuine customer reviews and ratings. We encourage honest feedback to help other shoppers, ensuring transparency and trustworthiness in every purchase.",
                "Personalized Recommendations: Get product recommendations based on your browsing and purchase history. Our advanced recommendation engine helps you discover items tailored to your preferences.",
                "Secure Payment and Fast Shipping: Shop with confidence with our secure payment options, and enjoy fast, reliable shipping on all orders. We prioritize security and efficiency to ensure a positive experience from checkout to delivery."
            ],
            link: 'https://royalhunt.vercel.app/'
        },

        {
            title: 'Imagartify',
            heading: 'Revolutionizing Image Editing with AI',
            description: 'Imagartify is an innovative online platform dedicated to transforming the way you edit images. Leveraging the power of advanced artificial intelligence, Imagartify offers a suite of cutting-edge tools designed to simplify and enhance your photo editing experience.',
            image: '/imagartifyweb.webp',
            imageapp: '/imagartifyapp.webp',
            features: [
                'Background Removal: Instantly remove backgrounds from your images with precision. Our AI ensures clean and accurate cutouts, perfect for creating transparent backgrounds or isolating subjects.',
                'Restore Background: Effortlessly restore backgrounds that may have been previously removed or altered. Our intelligent algorithms seamlessly blend the restored background with the existing image.',
                'Expand Background: Need more space in your images? Imagartify allows you to expand the background naturally, maintaining the aesthetic integrity of your photos.',
                'Additional Tools: Explore a variety of other AI-powered tools designed to enhance, retouch, and perfect your images with ease.',
            ],
            link: 'https://imageartify.vercel.app/'
        },
        {
            title: 'HireSide-Clone',
            heading: "Front-End Clone Model of HireSide",
            description: 'This web application is a front-end clone model of HireSide. The original HireSide full-stack website is developed by Verge Systems Ltd. This project aims to replicate the look and feel of HireSide\'s front-end interface.',
            image: '/hireside-clone.png',
            imageapp: '/hiresideapp.png',
            features: [
                <>For a full list of features, visit the original HireSide website at <a className="text-blue-400" href="https://hireside.com" target="_blank" rel="noopener noreferrer">www.hireside.com</a>.</>
            ],
            link: 'https://github.com/AhsanAli-Soomro/hireside-clone'
        },
        {
            "title": "Eventify",
            "heading": "Your Ultimate Event Creation Platform",
            "description": "Welcome to Eventify, the premier destination for all your event creation needs. Eventify is a cutting-edge platform designed to offer an immersive and seamless event planning experience. Whether you're organizing corporate events, social gatherings, conferences, or personal celebrations, Eventify has everything you need to make your event a success.",
            "image": "/eventweb.webp",
            "imageapp": "/eventapp.webp",
            "features": [
                "Comprehensive Event Management: Access a robust suite of tools to plan, organize, and manage events of any size and type.",
                "User-Friendly Interface: Enjoy a sleek, intuitive interface that makes event creation and management effortless.",
                "Personalized Templates: Discover a range of customizable templates tailored to various event types, helping you create stunning event pages with ease.",
                "Real-Time Collaboration: Work with your team in real-time, ensuring seamless communication and coordination throughout the event planning process.",
                "Attendee Engagement: Enhance attendee experience with interactive features such as RSVPs, live polls, and social media integration.",
                "Cross-Device Compatibility: Plan and manage your events anytime, anywhere, on any device, from your smartphone to your desktop."
            ],
            link: "https://eventify-gold.vercel.app",
        },
        {
            title: 'AutoCare Pro',
            heading: 'Redefining Car Maintenance and Repair with Expertise and Technology',
            description: 'AutoCare Pro is a state-of-the-art online platform dedicated to transforming the way you maintain and repair your vehicle. Leveraging the power of cutting-edge technology and professional expertise, AutoCare Pro offers a comprehensive suite of services designed to keep your car running smoothly and efficiently.',
            image: '/autocareproweb.webp',
            imageapp: '/autocareproapp.webp',
            features: [
                'Comprehensive Diagnostics: Utilize advanced diagnostic tools to quickly identify and troubleshoot issues with your vehicle. Our system ensures accurate detection, saving you time and money.',
                'Scheduled Maintenance: Keep your vehicle in top condition with our scheduled maintenance services. Receive timely reminders and book appointments for oil changes, tire rotations, brake inspections, and more.',
                'Emergency Repairs: Get quick and reliable repair services when you need them most. Our platform connects you with expert mechanics who are ready to address any urgent issues with your vehicle.',
                'Customer-Centric Services: Enjoy a seamless and user-friendly experience with features like online booking, service history tracking, and real-time updates on your vehicle’s status.',
                'Expert Advice: Access a wealth of knowledge from experienced professionals. Our blog and support center provide valuable tips and advice on car maintenance and repair.',
            ],
            link: 'https://car-service-iota.vercel.app/'
        },
        {
            title: 'MyVideos',
            heading: "Your Ultimate Video Watching Platform",
            description: 'Welcome to MyVideos, the premier destination for all your video watching needs. MyVideos is a cutting-edge platform designed to offer an immersive and seamless video streaming experience. Whether you\'re a fan of movies, documentaries, tutorials, or user-generated content, MyVideos has something for everyone.',
            image: '/myvideosweb.webp',
            imageapp: '/myvideosapp.webp',
            features: [
                'Vast Library: Access an extensive collection of videos spanning various genres, including entertainment, education, lifestyle, and more.',
                'User-Friendly Interface: Enjoy a sleek, intuitive interface that makes browsing and watching videos effortless.',
                'Personalized Recommendations: Discover new content tailored to your interests with our smart recommendation engine.',
                'High-Quality Streaming: Experience videos in high definition with minimal buffering, ensuring a smooth viewing experience.',
                'Community Engagement: Connect with other viewers through comments, likes, and shares, fostering a vibrant community of video enthusiasts.',
                'Cross-Device Compatibility: Watch your favorite videos anytime, anywhere, on any device, from your smartphone to your smart TV.'
            ],
            link: 'https://my-videos-nine.vercel.app/'
        },
    ];
    const handleProjectClick = (index) => {
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
    };

    const handleNextProject = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePreviousProject = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => handleProjectClick(index)}
                        />
                    ))}
                </div>
            </div>
            {selectedIndex !== null && (
                <ProjectModal
                    project={projects[selectedIndex]}
                    onClose={handleCloseModal}
                    onNext={handleNextProject}
                    onPrev={handlePreviousProject}
                />
            )}
        </div>
    );
};

export default ProjectsPage;
