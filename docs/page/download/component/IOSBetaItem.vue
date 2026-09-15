<script setup lang="ts">
import {IOSBetaInfo} from '../service/ios_beta_fetch';
import {useDownloadI18n} from '../service/i18n';
import ReleaseItem from './ReleaseItem.vue';
import DownloadLinkRow from './DownloadLinkRow.vue';

const {item} = defineProps<{
  item: IOSBetaInfo;
}>();
const {t} = useDownloadI18n();

const versionLabel = (item: IOSBetaInfo) =>
  `${item.versionName} (${item.versionCode})`;
</script>

<template>
  <ReleaseItem
    :title="versionLabel(item)"
    :published-at="item.publishedAt"
    :notes="item.releaseNotes"
    prerelease>
    <DownloadLinkRow :label="t('testflight')" :href="item.testflightUrl" />
  </ReleaseItem>
</template>
