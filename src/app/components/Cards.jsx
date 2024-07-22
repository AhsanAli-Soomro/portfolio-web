import React from 'react';

function Cards() {
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
        <div className='bg-black flex flex-wrap justify-center gap-6'>
            {CardData.map((data, index) => (
                <div key={index} className="flex flex-col mb-6 m-2 rounded-lg dark:bg-gray-800 bg-black border border-orange-400 p-6 sm:p-8 w-full sm:w-80 md:w-96 shadow-xl transition duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-3">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-orange-400 text-white flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 className="text-white dark:text-white text-lg font-medium ml-3">{data.title}</h2>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <ul className="leading-relaxed text-base text-white dark:text-gray-300 mb-4">
                            {data.features.map((feature, idx) => (
                                <li key={idx} className="mb-1">- {feature}</li>
                            ))}
                        </ul>
                        <a href="#" className="mt-3 text-orange-400 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;
