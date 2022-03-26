import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import languageEN from './locate/en/translate.json'
import languageKR from './locate/kr/translate.json'
import languageCH from './locate/ch/translate.json'

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: languageEN,
        kr: languageKR,
        ch: languageCH
    },
    /* default language when load the website in browser */
    // lng: "en",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "en",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
})

export default i18n;