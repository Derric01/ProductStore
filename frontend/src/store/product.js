import { create } from 'zustand';

// Sample products for initial display
const sampleProducts = [
  {
    name: "Premium Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
  },
  {
    name: "Professional Camera",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop"
  }
];

export const useProductStore = create((set) => ({
  products: [],
  
  // Fetch all products
  fetchProducts: async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      
      if (data.success) {
        set({ products: data.data });
        return { success: true, message: "Products fetched successfully" };
      } else {
        return { success: false, message: data.message || "Failed to fetch products" };
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return { success: false, message: "Error fetching products" };
    }
  },
  
  // Create a new product
  createProduct: async (newProduct) => {
    if(!newProduct.name || !newProduct.price || !newProduct.image) {
      return {success: false, message: "Fill all the fields"};
    }
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });
      const data = await res.json();
      
      if (data.success) {
        set((state) => ({
          products: [...state.products, data.data]
        }));
        return {success: true, message: "Product created successfully"};
      } else {
        return {success: false, message: data.message || "Failed to create product"};
      }
    } catch (error) {
      console.error("Error creating product:", error);
      return {success: false, message: "Error creating product"};
    }
  },
  
  // Add sample products
  addSampleProducts: async () => {
    try {
      const promises = sampleProducts.map(product => 
        fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        }).then(res => res.json())
      );
      
      const results = await Promise.all(promises);
      const successful = results.filter(result => result.success);
      
      if (successful.length > 0) {
        await set((state) => ({
          products: [
            ...state.products,
            ...successful.map(result => result.data)
          ]
        }));
        return { 
          success: true, 
          message: `Added ${successful.length} sample products` 
        };
      }
      return { success: false, message: "No sample products were added" };
    } catch (error) {
      console.error("Error adding sample products:", error);
      return { success: false, message: "Error adding sample products" };
    }
  },
  
  // Delete product
  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      
      if (data.success) {
        set((state) => ({
          products: state.products.filter(product => product._id !== id)
        }));
        return { success: true, message: "Product deleted successfully" };
      } else {
        return { success: false, message: data.message || "Failed to delete product" };
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      return { success: false, message: "Error deleting product" };
    }
  }
}));