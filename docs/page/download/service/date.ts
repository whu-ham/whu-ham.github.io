/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/23 16:52
 */
// Imported by path rather than by package name: the locale files below are
// UMD and pull in `../moment` themselves, so importing the package entry point
// instead gives them their own moment instance and the registrations land
// somewhere the code here never reads.
import moment from 'moment/moment.js';
// Only `en` ships in the moment core, so every other language the site serves
// has to be pulled in explicitly. These set the global locale as a side
// effect, which is why every call below names its locale.
import 'moment/locale/zh-cn.js';
import 'moment/locale/ja.js';
import {type LocaleKey} from './i18n';

/**
 * moment locale names accepted by `moment.locale`, which differ from the
 * site's own language codes (`zh`, `en`, `ja`).
 */
const MOMENT_LOCALES: Record<LocaleKey, string> = {
  zh: 'zh-cn',
  en: 'en',
  ja: 'ja',
};

/**
 * Formats a publish date as a relative time in the given language.
 *
 * The locale is passed per call rather than set globally. Setting it globally
 * cannot work here: this module is evaluated once when the bundle loads, so
 * the choice would be made before the visitor's language is known, and it
 * would then leak into every other moment usage on the page. That is what
 * previously pinned the date to Chinese on the English and Japanese pages.
 */
export const formatDate = (date: Date, localeKey: LocaleKey = 'zh'): string =>
  moment(date).locale(MOMENT_LOCALES[localeKey]).fromNow();
