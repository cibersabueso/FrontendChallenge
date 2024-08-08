<template>
    <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-10 h-[100px] flex items-center">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center">
          <img src="/images/logo.png" alt="Furniro Logo" class="h-8 mr-2">
          <h1 class="text-2xl font-bold font-montserrat">Furniro</h1>
        </div>
        <nav class="flex-1 flex justify-center">
          <ul class="flex space-x-8">
            <li><a href="/" class="hover:text-gray-600 font-poppins">Home</a></li>
            <li><a href="/shop" class="hover:text-gray-600 font-poppins">Shop</a></li>
            <li><a href="/about" class="hover:text-gray-600 font-poppins">About</a></li>
            <li><a href="/contact" class="hover:text-gray-600 font-poppins">Contact</a></li>
          </ul>
        </nav>
        <div class="flex items-center space-x-6">
          <button aria-label="User account" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button aria-label="Search" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button aria-label="Favorites" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button aria-label="Shopping cart" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>