/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "200.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "android-chrome-192x192.4ad985c0.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.47463c43.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.5fbfa6af.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.ad0fe6f0.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.887585e1.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.aaba99a7.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.9e278a37.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "confidentialite.faa79232.css",
    "revision": "3331adbc0a2b93359024cf0d9626a6d2"
  },
  {
    "url": "confidentialite.faa79232.js",
    "revision": "d2b3700c33297c4539ee417dcd6f19c1"
  },
  {
    "url": "confidentialite.html",
    "revision": "c3ae231204085e9ad49d843a67d75601"
  },
  {
    "url": "favicon-16x16.a0a61c08.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.bd6b9d71.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "b370b192ace5c5ef208b55e244187f85"
  },
  {
    "url": "logo_dnum_dark.e9bb3588.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.411ea756.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "main.fb6bbcaf.css",
    "revision": "f3f7dd9d28b37834ebd9897e8a0b371f"
  },
  {
    "url": "marianne-bold-webfont.db730b38.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-bold-webfont.f8428997.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-regular-webfont.0529dd78.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "marianne-regular-webfont.78905f1b.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "MIN_Interieur_RVB_dark.375fe714.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.6e85e781.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "safari-pinned-tab.a198a050.svg",
    "revision": "f91dc8a582afe85e08c30e60c9231d1a"
  },
  {
    "url": "/",
    "revision": "c2bb3f5f01a98a212d319ffaa907a741"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
