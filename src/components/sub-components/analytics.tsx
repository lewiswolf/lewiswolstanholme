import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleAnalytics: React.FC<{ id: string }> = ({ id }): JSX.Element => {
	if (window.location.hostname !== 'localhost') {
		return (
			<Helmet>
				<script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
				<script>
					{'window.dataLayer = window.dataLayer || []; \n' +
						'function gtag() { window.dataLayer.push(arguments); } \n' +
						'gtag("js", new Date()); \n' +
						`gtag("config", "${id}"); \n`}
				</script>
			</Helmet>
		)
	} else {
		return <></>
	}
}

const analyticsPageView = (): void => {
	window.location.hostname !== 'localhost' &&
		window?.gtag &&
		window.gtag('event', 'pageview', {
			page_location: window.location.href,
			page_path: window.location.pathname,
		})
}

export { GoogleAnalytics, analyticsPageView }
