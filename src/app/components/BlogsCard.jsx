import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogsCard = ({ blog, onClick }) => {
  return (
    <div className="w-full max-w-xs mx-auto mt-6 sm:mt-10">
      <article
        className="relative h-52 sm:h-56 md:h-64 w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => onClick(blog)}
      >
        <Image
          src={blog.image}
          width={400}
          height={300}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover rounded-2xl"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        <div className="relative z-10 px-6 pb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white">{blog.title}</h3>
          <p className="mt-2 text-sm sm:text-base leading-6 text-gray-300 line-clamp-2">
            {blog.heading}
          </p>
        </div>
      </article>
      <div className="mt-4 text-center">
        <a
          onClick={() => onClick(blog)}
          className="text-white cursor-pointer hover:text-orange-800 font-medium transition duration-300 inline-flex items-center"
        >
          Read More
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
    </div>
  );
};

export default BlogsCard;
