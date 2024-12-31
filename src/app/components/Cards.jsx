"use client";
import React from "react";

const Cards = () => {
  const CardData = [
    {
      title: "Responsive Design",
      features: [
        "Ensuring websites look great on all devices",
        "Flexible grid layouts",
        "Media queries for adaptability",
        "Optimized images for faster loading",
        "Touch-friendly navigation",
      ],
    },
    {
      title: "UI/UX Prototyping",
      features: [
        "Creating interactive prototypes",
        "User flow diagrams",
        "Wireframing and mockups",
        "Usability testing and feedback",
        "Iterative design improvements",
      ],
    },
    {
      title: "SEO Optimization",
      features: [
        "Keyword research and integration",
        "Optimizing meta tags and descriptions",
        "Ensuring fast load times",
        "Creating SEO-friendly URLs",
        "Improving site architecture",
      ],
    },
    {
      title: "Custom Animations",
      features: [
        "Engaging CSS animations",
        "Interactive JavaScript effects",
        "Smooth transitions and hover effects",
        "Animation libraries integration",
        "Performance optimization for animations",
      ],
    },
    {
      title: "Cross-Browser Compatibility",
      features: [
        "Testing across major browsers",
        "Ensuring consistent design and functionality",
        "Polyfills for unsupported features",
        "Debugging browser-specific issues",
        "Maintaining legacy browser support",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-orange-300 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-800 mb-8 sm:mb-12 text-center">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {CardData.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transform transition-transform hover:-translate-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-4">
                {data.title}
              </h3>
              <ul className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/About"
                className="text-orange-700 hover:text-orange-900 font-medium transition duration-300 inline-flex items-center"
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
    </div>
  );
};

export default Cards;
