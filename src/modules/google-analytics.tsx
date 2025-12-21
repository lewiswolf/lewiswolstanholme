// dependencies
import { useEffect } from 'react'

export function analyticsPageView(): void {
	if (typeof window.gtag === 'function') {
		window.gtag('event', 'pageview', {
			page_location: window.location.href,
			page_path: window.location.pathname,
		})
	}
}

export const GoogleAnalytics = ({ G4A_id }: { G4A_id: string }) => {
	useEffect(() => {
		if (window.location.hostname === 'localhost') {
			return
		}
		// load the Google Analytics script
		const script_1 = document.createElement('script')
		script_1.async = true
		script_1.src = `https://www.googletagmanager.com/gtag/js?id=${G4A_id}`
		document.head.appendChild(script_1)
		const script_2 = document.createElement('script')
		script_2.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${G4A_id}');
		`
		document.head.appendChild(script_2)
		// cleanup function to remove the scripts when the component unmounts
		return () => {
			document.head.removeChild(script_1)
			document.head.removeChild(script_2)
		}
	}, [G4A_id])
	return null
}
