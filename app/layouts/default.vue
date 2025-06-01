<template>
  <div>
    <AppNavBar class="max-w-md mx-auto sticky top-4 z-10 bg-white" />
    <!-- main starts -->
    <main>
      <slot />
    </main>
    <!-- main ends -->

    <!-- footer  -->
    <AppFooter />
  </div>
</template>
