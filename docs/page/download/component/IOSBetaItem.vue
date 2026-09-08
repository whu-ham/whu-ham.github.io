<script setup lang="ts">
import {IOSBetaInfo} from '../service/ios_beta_fetch';
import ArrowLink from '../../../components/ArrowLink.vue';
import {formatDate} from '../service/date';
import PreReleaseTag from './PreReleaseTag.vue';
import {useDownloadI18n} from '../service/i18n';

const {item} = defineProps<{
  item: IOSBetaInfo;
}>();
const {t} = useDownloadI18n();

const versionLabel = (item: IOSBetaInfo) =>
  `${item.versionName} (${item.versionCode})`;
</script>

<template>
  <div>
    <div class="title-container">
      <h3 class="title-text">{{ versionLabel(item) }}</h3>
      <PreReleaseTag class="title-tag" />
    </div>
    <span class="caption"
      >{{ t('publishedOn') }} {{ formatDate(item.publishedAt) }}</span
    >

    <blockquote v-if="item.releaseNotes">
      <div v-html="item.releaseNotes.replace(/\n/g, '<br>')"></div>
    </blockquote>

    <ArrowLink :href="item.testflightUrl" :text="t('downloadOnTestflight')" />
  </div>
</template>

<style scoped lang="scss">
.title {
  &-text {
    margin-top: 0;
    display: inline-block;
  }

  &-container {
    display: flex;
    align-content: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  &-tag {
    margin-left: 12px;
    display: block;
  }
}
</style>
