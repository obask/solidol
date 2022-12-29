import { defineConfig } from 'vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'mytsx/jsx-runtime': path.resolve(__dirname, "./src/mytsx/jsx-runtime"),
        }
    }
})
