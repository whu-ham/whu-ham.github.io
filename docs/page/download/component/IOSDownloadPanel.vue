<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {
  getLatestIOSVersionInfo,
  IOSVersionInfo,
} from '../service/ios_version_fetch';
import {getLatestIOSBetaInfo, IOSBetaInfo} from '../service/ios_beta_fetch';
import ArrowLink from '../../../components/ArrowLink.vue';
import {formatDate} from '../service/date';
import NoticeView from './NoticeView.vue';
import IOSBetaItem from './IOSBetaItem.vue';
import {useDownloadI18n} from '../service/i18n';

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
    <div v-if="versionInfo">
      <h3>{{ versionInfo.name }}</h3>
      <span class="caption"
        >{{ t('publishedOn') }} {{ formatDate(versionInfo.publishDate) }}</span
      >
      <blockquote>
        <div class="ham_text_t1">{{ versionInfo.updateLog }}</div>
      </blockquote>
      <ArrowLink
        href="https://apps.apple.com/cn/app/ham/id1577896044"
        :text="t('appStoreDownload')" />
    </div>

    <div>
      <IOSBetaItem v-if="betaInfo" :item="betaInfo" />
      <div v-else>
        <h3>{{ t('betaTitle') }}</h3>
        <NoticeView :title="t('noticeTitle')">
          <p>
            {{ t('testflightPromptPrefix') }}
            <ArrowLink
              href="https://apps.apple.com/us/app/testflight/id899247664"
              text="TestFlight" />
            {{ t('testflightPromptSuffix') }}
          </p>
        </NoticeView>
        <ArrowLink
          href="itms-beta://testflight.apple.com/join/waKNnCG3"
          :text="t('joinTestflight')" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
