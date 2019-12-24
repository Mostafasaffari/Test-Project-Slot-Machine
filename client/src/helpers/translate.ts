import i18next from "i18next";
import Backend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init(
    {
      backend: {
        backends: [LocalStorageBackend, XHR],
        backendOptions: [
          {
            prefix: "dashboard_",
            expirationTime: 0, //7 * 24 * 60 * 60 * 1000,
            store: window.localStorage,
            versions: {
              en: "1.0.0"
            }
          },
          {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
          }
        ]
      },
      fallbackLng: false,
      lng: "en",
      defaultNS: "app",
      debug: true
    },
    (err, t) => {
      if (err) return console.log("something went wrong loading", err);
    }
  );

export default i18next;
