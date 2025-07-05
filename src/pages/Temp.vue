<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouthConnect | Networking for Young Professionals</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .transition-all {
            transition: all 0.3s ease;
        }
        
        .active-tab {
            border-bottom: 3px solid #2563eb;
            color: #2563eb;
            font-weight: 600;
        }
        
        .interest-tag {
            transition: all 0.2s ease;
        }
        
        .interest-tag:hover {
            background-color: #2563eb;
            color: white;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <i class="fas fa-users text-blue-600 text-2xl mr-2"></i>
                        <span class="text-xl font-bold text-blue-600">YouthConnect</span>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#home" class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium active-tab">
                            Home
                        </a>
                        <a href="#profile" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Profile
                        </a>
                        <a href="#matching" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Matching
                        </a>
                        <a href="#events" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Events
                        </a>
                    </div>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                        Sign Out
                    </button>
                </div>
                <div class="-mr-2 flex items-center sm:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Mobile menu -->
    <div class="hidden sm:hidden pt-16" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
            <a href="#home" class="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
            <a href="#profile" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Profile</a>
            <a href="#matching" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Matching</a>
            <a href="#events" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Events</a>
            <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Sign Out</a>
        </div>
    </div>

    <!-- Main Content -->
    <div class="pt-16">
        <!-- Home Page -->
        <section id="home" class="min-h-screen">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">Connect with Like-Minded Youth</h1>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">Build your professional network, find mentors, and collaborate on projects with peers who share your interests and ambitions.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="bg-white rounded-lg shadow-md p-6 card-hover transition-all">
                        <div class="text-blue-600 mb-4">
                            <i class="fas fa-user-friends text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Find Mentors</h3>
                        <p class="text-gray-600">Connect with experienced professionals who can guide you in your career journey.</p>
                    </div>
                    
                    <div class="bg-white rounded-lg shadow-md p-6 card-hover transition-all">
                        <div class="text-blue-600 mb-4">
                            <i class="fas fa-lightbulb text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Collaborate</h3>
                        <p class="text-gray-600">Work on projects with peers who complement your skills and share your vision.</p>
                    </div>
                    
                    <div class="bg-white rounded-lg shadow-md p-6 card-hover transition-all">
                        <div class="text-blue-600 mb-4">
                            <i class="fas fa-calendar-alt text-4xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Events</h3>
                        <p class="text-gray-600">Join workshops, hackathons, and networking events tailored for young professionals.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0 gradient-bg md:w-1/3 flex items-center justify-center p-12">
                            <i class="fas fa-quote-left text-white text-6xl opacity-30"></i>
                        </div>
                        <div class="p-8 md:w-2/3">
                            <div class="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">Success Story</div>
                            <p class="block mt-1 text-lg leading-tight font-medium text-gray-900">"YouthConnect helped me find my co-founder and build an amazing team for our startup!"</p>
                            <p class="mt-2 text-gray-600">I was struggling to find people who shared my passion for sustainable fashion. Through YouthConnect, I met designers, marketers, and developers who helped turn my idea into reality. The platform's matching algorithm is incredibly accurate!</p>
                            <div class="mt-4 flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson">
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">Sarah Johnson</div>
                                    <div class="text-sm text-gray-500">CEO, EcoWear</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Profile Page -->
        <section id="profile" class="min-h-screen bg-gray-50 hidden">
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
        
        <!-- Matching Page -->
        <section id="matching" class="min-h-screen bg-gray-50 hidden">
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
        
        <!-- Login Modal -->
        <div id="login-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center hidden z-20">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-2xl font-bold text-gray-900">Welcome Back</h3>
                        <button id="close-login" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <form class="space-y-6">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                        </div>
                        
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
                            </div>
                            
                            <div class="text-sm">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                            </div>
                        </div>
                        
                        <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Sign in
                            </button>
                        </div>
                    </form>
                    
                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                        
                        <div class="mt-6 grid grid-cols-3 gap-3">
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-google text-red-500"></i>
                                </a>
                            </div>
                            
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-facebook-f text-blue-600"></i>
                                </a>
                            </div>
                            
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-linkedin-in text-blue-500"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-center">
                        <p class="text-sm text-gray-600">
                            Don't have an account? 
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Registration Modal -->
        <div id="register-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center hidden z-20">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-y-auto" style="max-height: 90vh;">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-2xl font-bold text-gray-900">Join YouthConnect</h3>
                        <button id="close-register" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                <div class="mt-1">
                                    <input id="first-name" name="first-name" type="text" autocomplete="given-name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                </div>
                            </div>
                            
                            <div>
                                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                <div class="mt-1">
                                    <input id="last-name" name="last-name" type="text" autocomplete="family-name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                        </div>
                        
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                            <p class="mt-2 text-xs text-gray-500">Must be at least 8 characters</p>
                        </div>
                        
                        <div>
                            <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <div class="mt-1">
                                <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">I am a</label>
                            <div class="grid grid-cols-3 gap-3">
                                <div class="flex items-center">
                                    <input id="student" name="role" type="radio" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                                    <label for="student" class="ml-2 block text-sm text-gray-700">Student</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="professional" name="role" type="radio" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                                    <label for="professional" class="ml-2 block text-sm text-gray-700">Professional</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="entrepreneur" name="role" type="radio" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                                    <label for="entrepreneur" class="ml-2 block text-sm text-gray-700">Entrepreneur</label>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Interests (Select at least 3)</label>
                            <div class="flex flex-wrap gap-2">
                                <div class="flex items-center">
                                    <input id="tech-interest" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="tech-interest" class="ml-2 text-sm text-gray-700">Technology</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="business-interest" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="business-interest" class="ml-2 text-sm text-gray-700">Business</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="design-interest" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="design-interest" class="ml-2 text-sm text-gray-700">Design</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="social-interest" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="social-interest" class="ml-2 text-sm text-gray-700">Social Impact</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="art-interest" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="art-interest" class="ml-2 text-sm text-gray-700">Arts</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="science-interest" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                    <label for="science-interest" class="ml-2 text-sm text-gray-700">Science</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" name="terms" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" required>
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-medium text-gray-700">I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a></label>
                            </div>
                        </div>
                        
                        <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Create Account
                            </button>
                        </div>
                    </form>
                    
                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>
                        
                        <div class="mt-6 grid grid-cols-3 gap-3">
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-google text-red-500"></i>
                                </a>
                            </div>
                            
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-facebook-f text-blue-600"></i>
                                </a>
                            </div>
                            
                            <div>
                                <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-linkedin-in text-blue-500"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-center">
                        <p class="text-sm text-gray-600">
                            Already have an account? 
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
                    <ul class="mt-4 space-y-4">
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">About</a></li>
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">Resources</h3>
                    <ul class="mt-4 space-y-4">
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Help Center</a></li>
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Community</a></li>
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Guides</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3>
                    <ul class="mt-4 space-y-4">
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Privacy</a></li>
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Terms</a></li>
                        <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">Connect</h3>
                    <div class="mt-4 flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-500">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div class="mt-6">
                        <p class="text-sm text-gray-500">Subscribe to our newsletter</p>
                        <div class="mt-2 flex">
                            <input type="email" placeholder="Your email" class="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-1">
                            <button class="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 border-t border-gray-200 pt-8">
                <p class="text-base text-gray-400 text-center">&copy; 2023 YouthConnect. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.querySelector('nav button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Tab navigation
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active tab
                navLinks.forEach(navLink => navLink.classList.remove('active-tab'));
                this.classList.add('active-tab');
                
                // Hide all sections
                sections.forEach(section => section.classList.add('hidden'));
                
                // Show selected section
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.remove('hidden');
                
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Login modal toggle
        document.getElementById('close-login').addEventListener('click', function() {
            document.getElementById('login-modal').classList.add('hidden');
        });

        // Registration modal toggle
        document.getElementById('close-register').addEventListener('click', function() {
            document.getElementById('register-modal').classList.add('hidden');
        });

        // Interest tags interaction
        const interestTags = document.querySelectorAll('.interest-tag');
        interestTags.forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('bg-blue-500');
                this.classList.toggle('text-white');
            });
        });

        // Card hover effect
        const cards = document.querySelectorAll('.card-hover');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    </script>
</body>
</html>