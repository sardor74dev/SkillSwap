<script>
import Registration from './Modals/Registration.vue';
import Login from './Modals/Login.vue';

export default {
    components: {
        Registration,
        Login
    },
    props: ["showLogin", "showRegister"],
    data(){
        return {
            mobileOpen: false,
            registrationOpen: false,
            loginOpen: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modals')
        }
    }
}
</script>
<template>
    <!-- <Registration v-if="registrationOpen" @close="registrationOpen = false" /> -->
    <Login v-if="showLogin" @close="closeModal" />
    <nav class="bg-white shadow-sm fixed top-0 left-0 w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <a href="/" class="flex-shrink-0 flex items-center">
                        <i class="fas fa-users text-blue-600 text-2xl mr-2"></i>
                        <span class="text-xl font-bold text-blue-600">Real Networking</span>
                    </a>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="/" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium active-tab">
                            Home
                        </a>
                        <a href="/profile" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Profile
                        </a>
                        <a href="/matching" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Matching
                        </a>
                        <a href="/events" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Events
                        </a>
                    </div>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                    <!-- <button @click="registrationOpen = true" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                        Sign Up
                    </button> -->
                    <button @click="$router.push('/login')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                        Sign In
                    </button>
                    <!-- <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                        Sign Out
                    </button> -->
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
            <button @click="loginOpen = true" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Sign In</button>
            <button @click="registrationOpen = true" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Sign Up</button>
            <button class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Sign Out</button>
        </div>
    </div>
</template>