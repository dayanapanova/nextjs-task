import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../i18n/en.json';
import bg from '../i18n/bg.json';
import ScrollToTop from '../components/ScrollToTop';
import Navigation from '../components/Navigation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bg: { translation: bg }
    },
    fallbackLng: 'en',
  })
function MyApp({ Component, pageProps,  }) {
  return (
          <>
          <ScrollToTop/>
          <Navigation/>
          <Component{...pageProps}/>
          </>
        )
}

export default MyApp
