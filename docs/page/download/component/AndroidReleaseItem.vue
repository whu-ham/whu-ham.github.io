<script setup lang="ts">
import {
  AndroidApkInfo,
  AndroidVersionInfo,
} from '../service/android_version_fetch';
import ReleaseItem from './ReleaseItem.vue';
import DownloadLinkRow from './DownloadLinkRow.vue';

const {item} = defineProps<{
  item: AndroidVersionInfo;
}>();

const getTagName = (item: AndroidApkInfo) => {
  const name = item.name;
  if (name.indexOf('arm32') !== -1) {
    return 'ARM32';
  } else {
    return 'ARM64';
  }
};
</script>

<template>
  <ReleaseItem
    :title="item.name"
    :published-at="item.createTime"
    :notes="item.versionLog"
    :prerelease="item.prerelease">
    <DownloadLinkRow
      v-for="apk in item.apkList"
      :key="apk.name"
      :label="apk.name"
      :href="apk.downloadUrl"
      :tag="getTagName(apk)"
      :download-count="apk.downloadCount" />
  </ReleaseItem>
</template>
