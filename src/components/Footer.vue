<template>
    <footer class="bg-white border-t border-gray-200 pt-12 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <!-- Column 1: Logo and address -->
          <div>
            <h2 class="text-2xl font-bold mb-4">Funiro.</h2>
            <p class="text-gray-600 mb-4">
              400 University Drive Suite 200 Coral Gables,<br>
              FL 33134 USA
            </p>
          </div>
  
          <!-- Column 2: Links -->
          <div>
            <h3 class="text-gray-500 font-medium mb-4">Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-black hover:text-gray-700">Home</a></li>
              <li><a href="#" class="text-black hover:text-gray-700">Shop</a></li>
              <li><a href="#" class="text-black hover:text-gray-700">About</a></li>
              <li><a href="#" class="text-black hover:text-gray-700">Contact</a></li>
            </ul>
          </div>
  
         <!-- Column 3: Help -->
          <div>
            <h3 class="text-gray-500 font-medium mb-4">Help</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-black hover:text-gray-700">Payment Options</a></li>
              <li><a href="#" class="text-black hover:text-gray-700">Returns</a></li>
              <li><a href="#" class="text-black hover:text-gray-700">Privacy Policies</a></li>
            </ul>
          </div>
  
          <!-- Column 4: Newsletter -->
          <div>
            <h3 class="text-gray-500 font-medium mb-4">Newsletter</h3>
            <div class="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                class="flex-grow border-b border-black py-2 px-3 focus:outline-none"
              >
              <button class="border-b border-black py-2 px-3 font-medium">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
  
        <!-- Dividing line -->
        <div class="border-t border-gray-200 mt-12 pt-8">
          <p class="text-sm text-gray-600">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  
  footer {
    font-family: 'Poppins', sans-serif;
  }
  </style>