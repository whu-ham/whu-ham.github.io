<script setup lang="ts">
const {title, level} = defineProps<{
  title?: string;
  level?: string;
}>();
</script>

<template>
  <div :class="[level ?? 'info', 'custom-block']">
    <p class="custom-block-title" v-if="title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<style scoped></style>
