import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.md'],
	plugins: [
		compression({
			algorithm: 'gzip',
			include: /\.(js|mjs|json|css|svg)$/i,
		}),
		react(),
		svgr({
			exportAsDefault: true,
		}),
	],
})
