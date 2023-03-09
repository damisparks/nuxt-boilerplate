<script lang="ts" setup>
const productStore = useProductStore()
const { products } = productStore

const addToCart = () => {
  console.log('hi')
}
</script>
<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 space-y-4">
        <AppTitle>Play with Nuxity</AppTitle>
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard :products="products">
            <template #default>
              <button role="button" class="px-2 py-2 bg-zinc-200 text-gray-700 font-medium rounded-md w-full" @click.self="addToCart">
                Add to Cart
              </button>
            </template>
          </ProductCard>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
