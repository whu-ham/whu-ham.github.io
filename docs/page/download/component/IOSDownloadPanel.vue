<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {
  getLatestIOSVersionInfo,
  IOSVersionInfo,
} from '../service/ios_version_fetch';
import {getLatestIOSBetaInfo, IOSBetaInfo} from '../service/ios_beta_fetch';
import ArrowLink from '../../../components/ArrowLink.vue';
import NoticeView from './NoticeView.vue';
import IOSBetaItem from './IOSBetaItem.vue';
import ReleaseItem from './ReleaseItem.vue';
import DownloadLinkRow from './DownloadLinkRow.vue';
import {useDownloadI18n} from '../service/i18n';

// Keep in sync with the invite published by the iOS release workflow in
// .github/workflows/ios-release.yml.
const FALLBACK_TESTFLIGHT_URL = 'https://testflight.apple.com/join/waKNnCG3';

const versionInfo = ref<IOSVersionInfo>();
const betaInfo = ref<IOSBetaInfo | null>(null);
const {t} = useDownloadI18n();

onMounted(async () => {
  versionInfo.value = await getLatestIOSVersionInfo();
  betaInfo.value = await getLatestIOSBetaInfo();
});
</script>

<template>
  <div>
    <ReleaseItem
      v-if="versionInfo"
      :title="versionInfo.name"
      :published-at="versionInfo.publishDate"
      :notes="versionInfo.updateLog"
      class="release-item">
      <DownloadLinkRow
        :label="t('appStore')"
        href="https://apps.apple.com/cn/app/ham/id1577896044" />
    </ReleaseItem>

    <IOSBetaItem v-if="betaInfo" :item="betaInfo" />
    <div v-else>
      <h3 class="beta-title">{{ t('betaTitle') }}</h3>
      <NoticeView :title="t('noticeTitle')">
        <p>
          {{ t('testflightPromptPrefix') }}
          <ArrowLink
            href="https://apps.apple.com/us/app/testflight/id899247664"
            text="TestFlight" />
          {{ t('testflightPromptSuffix') }}
        </p>
      </NoticeView>
      <ArrowLink :href="FALLBACK_TESTFLIGHT_URL" :text="t('joinTestflight')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
// Match the spacing the Android panel puts between release entries so the
// two sections read as one list.
.release-item {
  margin-bottom: 56px;
}

.beta-title {
  margin-top: 0;
}
</style>
