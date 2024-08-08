<template>
    <div class="shop-banner-container">
      <div class="shop-banner relative w-full h-[316px] overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center filter blur-sm" style="background-image: url('/images/banner.png');"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <h1 class="text-5xl font-medium mb-2 font-poppins text-black">Shop</h1>
          <div class="flex items-center">
            <a href="/" class="text-base font-medium font-poppins text-black">Home</a>
            <svg class="w-5 h-5 mx-2 transform -rotate-90 text-black" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span class="text-base font-light font-poppins text-black">Shop</span>
          </div>
        </div>
      </div>
      <div class="w-full h-[100px] bg-secondary flex items-center justify-between px-4">
        <span class="font-poppins text-lg">Showing 1–16 of 32 results</span>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShopBanner'
  }
  </script>
  
  <style scoped>
.shop-banner-container {
  position: relative;
  z-index: 10;
}
</style>