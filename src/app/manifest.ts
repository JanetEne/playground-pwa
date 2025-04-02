import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My PWA App',
    short_name: 'My PWA',
    description: 'This is a playground for PWA',
    start_url: '/',
    id: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: "/icons/android-chrome-36x36.png",
        sizes: "36x36",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/icons/maskable_icon.png",
        sizes: "650x650",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    // screenshots: [
    //   {
    //     src: '/screenshots/desktop.png',
    //     sizes: '1920x1080',
    //     type: 'image/png',
    //     form_factor: 'wide',
    //   },
    //   {
    //     src: '/screenshots/mobile.png',
    //     sizes: '1080x1920',
    //     type: 'image/png',
    //     form_factor: 'narrow',
    //   },
    // ],
    launch_handler: {
      client_mode: ['navigate-existing', 'auto'],
    },
    categories: ['productivity'],
    prefer_related_applications: false,
    related_applications: [],
    scope: '/',
    dir: 'ltr',
    lang: 'en',
  };
}