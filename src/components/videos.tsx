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
						allow='accelerometer; autoplay; encrypted-media; gyroscope;'
						allowFullScreen={true}
						frameBorder={0}
						key={i}
						src={`https://www.youtube-nocookie.com/embed/${obj.hash}?theme=dark&color=white`}
						title={obj.title}
					/>
				)
			})}
		</main>
	)
}

export default Videos
