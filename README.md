# Furniro E-commerce Catalog

Furniro is a modern e-commerce catalog built with Astro, Vue, and Tailwind CSS. It showcases a responsive design and efficient product browsing experience.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/furniro-ecommerce-catalog.git
   ```

2. Navigate to the project directory:
   ```
   cd furniro-ecommerce-catalog
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Development

To start the development server:
npm run dev


This will start the local dev server at `http://localhost:4321`.

### Building for Production

To create a production-ready build:
npm run build

The built files will be in the `./dist/` directory.

### Preview Production Build

To preview the production build locally:
npm run preview



## 🛠️ Project Structure
/
├── public/
│ └── images/
├── src/
│ ├── components/
│ ├── layouts/
│ ├── pages/
│ └── styles/
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json


- `public/`: Static assets like images
- `src/components/`: Vue components
- `src/layouts/`: Astro layout components
- `src/pages/`: Astro pages
- `src/styles/`: Global CSS files

## 🧩 Features


- Dynamic product catalog
- Category filtering
- Product details page
- SEO-friendly structure

## 🔧 Technologies Used

- [Astro](https://astro.build/): Static site generator
- [Vue.js](https://vuejs.org/): JavaScript framework for UI components
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
- [Fake Store API](https://fakestoreapi.com/): Mock e-commerce data

## 📚 Documentation

### Components

#### ProductList

The main component for displaying the product catalog. It fetches products from the API and supports pagination and category filtering.

#### Sidebar

Displays product categories and allows filtering of products.

#### Header

The site's main navigation component.

#### FeatureSection

Highlights key features of the e-commerce platform.

### Routing

- `/`: Home page with product catalog
- `/product/[id]`: Individual product details page

### State Management

Product and category state is managed locally within Vue components using `data()` and `methods`.

### API Integration

The project uses the Fake Store API for product data. API calls are made using the native `fetch` function.

