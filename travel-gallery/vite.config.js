// Rev 01 - added outDir so the app is bublished from 'docs' directory
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "docs",
    },
});
