import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json;
        })
    },

    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})