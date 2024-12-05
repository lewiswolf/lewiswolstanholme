import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.bib', '**/*.md'],
	build: { sourcemap: true, target: 'ESNext' },
	esbuild: { legalComments: 'none' },
	plugins: [
		compression({
			algorithm: 'gzip',
			include: /\.(js|map|mjs|json|css|svg)$/i,
		}),
		react(),
		svgr(),
	],
})
