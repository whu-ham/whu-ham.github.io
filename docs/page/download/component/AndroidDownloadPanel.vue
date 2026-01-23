<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {
  AndroidVersionInfo,
  getLatestAndroidVersionInfo,
} from '../service/android_version_fetch';
import ArrowLink from '../../../components/ArrowLink.vue';
import AndroidReleaseItem from './AndroidReleaseItem.vue';

enum LoadState {
  UNLOAD,
  LOADING,
  FINISH,
  FAIL,
}

const loadState = ref<LoadState>(LoadState.UNLOAD);
const releaseList = ref<AndroidVersionInfo[]>([]);
const error = ref<Error | null>(null);

onMounted(async () => {
  if (loadState.value == LoadState.LOADING) {
    return;
  }
  loadState.value = LoadState.LOADING;
  try {
    releaseList.value = await getLatestAndroidVersionInfo();
    loadState.value = LoadState.FINISH;
  } catch (e) {
    loadState.value = LoadState.FAIL;
    error.value = e;
  }
});
</script>

<template>
  <div v-if="loadState === LoadState.FINISH">
    <div v-for="releaseItem in releaseList" :key="releaseItem.name">
      <AndroidReleaseItem :item="releaseItem" class="release-item" />
    </div>
  </div>
  <div v-else-if="loadState === LoadState.FAIL">
    <div class="danger custom-block">
      <p class="custom-block-title">请求失败</p>
      <p>{{ error?.message }}</p>
    </div>
    <ArrowLink
      href="https://github.com/whu-ham/whu-ham.github.io/releases/latest"
      text="前往Github Release" />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
}

.release-item {
  margin-bottom: 56px;
}
</style>
