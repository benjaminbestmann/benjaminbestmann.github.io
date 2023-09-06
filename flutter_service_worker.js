'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8d49870ab2fbabdad01781665caea644",
"assets/assets/HEBB_03_Session%25201_ML.csv": "bb1e6a926e9a773b16ffd229a853bed3",
"assets/assets/HEBB_03_Session%25202_ML.csv": "bef624178a9d4af91441bebc57d9f3dc",
"assets/assets/HEBB_03_Session%25203_ML.csv": "db6a5e5f8c1bc7022c6c68e73c9af7d9",
"assets/assets/HEBB_91_Session_1.csv": "043581dc18b69bd384050c08f155b197",
"assets/assets/HEBB_91_Session_2.csv": "8047e4063061b43612c57382dadbb666",
"assets/assets/images/coin-ui.svg": "62012c9227b28f4d2a3502e66f5e748f",
"assets/assets/images/end-button.svg": "9e744d3561da697628e5b44a812c62ce",
"assets/assets/images/lower-left-coins.svg": "c11b40c683336a3b1f22d4bc96fd4664",
"assets/assets/images/side-therm.svg": "e13ae6af7ad30923ced56ab93e49272b",
"assets/assets/images/therm-bg.svg": "d4283e3e2b287b30b877c1cb48a73ce4",
"assets/assets/images/therm-percent-lines-sized.svg": "d43b4a0572327e137eee1c19718df0c6",
"assets/assets/images/therm-smiley-sized.svg": "ad938d0d9baa042a84049dc1f966afac",
"assets/assets/images/top-right-coins.svg": "3680c9468a89b28802e3301e8b9bcd1c",
"assets/assets/images1/ellipse14.svg": "1d459e53d27206d96da220c1922e7690",
"assets/assets/images1/vector%2520(1).svg": "36e063fa999d295a1e41af794a014800",
"assets/assets/images1/vector%2520(10).svg": "e8c70aae9444131e52af761569707c1a",
"assets/assets/images1/vector%2520(11).svg": "ffe5c6a53213b43ec5390fe2a1475759",
"assets/assets/images1/vector%2520(12).svg": "4c8bda602f7957df465f02ba9a7c9086",
"assets/assets/images1/vector%2520(13).svg": "abea3547ea83a111e0eea22e14af872a",
"assets/assets/images1/vector%2520(14).svg": "4d7a9602f7c88d27daa80a312c5f5b44",
"assets/assets/images1/vector%2520(14).svg.png": "ef53421cc02baa98072d72c08ca272f6",
"assets/assets/images1/vector%2520(15).svg": "467bd8984ce76d87e64e06f43c77c141",
"assets/assets/images1/vector%2520(2).svg": "83a773db3163b47008873d5e46bafc1a",
"assets/assets/images1/vector%2520(3).svg": "26ad94913f26cdff0ce15a51bc4024c5",
"assets/assets/images1/vector%2520(4).svg": "a55f37d8a75e9c2f556f1903ca71dc70",
"assets/assets/images1/vector%2520(5).svg": "4bf45d211eed7da97f689e9bc7f80654",
"assets/assets/images1/vector%2520(6).svg": "a565361f0fa25fcb245861e5fa0b8d82",
"assets/assets/images1/vector%2520(7).svg": "3e5c69712b113c1974512054e5331085",
"assets/assets/images1/vector%2520(8).svg": "1373a48b6542a2fd09228c0ae225f6a6",
"assets/assets/images1/vector%2520(9).svg": "07c1eb6805c929fc3697aa6044af6aa2",
"assets/assets/images1/vector.svg": "1e03b2ca8a9a2b920420864e2342531e",
"assets/assets/images2/ellipse14.svg": "1d459e53d27206d96da220c1922e7690",
"assets/assets/images2/vector%2520(1).svg": "36e063fa999d295a1e41af794a014800",
"assets/assets/images2/vector%2520(10).svg": "e8c70aae9444131e52af761569707c1a",
"assets/assets/images2/vector%2520(11).svg": "ffe5c6a53213b43ec5390fe2a1475759",
"assets/assets/images2/vector%2520(12).svg": "4c8bda602f7957df465f02ba9a7c9086",
"assets/assets/images2/vector%2520(13).svg": "abea3547ea83a111e0eea22e14af872a",
"assets/assets/images2/vector%2520(14).svg": "4d7a9602f7c88d27daa80a312c5f5b44",
"assets/assets/images2/vector%2520(15).svg": "467bd8984ce76d87e64e06f43c77c141",
"assets/assets/images2/vector%2520(2).svg": "83a773db3163b47008873d5e46bafc1a",
"assets/assets/images2/vector%2520(3).svg": "26ad94913f26cdff0ce15a51bc4024c5",
"assets/assets/images2/vector%2520(4).svg": "a55f37d8a75e9c2f556f1903ca71dc70",
"assets/assets/images2/vector%2520(5).svg": "4bf45d211eed7da97f689e9bc7f80654",
"assets/assets/images2/vector%2520(6).svg": "a565361f0fa25fcb245861e5fa0b8d82",
"assets/assets/images2/vector%2520(7).svg": "3e5c69712b113c1974512054e5331085",
"assets/assets/images2/vector%2520(8).svg": "1373a48b6542a2fd09228c0ae225f6a6",
"assets/assets/images2/vector%2520(9).svg": "07c1eb6805c929fc3697aa6044af6aa2",
"assets/assets/images2/vector.svg": "1e03b2ca8a9a2b920420864e2342531e",
"assets/assets/images2/vector3.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images2/vector4.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/Snap1.jpg": "a025a95e942a915e68c3108e1f3951f3",
"assets/assets/Snap2.jpg": "6e065f8f40f248f5d3f1aea7b6f1974e",
"assets/assets/Snap3.jpg": "24b0f92710aa5dd88e25d710f19cd378",
"assets/assets/thanos.jpg": "77fbc09666aab502ca7694af14c34e17",
"assets/FontManifest.json": "d0810f9291690e26aa2189ed6a692bd3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/ReemKufi-Regular.ttf": "95fbb24bd993a6d28feca1c3c8bba206",
"assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/NOTICES": "00719a6fd8c70395a38c1931df676d24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "429a0b94964e3f876f0b4664d6387687",
"/": "429a0b94964e3f876f0b4664d6387687",
"main.dart.js": "9e440fe7ab27eb1e4c827c00471d1101",
"manifest.json": "93465fa57d4535dc57f667f4eb1b9304",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
