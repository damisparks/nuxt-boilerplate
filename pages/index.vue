<script lang="ts" setup>
// const productStore = useProductStore()

const features = [
  'Nuxt 3', 'TailwindCSS', 'Google fonts', 'Pinia',
  'Eslint Nuxt', 'Husky', 'Nuxt Image', 'Error page'
]

</script>
<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div>
          <h2 class="text-center text-3xl font-bold leading-8 tracking-tight  text-gradient sm:text-4xl">
            Nuxity
          </h2>
          <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-600">
            A Nuxt 3 Minimal Starter template packed with a few features.
          </p>
        </div>

        <!-- image card  -->
        <div class="my-6">
          <NuxtImg
            class="shadow-lg aspect-square lg:aspect-[2/3] w-52 lg:w-72 mx-auto rounded-2xl flex-none object-cover rotate-6"
            provider="imgix"
            width="490"
            loading="lazy"
            height="500"
            src="photo-1616628188506-4ad99d65640e"
            preset="main"
            sizes="sm:50vw md:50vw lg:30vw"
          />
        </div>
        <!-- image end -->

        <dl class="mt-10 space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0">
          <div
            v-for="(item, index) in features"
            :key="`features-${index}`"
          >
            <dt>
              <div class="absolute flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white" />
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                {{ item }}
              </p>
            </dt>
          </div>
        </dl>
      </div>
    </div>

    <!-- <div class="flex items-center flex-col">
      <div class="p-4 shadow-lg rounded-md mt-4">
        <NuxtImg provider="imgix" class="rounded-md my-2" src="photo-1542831371-29b0f74f9713" preset="main" />
        <p>
          <span>You have</span>
          <span class="bg-blue-100 px-3 py-1 rounded text-blue-700 mx-1">
            {{ productStore.count }}
          </span>
          <span>product(s)</span>
        </p>
      </div>
    </div> -->
  </NuxtLayout>
</template>
