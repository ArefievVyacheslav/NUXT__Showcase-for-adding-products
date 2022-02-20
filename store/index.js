export const actions = {
  async fetchProducts({commit}) {
    const response = await fetch('https://raw.githubusercontent.com/ArefievVyacheslav/ida/main/products.json')
    const products = await response.json()
    this.commit('pushProducts', products.reverse())
    return products
  }
}

export const mutations = {
  pushProducts(state, products) {
    state.products.push(...products)
  },
  addProduct(state, product) {
    state.products.unshift(product)
  },
  removeProduct(state, index) {
    state.products.splice(index, 1)
  }
}

export const state = () => ({
  products: []
})

export const getters = {
  products: state => state.products,
  quantityProducts: state => state.products.length + 1
}
