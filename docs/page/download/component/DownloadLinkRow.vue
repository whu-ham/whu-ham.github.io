<script setup lang="ts">
import ArrowLink from '../../../components/ArrowLink.vue';
import {useDownloadI18n} from '../service/i18n';

/**
 * One download target inside a release's link list. Android and iOS rows
 * render through this component so both platforms line up, even though
 * Android APKs carry an architecture tag and a download count and the App
 * Store and TestFlight entries carry neither.
 */
const props = defineProps<{
  label: string;
  href: string;
  tag?: string;
  downloadCount?: number;
}>();
const {t} = useDownloadI18n();
</script>

<template>
  <div class="download-row">
    <span>
      <el-tag
        v-if="props.tag"
        disable-transitions
        class="download-tag"
        type="primary"
        effect="dark"
        >{{ props.tag }}</el-tag
      >
      {{ props.label }}
      <span v-if="props.downloadCount !== undefined" class="download-count">
        {{ props.downloadCount }}{{ t('downloadsSuffix') }}
      </span>
    </span>
    <ArrowLink
      class="download-action"
      :href="props.href"
      :text="t('download')" />
  </div>
</template>

<style scoped lang="scss">
.download {
  &-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0 12px 0;
  }

  &-tag {
    width: 48px;
    margin-right: 4px;
  }

  &-action {
    flex-shrink: 0;
  }

  &-count {
    opacity: 0.3;
    margin-left: 4px;
  }
}
</style>
