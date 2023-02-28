<script lang="ts" setup>
const productStore = useProductStore();
</script>
<template>
  <div class="flex items-center flex-col">
    <div class="p-4 shadow-lg rounded-md mt-4">
      <h1 class="text-4xl">Welcome to Nuxity</h1>
      <p>A Nuxt 3 Minimal Starter template packed with a few features.</p>
      <p>
        <span>You have</span>
        <span class="bg-blue-100 px-3 py-1 rounded text-blue-700 mx-1">
          {{ productStore.count }}
        </span>
        <span>product(s)</span>
      </p>
    </div>
  </div>
</template>
