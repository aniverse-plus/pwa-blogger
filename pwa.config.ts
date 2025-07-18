import type { Config } from './types';

export default {
  id: '/',
  name: 'Animesia Plus',
  shortName: 'Animesia',
  description: 'Animesia Plus adalah The Next Generations Streaming Anime Platform yang dimana Kalian dapat Streaming Nonton Anime Secara Gratis Dari Kualitas SD Hingga 4K Tanpa Iklan Pop Up Yang Menggangu.',
  direction: 'auto',
  language: 'id-ID',
  backgroundColor: '#010003',
  themeColor: '#00ced1',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Streaming For Free',
      shortName: 'Streaming',
      description: 'Kamu bisa Streaming Anime Apapun secara Gratis Tanpa Iklan Pop Up',
      url: '/search/label/Series?utm_source=homescreen',
    },
    {
      name: 'Komunitas',
      shortName: 'Chat',
      description: 'Kamu bisa berkomunisasi dengan Member Aniverse Lainnya..',
      url: '/p/chat.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.aniverse.vip',
} satisfies Config;
