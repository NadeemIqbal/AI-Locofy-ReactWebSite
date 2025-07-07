import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/AI-Locofy-ReactWebSite/", // Commented out for local development
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
