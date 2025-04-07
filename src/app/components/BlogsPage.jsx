"use client";
import React, { useState } from "react";
import BlogsModal from "./BlogsModal";
import BlogsCard from "./BlogsCard";

const BlogsPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const blog = [
        {
            title: 'Next.js Nirvana',
            heading: 'Why Next.js is the Ultimate Framework for Production-Ready Web Apps',
            description: 'Next.js, built on top of React, has rapidly become the go-to framework for developers seeking performance, scalability, and a great developer experience. Created by Vercel, Next.js offers a hybrid approach to rendering, allowing both server-side rendering (SSR) and static site generation (SSG) out of the box. This makes it ideal for building SEO-friendly, lightning-fast websites and applications. Features like API routes, image optimization, and built-in TypeScript support make Next.js a comprehensive solution for modern web development. Whether youre building a startup MVP or a large-scale enterprise app, Next.js equips you with the tools to succeed in production environments.',
            image: '/NextjsNirvana.jpg',
            features: [
                "Hybrid Rendering Capabilities: Support for Static Generation, Server-Side Rendering, and Incremental Static Regeneration gives unmatched flexibility.",
                "File-Based Routing: Simplifies the routing process with a page-based system that mirrors your project structure.",
                "Optimized for Performance: Features like automatic code splitting, built-in image optimization, and prefetching ensure blazing-fast user experiences.",
                "Built-in API Routes: Allows you to create backend functionality within your Next.js app, reducing the need for separate backend services.",
                "Seamless Developer Experience: Out-of-the-box support for TypeScript, CSS Modules, and hot-reloading accelerates development without configuration headaches."
            ],
        },        
        {
            title: 'ReactJS Revolution',
            heading: 'Why ReactJS is the Future of Modern Web Development',
            description: 'ReactJS, a JavaScript library developed by Facebook, has transformed the way developers build web applications. It has gained immense popularity due to its ability to create dynamic, high-performance user interfaces effortlessly. Reacts component-based architecture allows for reusability, ensuring scalability in large projects. Its virtual DOM provides an optimized rendering process, making applications faster and more efficient. With a strong developer community and a wide array of supporting libraries, React is more than just a library—it’s an entire ecosystem. From building single-page applications (SPAs) to supporting mobile app development through React Native, this tool is versatile and future-ready. Companies like Netflix, Instagram, and Airbnb rely on ReactJS for its reliability, speed, and developer-friendly environment.',
            image: '/ReactJSRevolution.avif',
            features: [
                "Component-Based Architecture: React's modular approach allows developers to create reusable and self-contained components that can be integrated seamlessly.",
                "Virtual DOM for Performance: React updates only the necessary parts of the DOM, ensuring fast and efficient rendering.",
                "State Management Made Simple: Use tools like Redux, MobX, or React Context API for hassle-free state management in even the most complex applications.",
                "Vast Ecosystem and Community: React's ecosystem includes libraries for routing, animation, data fetching, and more, along with a vibrant community that drives innovation.",
                "Cross-Platform Capabilities: Build web applications with ReactJS and extend your expertise to mobile development with React Native.",
            ],
        },
        {
            title: 'Crafting Experiences',
            heading: 'Building User-Centric Web Interfaces with Frontend Technologies',
            description: 'Frontend development is the cornerstone of creating seamless, interactive, and visually engaging web applications. The role of a frontend developer extends beyond aesthetics; it involves crafting user experiences that are intuitive and functional. With tools like HTML, CSS, and JavaScript at its core, frontend development has evolved to incorporate advanced frameworks such as React, Vue, and Angular. This evolution has enabled developers to build complex applications efficiently. The integration of APIs, real-time data, and responsive designs ensures that modern web applications are both dynamic and user-friendly. Whether it’s creating animations with CSS or enhancing interactivity with JavaScript, frontend technologies continue to push the boundaries of what’s possible in web development.',
            image: '/frontendweb.jpg',
            features: [
                "Responsive Design: Ensure your websites look stunning and function perfectly across devices, from desktops to smartphones.",
                "JavaScript Frameworks: Frameworks like React, Vue, and Angular simplify the process of building dynamic, scalable, and interactive web applications.",
                "CSS Techniques: Dive into advanced CSS methodologies such as Grid, Flexbox, and pre-processors like SASS to create professional layouts.",
                "Web Performance Optimization: Implement techniques like lazy loading, code splitting, and caching to enhance website speed and reduce loading times.",
                "Accessibility Standards: Build inclusive websites by adhering to WCAG guidelines, ensuring that your content is accessible to all users."
            ],
        },
        {
            title: 'Blueprint of Success',
            heading: 'From Concept to Launch: Mastering the Website Development Process',
            description: 'Website development encompasses a wide range of processes, from ideation to deployment. A well-developed website serves as the digital face of a business, offering solutions to user problems and delivering a seamless experience. Modern website development starts with understanding the target audience and defining the project’s goals. Choosing the right tech stack, such as MERN (MongoDB, Express, React, Node.js) or JAMstack (JavaScript, APIs, Markup), plays a critical role in building scalable, robust platforms. Beyond coding, it’s vital to focus on website security, compliance with regulations like GDPR, and search engine optimization (SEO). Post-launch, continuous monitoring and updates ensure that the website remains relevant and competitive in a fast-changing digital landscape. With the integration of analytics tools, developers can measure user engagement and improve features iteratively.',
            image: '/webdevweb.jpg',
            features: [
                "Strategic Planning: Define your website’s purpose, audience, and objectives before diving into development.",
                "Tech Stack Selection: Choose from popular backend and frontend frameworks to ensure a cohesive and efficient development process.",
                "SEO and Optimization: Implement best practices for on-page and technical SEO to improve visibility in search engines.",
                "Security and Compliance: Protect user data with SSL certificates, secure authentication, and adherence to legal frameworks like GDPR.",
                "Continuous Improvement: Utilize tools like Google Analytics and Hotjar to track performance and user behavior, refining your website over time."
            ],
        },
        {
            title: 'Vue.js Dynamics',
            heading: 'Unleashing the Power of Vue.js for Modern Frontend Development',
            description: 'Vue.js is a progressive JavaScript framework designed for building interactive and intuitive web interfaces. Known for its simplicity and flexibility, Vue.js has become a favorite among developers who want a lightweight yet powerful tool for creating single-page applications (SPAs). Its reactive data binding, component-based structure, and seamless integration with other libraries make it highly versatile. Vue.js bridges the gap between traditional web development and the needs of modern, complex applications while maintaining an approachable learning curve. Whether youre building small widgets or large-scale apps, Vue.js ensures a smooth and efficient development experience.',
            image: '/vuejsweb.jpeg',
            features: [
                "Reactive Data Binding: Vue.js offers a straightforward way to manage and synchronize your application’s data and UI.",
                "Component-Based Development: Easily build reusable and modular components, streamlining the development process.",
                "Vue CLI: Simplify project setup and scaffolding with the intuitive Vue CLI, tailored for developer efficiency.",
                "Vuex State Management: Manage complex state with Vuex, a powerful centralized state management library.",
                "Integration-Friendly: Use Vue.js with existing projects or libraries for seamless functionality enhancement."
            ],
        },
        {
            title: 'Angular Mastery',
            heading: 'Building Robust Applications with Angular Framework',
            description: 'Angular is a comprehensive framework for building client-side applications, maintained by Google. Designed for scalability, it is ideal for creating enterprise-level applications with complex requirements. Angular offers powerful features like dependency injection, a reactive forms module, and RxJS for handling asynchronous data streams. Its TypeScript foundation ensures that code is maintainable and reliable. Angular stands out for its end-to-end tooling, which includes Angular CLI for scaffolding projects and Angular Universal for server-side rendering. This framework’s opinionated nature and robust ecosystem make it a go-to choice for developers aiming to deliver high-performance and feature-rich applications.',
            image: '/angularweb.png',
            features: [
                "Two-Way Data Binding: Synchronize your data model with the UI effortlessly.",
                "TypeScript Foundation: Write clean, type-safe code with Angular’s TypeScript base.",
                "Angular CLI: Accelerate development with powerful command-line tools for project generation and optimization.",
                "RxJS for Asynchronous Programming: Handle events and data streams effectively with Reactive Extensions.",
                "Enterprise-Ready: Angular’s modular architecture ensures scalability and maintainability in large applications."
            ],
        },
        {
            title: 'Progressive Web Applications',
            heading: 'Revolutionizing User Experience with Progressive Web Apps',
            description: 'Progressive Web Applications (PWAs) combine the best of web and mobile app technologies to deliver a seamless user experience. PWAs are reliable, fast, and engaging, providing app-like functionality without the need for app store downloads. By leveraging features like offline access, push notifications, and responsive design, PWAs bridge the gap between websites and native apps. Built using modern web technologies such as Service Workers, Web App Manifests, and HTTPS, PWAs are secure and performant. Businesses adopting PWAs see improved user engagement, better load times, and cost-effective app solutions.',
            image: '/pwaweb.jpeg',
            features: [
                "Offline Functionality: Use Service Workers to enable offline capabilities for your web app.",
                "Responsive Design: Ensure your PWA delivers a consistent experience across all device types.",
                "Push Notifications: Engage users with timely notifications even when they’re not actively using the app.",
                "Add-to-Home-Screen Feature: Allow users to install the app directly from the browser without an app store.",
                "Improved Performance: Reduce load times and enhance the user experience with caching and background syncing."
            ],
        },
        {
            title: 'Full-Stack Development',
            heading: 'Mastering Both Frontend and Backend for Complete Web Solutions',
            description: 'Full-stack development is about mastering both the frontend and backend of web applications, making developers highly versatile and in demand. A full-stack developer works with technologies that handle user interfaces, server-side logic, and database interactions. Popular full-stack technologies include the MERN stack (MongoDB, Express, React, Node.js) and MEAN stack (MongoDB, Express, Angular, Node.js). Mastering full-stack development requires proficiency in frontend frameworks, backend development, and database management, as well as an understanding of DevOps practices. This skillset empowers developers to build end-to-end solutions, from simple websites to complex web applications.',
            image: '/fullstackweb.png',
            features: [
                "Frontend Development: Build engaging interfaces using React, Angular, or Vue.js.",
                "Backend Technologies: Create robust server-side logic with Node.js, Python, or Java.",
                "Database Management: Handle data storage and retrieval with databases like MongoDB, PostgreSQL, or MySQL.",
                "API Integration: Connect frontend and backend with RESTful or GraphQL APIs.",
                "DevOps Practices: Streamline development and deployment with CI/CD pipelines and cloud platforms like AWS or Azure."
            ],
        },
        {
            title: 'Next.js Masterclass',
            heading: 'Building High-Performance Applications with Next.js',
            description: 'Next.js, a React framework, simplifies the process of building production-ready web applications. It combines the power of server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR), offering flexibility and improved performance. With features like automatic code splitting, optimized image handling, and built-in API routes, Next.js is ideal for creating scalable and SEO-friendly applications. Its robust developer experience and integration with tools like Vercel make it a popular choice for modern web development. From e-commerce sites to personal blogs, Next.js is redefining what’s possible with web applications.',
            image: '/nextjsweb.png',
            features: [
                "Server-Side Rendering (SSR): Deliver dynamic content with improved SEO and performance.",
                "Static Site Generation (SSG): Pre-render pages at build time for faster load speeds.",
                "API Routes: Create backend endpoints directly within your Next.js project.",
                "Automatic Code Splitting: Optimize loading times by delivering only the necessary code for each page.",
                "Image Optimization: Use Next.js’s built-in image optimization features to improve performance."
            ],
        }





    ];
    const handleProjectClick = (index) => {
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
    };

    const handleNextProject = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % blog.length);
    };

    const handlePreviousProject = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + blog.length) % blog.length);
    };

    return (
        <div className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
                    My Blogs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blog.map((blog, index) => (
                        <BlogsCard
                            key={index}
                            blog={blog}
                            onClick={() => handleProjectClick(index)}
                        />
                    ))}
                </div>
            </div>
            {selectedIndex !== null && (
                <BlogsModal
                    blog={blog[selectedIndex]}
                    onClose={handleCloseModal}
                    onNext={handleNextProject}
                    onPrev={handlePreviousProject}
                />
            )}
        </div>
    );
};

export default BlogsPage;
