import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg", "robots.txt"], // Statik dosyalarınızı buraya ekleyin
            manifest: {
                // Uygulama manifest dosyası ayarlarınız
                name: "Uygulama Adı",
                short_name: "Kısa Ad",
                description: "Uygulama Açıklaması",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "pwa-192x192.png", // İkon yolu
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png", // İkon yolu
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],

    server: {
        port: 3000,
        host: true,
    },
    resolve: {
        alias: {
            components: "/src/components",
            layouts: "/src/layouts",
            pages: "/src/pages",
            assets: "/src/assets",
            shared: "/src/shared",
        },
    },
});
