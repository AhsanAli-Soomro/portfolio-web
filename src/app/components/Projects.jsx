"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [


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
        }


    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className='bg-black py-12'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className='text-4xl font-bold text-orange-400 mb-8 text-center animate-fadeIn'>
                    My Projects
                </h2>
                <div className='flex flex-wrap justify-center gap-6'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} onClick={handleProjectClick} />
                    ))}
                </div>
            </div>
            {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </div>
    );
};

export default ProjectsPage;
