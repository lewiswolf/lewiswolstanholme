// dependencies
import React from 'react'
import { Helmet } from 'react-helmet-async'

const Metadata: React.FC<{
	description?: string
	title?: string
}> = ({ description = '', title = '' }): JSX.Element => {
	/*
	Sets the title and description in <head />
	If description is used, set the meta tag to
		<meta
			name="..."
			data-react-helmet="true"
		/>
	in the html. If not intended, keep the metatag as normal.
	*/

	return (
		<Helmet>
			{description && <meta name='description' content={description} />}
			{title && <title>{title}</title>}
		</Helmet>
	)
}

export default Metadata
