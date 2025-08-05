import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "React Calendar App",
        short_name: "Calendar",
        description: "A simple calendar PWA app using React",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "./src/assets/icon-512.png",
          },
        ],
      },
    }),
  ],
});
