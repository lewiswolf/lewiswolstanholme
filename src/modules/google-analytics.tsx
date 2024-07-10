import type { FC } from 'react'
import { Helmet } from 'react-helmet-async'

export function analyticsPageView(): void {
	typeof window.gtag === 'function' &&
		window.gtag('event', 'pageview', {
			page_location: window.location.href,
			page_path: window.location.pathname,
		})
}

export const GoogleAnalytics: FC<{ id: string }> = ({ id }) => {
	return window.location.hostname !== 'localhost' ? (
		<Helmet>
			<script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
			<script>
				{`window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", "${id}");`}
			</script>
		</Helmet>
	) : (
		<></>
	)
}
