import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import common_np from "./translations/np/common.json";
import common_en from "./translations/en/common.json";

import employee_np from "./translations/np/employee.json";
import employee_en from "./translations/en/employee.json";

const Languages = ["en", "np"];
const resources = {
    en: {
        common: common_en,
        employee: employee_en
    },
    np: {
        common: common_np,
        employee: employee_np
    },
}

export default i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        whitelist: Languages,
        interpolation: {
            escapeValue: false,
        },
        ns: ['common', 'employee'],
        // Set default namespace
        defaultNS: "common",
        resources
    });