import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portal/",
  root: "portal-src",
  publicDir: "public",
  plugins: [react()],
  build: {
    outDir: "../portal",
    emptyOutDir: true,
  },
});
