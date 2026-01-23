<script setup></script>

<template>
  <span data-view-component="true" class="Label Label--warning Label--large"
    >Pre-release</span
  >
</template>

<style scoped lang="scss">
.Label {
  border: 0.0625rem solid #3d444d;
  border-radius: 624.9375rem;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 18px;
  padding: 0 0.375rem;
  white-space: nowrap;

  &--large {
    line-height: 22px;
    padding: 0 0.5rem;
    padding-top: 0.1rem;
  }

  &--attention,
  &--warning {
    border-color: #9e6a03;
    color: #d29922;
  }
}
</style>
