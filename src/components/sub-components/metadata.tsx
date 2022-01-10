// dependencies
import React from 'react'
import { Helmet } from 'react-helmet'

const Metadata: React.FC<{
	darkModeFavicon?: boolean
	description?: string
	title?: string
}> = ({ darkModeFavicon = false, description = '', title = '' }): JSX.Element => {
	/*
	Sets the title, description and adds an extra favicon to the <head />
	when eneabled. If description is used, set the meta tag to
		<meta
			name="..."
			data-react-helmet="true"
		/>
	in the html. If not intended, keep your metatag as normal.
	*/

	return (
		<Helmet>
			{darkModeFavicon && (
				<link
					rel='icon'
					media='(prefers-color-scheme: dark)'
					href={`${process.env.PUBLIC_URL}/favicon-dark.ico`}
				/>
			)}
			{description && <meta name='description' content={description} />}
			{title && <title>{title}</title>}
		</Helmet>
	)
}

export default Metadata

// 		{/* <meta
// 	http-equiv='Content-Security-Policy'
// 	content="script-src 'self' https://www.googletagmanager.com; style-src 'self';"
// /> */}
