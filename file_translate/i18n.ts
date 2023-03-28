import * as Localization from "expo-localization"
import i18n from "i18n-js"
import en from "./en"
import ja from "./ja"
import { I18nManager } from "react-native"
i18n.fallbacks = true
i18n.translations = { en, ja, "en-US": en }

// i18n.locale = Localization.locale || "ja"
i18n.locale = "ja"

export const isRTL = Localization.isRTL
I18nManager.allowRTL(isRTL)
I18nManager.forceRTL(isRTL)
/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text
