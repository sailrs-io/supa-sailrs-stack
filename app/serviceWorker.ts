import { setupServiceWorker } from "@sailrs/pwa";

// disable logs
// @ts-ignore
self.__WB_DISABLE_DEV_LOGS = true;

setupServiceWorker({
  recipes: {
    pageCache: true,
    imageCache: true,
    staticResourcesCache: true,
    offlineFallback: {
      pageFallback: "/",
      imageFallback: "/images/logo.png",
    },
    warmCache: {
      strategy: "staleWhileRevalidate",
      urls: ["/"],
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
      },
      cacheableResponses: {
        statuses: [0, 200],
      },
    },
  },
  pushNotifications: {
    onPush: true,
  },
});
