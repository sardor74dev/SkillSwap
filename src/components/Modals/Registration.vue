<script>
export default {
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>

<template>
    <div id="register-modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-y-auto" style="max-height: 90vh;">
            <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-2xl font-bold text-gray-900">Join YouthConnect</h3>
                    <button @click="close()" id="close-register" class="text-gray-400 hover:text-gray-500">
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
</template>