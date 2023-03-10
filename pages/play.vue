<script lang="ts" setup>
import { IProductItem } from '@/types'

const quickView = ref(true)

const productStore = useProductStore()
const { products, cartList } = productStore

const toggleQuickAccess = () => (quickView.value = !quickView.value)

const onAddToCart = (product: IProductItem) => {
  productStore.addToCart(product)
}

</script>
<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 space-y-4">
        <AppTitle>Play with Nuxity</AppTitle>
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard :products="products">
            <template #default="{item: product}">
              <button role="button" class="px-2 py-2 bg-zinc-200 text-gray-700 font-medium rounded-md w-full" @click="onAddToCart(product)">
                Add to Cart
              </button>
            </template>
          </ProductCard>
        </div>
      </div>
      <div v-if="productStore.isEmptyCart" class="relative">
        <div class="fixed bottom-20 right-4">
          <QuickAccess :show-quick-access="quickView" @update:quickaccess="toggleQuickAccess">
            <template #default>
              <span class="font-medium">{{ productStore.cartList.length }} items added</span>
            </template>
            <template #items>
              <div>
                <div v-for="{id, imageSrc, name }, idx in cartList" :key="id">
                  <div class="flex border-slate-900/10 py-2" :class="idx !== 0 ?'border-t': ''">
                    <NuxtImg class="h-16 w-1/4 rounded-lg" provider="imgix" loading="lazy" :src="imageSrc" />
                    <span class="w-3/4 ml-3">{{ name }}</span>
                  </div>
                </div>
                <span class="px-3 py-2 rounded bg-slate-100 font-medium inline-flex w-full">
                  Total Price : {{ productStore.totalPrice }}
                </span>
              </div>
            </template>
          </QuickAccess>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
