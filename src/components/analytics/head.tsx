import React from 'react'
import { Helmet } from 'react-helmet-async'

export const GoogleAnalytics: React.FC<{ id: string }> = ({ id }) => {
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
