<template>
    <div>
      <div v-if="loading" class="text-center py-4">
        Cargando productos...
      </div>
      <div v-else-if="error" class="text-center py-4 text-red-500">
        {{ error }}
      </div>
      <div v-else-if="products.length === 0" class="text-center py-4">
        No se encontraron productos.
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in paginatedProducts" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden w-[285px] h-[446px] relative mx-auto group">
          <div class="relative h-[301px]">
            <img :src="product.image" :alt="product.title" class="w-full h-full object-contain">
            <div class="absolute inset-0 bg-[#3A3A3A] bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <a :href="`/product/${product.id}`" class="bg-white text-[#B88E2F] py-2 px-4 rounded font-poppins font-semibold text-base hover:bg-[#B88E2F] hover:text-white transition duration-300 mb-4 w-[202px] text-center">
                Add to cart
              </a>
              <div class="flex mt-2">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-[#FFC700]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="p-4 bg-[#F4F5F7] h-[145px] relative">
            <h3 class="text-xl font-semibold mb-2 truncate font-poppins text-[#3A3A3A]">{{ product.title }}</h3>
            <p class="text-sm text-[#898989] mb-2 font-poppins line-clamp-2">{{ product.description }}</p>
            <p class="text-xl font-semibold text-[#3A3A3A] font-poppins absolute bottom-4 left-4">
              Rp {{ (product.price * 15000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="!loading && !error && totalPages > 1" class="mt-8 flex justify-center">
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="currentPage = page"
          :class="['mx-1 px-4 py-2 rounded font-poppins', currentPage === page ? 'bg-[#B88E2F] text-white' : 'bg-gray-200 hover:bg-gray-300']"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        currentPage: 1,
        itemsPerPage: 9,
        loading: true,
        error: null,
        selectedCategory: ''
      }
    },
    computed: {
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.products.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.products.length / this.itemsPerPage);
      }
    },
    methods: {
      async fetchProducts(category = '') {
        this.loading = true;
        this.error = null;
        try {
          let url = 'https://fakestoreapi.com/products';
          if (category && category !== 'all') {
            url = `https://fakestoreapi.com/products/category/${category}`;
          }
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          this.products = await response.json();
          this.currentPage = 1;
        } catch (error) {
          console.error('Error fetching products:', error);
          this.error = 'Error al cargar los productos. Por favor, intente de nuevo más tarde.';
        } finally {
          this.loading = false;
        }
      },
      filterByCategory(category) {
        this.selectedCategory = category;
        this.fetchProducts(category);
      }
    },
    mounted() {
      this.fetchProducts();
  
      window.addEventListener('category-selected', (event) => {
        this.filterByCategory(event.detail);
      });
    },
    beforeUnmount() {
      window.removeEventListener('category-selected', this.filterByCategory);
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  </style>