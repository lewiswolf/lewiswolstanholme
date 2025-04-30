// dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// src
import App from './components/App.tsx'

createRoot(document.getElementById('root') as NonNullable<HTMLDivElement>).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
