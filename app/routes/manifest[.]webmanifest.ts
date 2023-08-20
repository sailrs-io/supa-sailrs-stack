import { json } from "@remix-run/node";
export const loader = () =>
  json({
    theme_color: "#e5ebeb",
    background_color: "#e5ebeb",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "Remix Supa Sailr",
    short_name: "Sailr",
    icons: [
      {
        src: "/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/images/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
