import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@sections": fileURLToPath(
        new URL("./src/components/sections", import.meta.url)
      ),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@routes": fileURLToPath(new URL("./src/routes", import.meta.url)),
    },
  },
});