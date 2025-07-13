import type { Config } from './types';

export default {
  id: '/',
  name: 'Aniverse Plus',
  shortName: 'Aniverse',
  description: 'AniVerse+ adalah The Next Generations Anime Platform yang dimana Kalian dapat Streaming Anime Secara Gratis Dari Kualitas SD Hingga 4K.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
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
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '5d097150-43c4-4d3f-9a13-da14ba1d837d',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.aniverse.vip',
} satisfies Config;
