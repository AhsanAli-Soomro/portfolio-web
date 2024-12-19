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
        <div className="bg-white flex flex-col items-center justify-center py-12">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-8 animate-fadeIn">
                Services
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {CardData.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col mb-6 rounded-lg border border-gray-200 p-6 sm:p-8 w-full sm:w-80 md:w-96 shadow-lg transition duration-300 transform hover:shadow-xl hover:-translate-y-2 bg-white"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-700 text-white flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 ml-4">{data.title}</h3>
                        </div>
                        <ul className="text-sm leading-relaxed text-gray-600 mb-6">
                            {data.features.map((feature, idx) => (
                                <li key={idx} className="mb-2">- {feature}</li>
                            ))}
                        </ul>
                        <a
                            href="/About"
                            className="mt-auto text-purple-700 hover:text-purple-900 font-medium transition duration-300 inline-flex items-center"
                        >
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
