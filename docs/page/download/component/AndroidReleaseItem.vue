<script setup lang="ts">
import {
  AndroidApkInfo,
  AndroidVersionInfo,
} from '../service/android_version_fetch';
import ArrowLink from '../../../components/ArrowLink.vue';
import {formatDate} from '../service/date';
import PreReleaseTag from './PreReleaseTag.vue';
import NoticeView from './NoticeView.vue';
import {useDownloadI18n} from '../service/i18n';

const {item} = defineProps<{
  item: AndroidVersionInfo;
}>();
const {t} = useDownloadI18n();

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
  <div>
    <div class="title-container">
      <h3 class="title-text">{{ item.name }}</h3>
      <PreReleaseTag v-if="item.prerelease" class="title-tag" style="" />
    </div>
    <span class="caption"
      >{{ t('publishedOn') }} {{ formatDate(item.createTime) }}</span
    >

    <blockquote>
      <div v-html="item.versionLog.replace(/\n/g, '<br>')"></div>
    </blockquote>

    <NoticeView :title="t('downloadLinksTitle')">
      <div v-for="apk in item.apkList" class="apk-link" v-bind:key="apk.name">
        <span>
          <el-tag
            disable-transitions
            class="apk-tag"
            type="primary"
            effect="dark"
            >{{ getTagName(apk) }}</el-tag
          >
          {{ apk.name }}
          <span class="apk-download-count">
            {{ apk.downloadCount }}{{ t('downloadsSuffix') }}
          </span>
        </span>
        <ArrowLink
          class="apk-download"
          :href="apk.downloadUrl"
          :text="t('download')" />
      </div>
    </NoticeView>
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

.apk {
  &-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 12px 0;
  }

  &-tag {
    width: 48px;
    margin-right: 4px;
  }

  &-download {
    flex-shrink: 0;
  }

  &-download-count {
    opacity: 0.3;
    margin-left: 4px;
  }
}
</style>
