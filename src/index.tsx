// dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
// src
import App from './components/App'

const root = document.getElementById('root')
root &&
	createRoot(root).render(
		<StrictMode>
			<BrowserRouter>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</BrowserRouter>
		</StrictMode>,
	)
