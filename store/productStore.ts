export const useProductStore = defineStore('productStore', {
  state: () => {
    return {
      products: ['product 1', 'product 2']
    }
  },
  actions: {},
  getters: {
    count: state => state.products.length
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
