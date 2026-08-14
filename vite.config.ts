import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@component': path.resolve(__dirname, 'src/component'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@service': path.resolve(__dirname, 'src/service'),
            '@config': path.resolve(__dirname, 'src/config'),
        }
    }
})
