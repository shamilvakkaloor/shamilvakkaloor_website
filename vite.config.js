import { defineConfig } from 'vite'

export default defineConfig({
    base: '/', // Absolute path for custom domain root
    build: {
        outDir: 'dist',
    }
})
