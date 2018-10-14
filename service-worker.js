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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9b1817cc40134a661613816cd7ceaf4a"
  },
  {
    "url": "assets/css/1.styles.16c1852f.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.d8f64b03.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.eba69253.css",
    "revision": "ce643488bfca02519367ba0c08330f76"
  },
  {
    "url": "assets/css/5.styles.dd588b7f.css",
    "revision": "6acd1457b6d5cba2a9c3937cac33a64c"
  },
  {
    "url": "assets/css/styles.1ddd3b30.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/avatar.bb827424.jpg",
    "revision": "bb827424a12dd39a4644aad165103e78"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.16c1852f.js",
    "revision": "91424306311612ab1ff7e941f497f2ee"
  },
  {
    "url": "assets/js/2.d8f64b03.js",
    "revision": "a185ae165a8c2cc3d876370148212608"
  },
  {
    "url": "assets/js/3.eba69253.js",
    "revision": "219c147af85e8af9e64b3f5e9c144fa5"
  },
  {
    "url": "assets/js/4.6b54611e.js",
    "revision": "cdc5363a8e19906d592003b996f5fdfd"
  },
  {
    "url": "assets/js/5.dd588b7f.js",
    "revision": "cbffeea0ca34e2eef3375f55387550ec"
  },
  {
    "url": "assets/js/6.5680d568.js",
    "revision": "9d4272b96900e3636f2993af7fdf493f"
  },
  {
    "url": "assets/js/7.8460239e.js",
    "revision": "58f0cf668e5b370f0fcee80f8ca40b3e"
  },
  {
    "url": "assets/js/8.28698301.js",
    "revision": "82a74ae0843a23a02127be9668dc9509"
  },
  {
    "url": "assets/js/9.4d631693.js",
    "revision": "d36f1e1329bdf15153dafe6fbd632991"
  },
  {
    "url": "assets/js/app.1ddd3b30.js",
    "revision": "558dc823055d418bb2889a8b5a1b6058"
  },
  {
    "url": "blog/index.html",
    "revision": "690ebcf364a95eac6f6154c03563bfd1"
  },
  {
    "url": "blog/Introduction-of-iDict-weapp.html",
    "revision": "a1a15059dc42210f9685ee6e82ea776e"
  },
  {
    "url": "index.html",
    "revision": "40d77c6ead2c79dbf1f1552876cdd8aa"
  },
  {
    "url": "tags.html",
    "revision": "24e1351c28bba329ff22e0ba66f8cca7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
