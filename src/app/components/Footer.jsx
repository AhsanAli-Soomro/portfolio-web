import React from 'react'

function Footer() {
    return (
        <div>

            <footer class="bg-black bottom-0 shadow">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Ahsan Ali</a>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/About" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/Hire" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer
