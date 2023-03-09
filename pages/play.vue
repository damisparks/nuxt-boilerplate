<script lang="ts" setup>
const productStore = useProductStore()
const { products } = productStore
</script>
<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 space-y-4">
        <AppTitle>Play with Nuxity</AppTitle>
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard :products="products">
            <!-- <template #default="{item: product}">
              <span>{{ product }}</span>
            </template> -->
          </ProductCard>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
