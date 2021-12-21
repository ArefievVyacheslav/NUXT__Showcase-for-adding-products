export const actions = {
  async fetchProducts({commit}) {
    const response = await fetch('https://raw.githubusercontent.com/ArefievVyacheslav/ida/main/products.json')
    const products = await response.json()
    this.commit('pushProducts', products)
    return products
  }
}

export const mutations = {
  pushProducts(state, products) {
    state.products.push(...products)
  },
  addProduct(state, product) {
    state.products.push(product)
  }
}

export const state = () => ({
  products: []
})

export const getters = {
  products: state => state.products,
  quantityProducts: state => state.products.length + 1
}
