import {computed} from 'vue';
import {useData} from 'vitepress';

type LocaleKey = 'zh' | 'en' | 'ja';
type MessageKey =
  | 'requestFailedTitle'
  | 'goToGithubRelease'
  | 'publishedOn'
  | 'appStoreDownload'
  | 'betaTitle'
  | 'noticeTitle'
  | 'testflightPromptPrefix'
  | 'testflightPromptSuffix'
  | 'joinTestflight'
  | 'downloadLinksTitle'
  | 'downloadsSuffix'
  | 'download'
  | 'preRelease';

const messages: Record<LocaleKey, Record<MessageKey, string>> = {
  zh: {
    requestFailedTitle: '请求失败',
    goToGithubRelease: '前往 Github Release',
    publishedOn: '发布于',
    appStoreDownload: '前往 App Store 下载正式版',
    betaTitle: '测试版',
    noticeTitle: '提示',
    testflightPromptPrefix: '下载测试版前，请确保你的设备已安装',
    testflightPromptSuffix: '。',
    joinTestflight: '加入 TestFlight 内测',
    downloadLinksTitle: '下载地址',
    downloadsSuffix: '次下载',
    download: '下载',
    preRelease: '预发布',
  },
  en: {
    requestFailedTitle: 'Request failed',
    goToGithubRelease: 'Go to GitHub Release',
    publishedOn: 'Published on',
    appStoreDownload: 'Download on the App Store',
    betaTitle: 'Beta',
    noticeTitle: 'Notice',
    testflightPromptPrefix:
      'Before downloading the beta, make sure your device has installed',
    testflightPromptSuffix: '.',
    joinTestflight: 'Join TestFlight beta',
    downloadLinksTitle: 'Download links',
    downloadsSuffix: ' downloads',
    download: 'Download',
    preRelease: 'Pre-release',
  },
  ja: {
    requestFailedTitle: '取得に失敗しました',
    goToGithubRelease: 'GitHub Releaseへ',
    publishedOn: '公開日',
    appStoreDownload: 'App Storeで正式版を入手',
    betaTitle: 'テスト版',
    noticeTitle: 'お知らせ',
    testflightPromptPrefix: 'テスト版をダウンロードする前に、端末に',
    testflightPromptSuffix: 'がインストールされていることを確認してください。',
    joinTestflight: 'TestFlightのベータに参加',
    downloadLinksTitle: 'ダウンロード先',
    downloadsSuffix: '回のダウンロード',
    download: 'ダウンロード',
    preRelease: 'プレリリース',
  },
};

const resolveLocaleKey = (lang: string | undefined): LocaleKey => {
  if (!lang) {
    return 'zh';
  }
  if (lang.startsWith('en')) {
    return 'en';
  }
  if (lang.startsWith('ja')) {
    return 'ja';
  }
  return 'zh';
};

export const useDownloadI18n = () => {
  const {lang} = useData();
  const localeKey = computed(() => resolveLocaleKey(lang.value));
  const t = (key: MessageKey) => messages[localeKey.value][key];
  return {t};
};
