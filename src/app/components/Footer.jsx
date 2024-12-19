import React from 'react';

function Footer() {
    return (
        <footer className="bg-purple-900 text-white py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm text-center md:text-left">
                    © 2024 <a href="/" className="hover:underline font-semibold">Ahsan Ali</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-4 md:mt-0 text-sm font-medium text-gray-300">
                    <li className="mr-6">
                        <a href="/About" className="hover:text-white transition duration-300">About</a>
                    </li>
                    <li>
                        <a href="/Hire" className="hover:text-white transition duration-300">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
