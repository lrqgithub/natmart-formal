import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import en_US from './locales/en_US.json';
import zh_CN from './locales/zh_CN.json';


import {initReactI18next} from 'react-i18next';

// let lang = localStorage.getItem("language");
// console.log(lang);
// if (!lang) {
//     lang = 'zh_CN';
//     localStorage.setItem("language", 'zh_CN');
// }
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en_US: {
                translation: en_US,
            },
            zh_CN: {
                translation: zh_CN,
            },
        },
        fallbackLng: 'en_US',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
export const t = i18n.t.bind(i18n);