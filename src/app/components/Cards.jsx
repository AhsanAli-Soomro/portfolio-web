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
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-orange-800 mb-12 text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CardData.map((data, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 border border-gray-200 transform transition-transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-orange-800 mb-4">
                {data.title}
              </h3>
              <ul className="text-sm leading-relaxed text-gray-600 mb-4">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    - {feature}
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
