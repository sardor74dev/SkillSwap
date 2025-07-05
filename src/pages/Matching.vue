<template>
    <section id="matching" class="min-h-screen bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Match</h1>
                <p class="text-gray-600 max-w-2xl mx-auto">Our algorithm suggests connections based on your interests, skills, and goals. Swipe right to connect!</p>
            </div>
            
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/4">
                    <div class="bg-white rounded-lg shadow-md p-6 sticky top-4">
                        <h2 class="text-lg font-medium text-gray-900 mb-4">Filters</h2>
                        
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input id="tech" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="tech" class="ml-2 text-sm text-gray-700">Technology</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="business" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                    <label for="business" class="ml-2 text-sm text-gray-700">Business</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="design" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="design" class="ml-2 text-sm text-gray-700">Design</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="social" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                    <label for="social" class="ml-2 text-sm text-gray-700">Social Impact</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                <option>Anywhere</option>
                                <option>My City</option>
                                <option selected>My Country</option>
                                <option>Europe</option>
                                <option>North America</option>
                                <option>Asia</option>
                            </select>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Looking For</label>
                            <select class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                <option>Mentors</option>
                                <option selected>Peers</option>
                                <option>Collaborators</option>
                                <option>Investors</option>
                            </select>
                        </div>
                        
                        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all">
                            Apply Filters
                        </button>
                    </div>
                </div>
                
                <div class="md:w-3/4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Profile Card 1 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
                            <div class="relative">
                                <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile cover">
                                <div class="absolute -bottom-8 left-4">
                                    <img class="h-16 w-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile picture">
                                </div>
                            </div>
                            <div class="pt-10 px-4 pb-4">
                                <h3 class="text-lg font-semibold text-gray-900">Priya Patel</h3>
                                <p class="text-sm text-gray-600">UI/UX Designer at DesignHub</p>
                                <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> London, UK</p>
                                
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">UI Design</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Figma</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">User Research</span>
                                </div>
                                
                                <div class="mt-4 flex justify-between">
                                    <button class="text-red-500 hover:text-red-600 p-2 rounded-full border border-red-200 hover:bg-red-50 transition-all">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <button class="text-blue-500 hover:text-blue-600 p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition-all">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Profile Card 2 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
                            <div class="relative">
                                <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile cover">
                                <div class="absolute -bottom-8 left-4">
                                    <img class="h-16 w-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile picture">
                                </div>
                            </div>
                            <div class="pt-10 px-4 pb-4">
                                <h3 class="text-lg font-semibold text-gray-900">Marcus Chen</h3>
                                <p class="text-sm text-gray-600">Founder at GreenTech</p>
                                <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> Berlin, Germany</p>
                                
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Sustainability</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Startups</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Clean Energy</span>
                                </div>
                                
                                <div class="mt-4 flex justify-between">
                                    <button class="text-red-500 hover:text-red-600 p-2 rounded-full border border-red-200 hover:bg-red-50 transition-all">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <button class="text-blue-500 hover:text-blue-600 p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition-all">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Profile Card 3 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
                            <div class="relative">
                                <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile cover">
                                <div class="absolute -bottom-8 left-4">
                                    <img class="h-16 w-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/women/33.jpg" alt="Profile picture">
                                </div>
                            </div>
                            <div class="pt-10 px-4 pb-4">
                                <h3 class="text-lg font-semibold text-gray-900">Sophie Martin</h3>
                                <p class="text-sm text-gray-600">Software Engineer at TechCorp</p>
                                <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> Paris, France</p>
                                
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Python</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Machine Learning</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Data Science</span>
                                </div>
                                
                                <div class="mt-4 flex justify-between">
                                    <button class="text-red-500 hover:text-red-600 p-2 rounded-full border border-red-200 hover:bg-red-50 transition-all">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <button class="text-blue-500 hover:text-blue-600 p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition-all">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Profile Card 4 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
                            <div class="relative">
                                <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile cover">
                                <div class="absolute -bottom-8 left-4">
                                    <img class="h-16 w-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Profile picture">
                                </div>
                            </div>
                            <div class="pt-10 px-4 pb-4">
                                <h3 class="text-lg font-semibold text-gray-900">David Kim</h3>
                                <p class="text-sm text-gray-600">Marketing Specialist</p>
                                <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> Seoul, South Korea</p>
                                
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Digital Marketing</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">SEO</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Content Strategy</span>
                                </div>
                                
                                <div class="mt-4 flex justify-between">
                                    <button class="text-red-500 hover:text-red-600 p-2 rounded-full border border-red-200 hover:bg-red-50 transition-all">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <button class="text-blue-500 hover:text-blue-600 p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition-all">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Profile Card 5 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
                            <div class="relative">
                                <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile cover">
                                <div class="absolute -bottom-8 left-4">
                                    <img class="h-16 w-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Profile picture">
                                </div>
                            </div>
                            <div class="pt-10 px-4 pb-4">
                                <h3 class="text-lg font-semibold text-gray-900">Aisha Johnson</h3>
                                <p class="text-sm text-gray-600">Product Manager</p>
                                <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> Lagos, Nigeria</p>
                                
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Agile</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Fintech</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">User Stories</span>
                                </div>
                                
                                <div class="mt-4 flex justify-between">
                                    <button class="text-red-500 hover:text-red-600 p-2 rounded-full border border-red-200 hover:bg-red-50 transition-all">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <button class="text-blue-500 hover:text-blue-600 p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition-all">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Profile Card 6 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all">
                            <div class="relative">
                                <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile cover">
                                <div class="absolute -bottom-8 left-4">
                                    <img class="h-16 w-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/42.jpg" alt="Profile picture">
                                </div>
                            </div>
                            <div class="pt-10 px-4 pb-4">
                                <h3 class="text-lg font-semibold text-gray-900">Miguel Santos</h3>
                                <p class="text-sm text-gray-600">Investment Analyst</p>
                                <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> São Paulo, Brazil</p>
                                
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Venture Capital</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Startups</span>
                                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs interest-tag">Financial Modeling</span>
                                </div>
                                
                                <div class="mt-4 flex justify-between">
                                    <button class="text-red-500 hover:text-red-600 p-2 rounded-full border border-red-200 hover:bg-red-50 transition-all">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <button class="text-blue-500 hover:text-blue-600 p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition-all">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 flex justify-center">
                        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all">
                            Load More Profiles
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>