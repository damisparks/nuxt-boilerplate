import { IProductItem } from '@/types'

export const useProductStore = defineStore('productStore', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Blue Thermo Bottle',
          href: '#',
          price: 48,
          imageSrc: 'photo-1568395216634-ab1b1e848751',
          imageAlt: 'Blue Thermo Bottle looking nice.'
        },
        {
          id: 2,
          name: 'Steel water bottle',
          href: '#',
          price: 35,
          imageSrc: 'photo-1602143407151-7111542de6e8',
          imageAlt: 'Steel water bottle with cool green.'
        },
        {
          id: 3,
          name: 'LARQ Bottle',
          href: '#',
          price: 89,
          imageSrc: 'photo-1556814086-bd749c2ceabd',
          imageAlt: 'LARQ Bottle to the beach and thought about this composition as a juxtaposition of sustainable solutions versus plastic pollution in the water.'
        },
        {
          id: 4,
          name: 'quokkabottles',
          href: '#',
          price: 35,
          imageSrc: 'photo-1604404894533-9ff3362dab13',
          imageAlt: 'Experimental quokkabottle.'
        }
      ] as IProductItem[],
      cartList: [] as IProductItem[]
    }
  },

  actions: {
    addToCart (item: IProductItem) {
      this.cartList.unshift(item)
    }
  },
  getters: {
    count: state => state.products.length,
    totalPrice: state => state.cartList.reduce((oldValue, newValue) => oldValue + newValue.price, 0),
    isEmptyCart: state => state.cartList.length > 0
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
