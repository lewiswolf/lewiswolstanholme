import React from 'react'
import GridFromJSON from './sub-components/grid-from-json'

type VideosJSON = {
	hash: string
	name: string
}

export default function Videos(): JSX.Element {
	return (
		<main className='videos'>
			<GridFromJSON
				json={`${process.env.PUBLIC_URL}/config/videos.json`}
				children={(obj: VideosJSON, i: number) => (
					<iframe
						key={i}
						title={obj.name}
						src={`https://www.youtube-nocookie.com/embed/${obj.hash}?theme=dark&color=white`}
						frameBorder={0}
						allow='accelerometer; autoplay; encrypted-media; gyroscope;'
						allowFullScreen={true}
					/>
				)}
			/>
		</main>
	)
}
