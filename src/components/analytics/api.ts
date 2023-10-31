export const analyticsPageView = (): void => {
	window?.gtag &&
		window.gtag('event', 'pageview', {
			page_location: window.location.href,
			page_path: window.location.pathname,
		})
}
