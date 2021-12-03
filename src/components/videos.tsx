// dependencies
import React from 'react'

// config
import { VideosJSON } from '../config/videos'

const Videos: React.FC<{ json: VideosJSON[] }> = ({ json }) => {
	return (
		<main className='videos'>
			{json.map((obj: VideosJSON, i: number): JSX.Element => {
				return (
					<iframe
						key={i}
						title={obj.title}
						src={`https://www.youtube-nocookie.com/embed/${obj.hash}?theme=dark&color=white`}
						frameBorder={0}
						allow='accelerometer; autoplay; encrypted-media; gyroscope;'
						allowFullScreen={true}
					/>
				)
			})}
		</main>
	)
}

export default Videos
