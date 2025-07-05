<script>
import { loginUser } from '@/api/auth';
import { login } from '@/utils/auth';

export default {
    data(){
        return {
            username: '',
            password: '',
            email: '',
            error: null,
            success: false
        }
    },
    methods: {
        // async submitLogin() {
        //     const obj = {
        //         username: this.username,
        //         password: this.password
        //     }
        //     try {
        //         const result = await loginUser(obj);
        //         this.success = true;
        //         console.log(result)
        //     } catch (err) {
        //         this.error = err.response?.data?.message || 'Registration failed';
        //         console.error(this.error)
        //     }
        // },
        handleLogin() {
            login()
            this.$router.push('/profile')
        },
        close(){
            this.$emit('close')
        }
    }
}
</script>

<template>
    <div id="login-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-2xl text-center font-bold text-gray-900">Log In</h3>
                    <button @click="close()" id="close-login" class="text-gray-400 hover:text-gray-500">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <form @submit.prevent="handleLogin()" class="space-y-6">
                    <!-- <div>
                        <label for="username" class="block text-sm font-medium text-gray-700">Email address</label>
                        <div class="mt-1">
                            <input id="username" v-model="username" name="username" type="text" autocomplete="username" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        </div>
                    </div> -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <div class="mt-1">
                            <input v-model="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        </div>
                    </div>
                    
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <div class="mt-1">
                            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        </div>
                    </div>
                    
                    <div>
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Sign in
                        </button>
                    </div>
                </form>
                
                <!-- <div class="mt-6">
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
                </div> -->
                
                <!-- <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">
                        Don't have an account? 
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
                    </p>
                </div> -->
            </div>
        </div>
    </div>
</template>