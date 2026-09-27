// dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// src
import App from './components/App.tsx'

const root = document.querySelector('#root')
if (root) {
	createRoot(root).render(
		<StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StrictMode>,
	)
}
