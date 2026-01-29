import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Ensures relative paths for assets, fixing 404s on subdirectories or custom setups
    build: {
        outDir: 'dist',
    }
})
