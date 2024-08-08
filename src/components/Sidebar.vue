<template>
    <aside class="w-64 bg-white shadow-md sticky top-[100px] h-[calc(100vh-100px)] overflow-y-auto">
      <nav class="p-4">
        <h2 class="text-lg font-semibold mb-4">Categories</h2>
        <ul>
          <li class="mb-2">
            <a href="#" @click.prevent="selectCategory('all')" :class="{ 'font-bold': selectedCategory === 'all' }">All categories</a>
          </li>
          <li v-for="category in categories" :key="category" class="mb-2">
            <a href="#" @click.prevent="selectCategory(category)" :class="{ 'font-bold': selectedCategory === category }">
              {{ category }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [],
        selectedCategory: 'all'
      }
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await fetch('https://fakestoreapi.com/products/categories');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          this.categories = await response.json();
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      },
      selectCategory(category) {
        this.selectedCategory = category;
        const event = new CustomEvent('category-selected', { 
          detail: category,
          bubbles: true,
          composed: true
        });
        window.dispatchEvent(event);
      }
    },
    mounted() {
      this.fetchCategories();
    }
  }
  </script>