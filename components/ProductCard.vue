<script lang="ts" setup>
import { IProductItem } from '~~/types'

defineProps<{products: IProductItem[]}>()
</script>
<template>
  <a v-for="product in products" :key="product.id" :href="product.href" class="group">
    <div class="aspect-w-3 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <NuxtImg provider="imgix" preset="main" :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
    <slot :item="product" />
  </a>
</template>
