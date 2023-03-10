<script setup lang="ts">
const props = defineProps<{ showQuickAccess: boolean }>()
const emit = defineEmits<{(event: 'update:quickaccess', showExplore: boolean): void}>()
const canQuickAccess = () => {
  emit('update:quickaccess', props.showQuickAccess)
}
</script>
<template>
  <div class="relative">
    <div
      v-if="showQuickAccess"
      tabindex="-1"
      class="fixed inset-0 bg-opacity-75 transition-opacity -z-10"
      aria-hidden="true"
      @click="canQuickAccess"
    />
    <div>
      <button role="button" class="text-cyan-600 rounded-md shadow-xl bg-white px-2 py-1" type="button" @click="canQuickAccess">
        <slot />
        <Icon class="h-8 w-8 ml-2" name="fluent:cart-24-filled" />
      </button>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="showQuickAccess"
        class="rounded-md shadow-xl w-72 absolute right-0 bottom-12 bg-white p-2 origin-bottom-right"
      >
        <slot name="items" />
      </div>
    </transition>
  </div>
</template>
