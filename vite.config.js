import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en https://zeuspailoff.github.io/Personal-Web-MUI/,
// así que en build todos los assets tienen que colgar de esa subcarpeta.
// En dev seguimos sirviendo desde la raíz para no cambiar la URL local.
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Personal-Web-MUI/' : '/',
  plugins: [react()],
}))
