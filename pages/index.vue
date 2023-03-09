<script lang="ts" setup>
const features = [
  'Nuxt 3', 'TailwindCSS', 'Google fonts', 'Pinia',
  'Eslint Nuxt', 'Husky', 'Nuxt Image', 'Error page', 'Nuxt Icon'
]

</script>
<template>
  <NuxtLayout>
    <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div class="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div>
          <AppTitle>
            Nuxity
          </AppTitle>
          <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-600">
            A Nuxt 3 Minimal Starter template packed with a few features.
          </p>
        </div>

        <!-- image card  -->
        <div class="my-6">
          <NuxtImg
            class="shadow-2xl aspect-square w-52 mx-auto rounded-2xl flex-none object-cover rotate-6"
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

        <dl class="mt-10 space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 max-w-3xl mx-auto">
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
  </NuxtLayout>
</template>
