<script lang="ts" setup>
import { INavItem } from '../types'
const navItems: INavItem[] = [
  { name: 'Home', to: '/' },
  { name: 'Play', to: '/play' }
]
</script>

<template>
  <nav class="shadow rounded-3xl px-2 py-1 border">
    <div class="flex items-center justify-center">
      <NuxtLink
        v-for="{name, to} in navItems"
        :key="name"
        :to="to"
        class="px-2 py-1"
        :class="[
          $route.path === to? 'text-gradient font-bold': 'text-slate-700 dark:text-slate-400',
          'px-2 hover:text-slate-900 dark:hover:text-slate-200'
        ]"
      >
        {{ name }}
      </NuxtLink>
    </div>
  </nav>
</template>
