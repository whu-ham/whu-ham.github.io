<script setup lang="ts">
import {computed} from 'vue';
import {formatDate} from '../service/date';
import PreReleaseTag from './PreReleaseTag.vue';
import NoticeView from './NoticeView.vue';
import {useDownloadI18n} from '../service/i18n';

/**
 * Shared layout for one release entry, used by both platforms so that an
 * Android build and an iOS build line up on the page even though they come
 * from different data sources.
 */
const props = defineProps<{
  title: string;
  publishedAt: Date;
  notes?: string;
  prerelease?: boolean;
}>();
const {t, localeKey} = useDownloadI18n();

// Reads as a computed so switching language re-renders the date instead of
// leaving the previous language's string on screen.
const publishedAtText = computed(() =>
  formatDate(props.publishedAt, localeKey.value),
);
</script>

<template>
  <div>
    <div class="title-container">
      <h3 class="title-text">{{ props.title }}</h3>
      <PreReleaseTag v-if="props.prerelease" class="title-tag" />
    </div>
    <span class="caption">{{ t('publishedOn') }} {{ publishedAtText }}</span>

    <blockquote v-if="props.notes">
      <div v-html="props.notes.replace(/\n/g, '<br>')"></div>
    </blockquote>

    <NoticeView :title="t('downloadLinksTitle')">
      <slot></slot>
    </NoticeView>
  </div>
</template>

<style scoped lang="scss">
.caption {
  // Keep the publish date on its own line so the links below start on a
  // new row instead of flowing next to the date.
  display: block;
}

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
