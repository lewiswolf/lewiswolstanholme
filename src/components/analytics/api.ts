export const analyticsPageView = (): void => {
	typeof window.gtag === 'function' &&
		window.gtag('event', 'pageview', {
			page_location: window.location.href,
			page_path: window.location.pathname,
		})
}
