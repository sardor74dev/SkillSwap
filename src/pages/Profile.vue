<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

onMounted(() => {
    console.log(route.fullPath)
})
</script>

<template>
    <section id="profile" class="min-h-screen bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white shadow rounded-lg overflow-hidden">
                <div class="gradient-bg px-6 py-8">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="flex-shrink-0 mb-4 md:mb-0">
                            <img class="h-32 w-32 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile picture">
                        </div>
                        <div class="md:ml-6 text-center md:text-left">
                            <h1 class="text-2xl font-bold text-white">Alex Rodriguez</h1>
                            <p class="text-blue-100">Software Developer | Entrepreneur</p>
                            <p class="text-blue-100 mt-2"><i class="fas fa-map-marker-alt mr-1"></i> San Francisco, CA</p>
                            <div class="mt-3 flex justify-center md:justify-start space-x-2">
                                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
                                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">React</span>
                                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">Startups</span>
                            </div>
                        </div>
                        <div class="ml-auto hidden md:block">
                            <button class="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-all">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="px-6 py-4">
                    <div class="border-b border-gray-200">
                        <nav class="flex -mb-px space-x-8">
                            <a href="#" class="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm active-tab">
                                About
                            </a>
                            <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                Connections
                            </a>
                            <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                Projects
                            </a>
                            <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                Events
                            </a>
                        </nav>
                    </div>
                    
                    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="md:col-span-2">
                            <h2 class="text-lg font-medium text-gray-900 mb-4">About Me</h2>
                            <p class="text-gray-600">
                                Passionate software developer with 3 years of experience building web applications. Currently working on my startup that helps small businesses establish an online presence. Looking to connect with other tech entrepreneurs and designers who are interested in social impact projects.
                            </p>
                            
                            <h2 class="text-lg font-medium text-gray-900 mt-8 mb-4">Experience</h2>
                            <div class="space-y-4">
                                <div class="border-l-4 border-blue-500 pl-4 py-1">
                                    <h3 class="font-medium">Founder & Developer</h3>
                                    <p class="text-sm text-gray-600">TechForGood | 2021 - Present</p>
                                    <p class="text-gray-600 mt-1">Building SaaS solutions for non-profits and small businesses.</p>
                                </div>
                                <div class="border-l-4 border-blue-500 pl-4 py-1">
                                    <h3 class="font-medium">Frontend Developer</h3>
                                    <p class="text-sm text-gray-600">Digital Solutions Inc. | 2019 - 2021</p>
                                    <p class="text-gray-600 mt-1">Developed responsive web applications using React and Node.js.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h2 class="text-lg font-medium text-gray-900 mb-4">Looking For</h2>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-blue-500 mr-2"></i>
                                    <span class="text-gray-600">Technical Co-founder</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-blue-500 mr-2"></i>
                                    <span class="text-gray-600">UI/UX Designers</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-blue-500 mr-2"></i>
                                    <span class="text-gray-600">Mentorship</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-blue-500 mr-2"></i>
                                    <span class="text-gray-600">Collaborators for hackathons</span>
                                </li>
                            </ul>
                            
                            <h2 class="text-lg font-medium text-gray-900 mt-8 mb-4">Contact</h2>
                            <div class="space-y-2">
                                <div class="flex items-center text-gray-600">
                                    <i class="fas fa-envelope mr-2 text-blue-500"></i>
                                    <span>alex.rodriguez@example.com</span>
                                </div>
                                <div class="flex items-center text-gray-600">
                                    <i class="fab fa-linkedin mr-2 text-blue-500"></i>
                                    <span>linkedin.com/in/alexrodriguez</span>
                                </div>
                                <div class="flex items-center text-gray-600">
                                    <i class="fab fa-github mr-2 text-blue-500"></i>
                                    <span>github.com/alexrod</span>
                                </div>
                            </div>
                            
                            <button class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all">
                                Share Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>