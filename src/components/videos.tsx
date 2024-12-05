// dependencies
import type { JSX } from 'react'
import '../scss/videos.scss'

// src
import { type VideoJSON, videos } from '../config/videos.ts'

export default function Videos(): JSX.Element {
	return (
		<main className='videos'>
			{videos.map((obj: VideoJSON, i: number): JSX.Element => {
				switch (obj.type) {
					case 'vimeo':
						return (
							<iframe
								allow='autoplay; fullscreen; picture-in-picture;'
								frameBorder={0}
								key={i.toString()}
								src={`https://player.vimeo.com/video/${obj.hash}?h=be7c17d620`}
								title={obj.title}
							/>
						)
					case 'youtube':
						return (
							<iframe
								allow='accelerometer; autoplay; encrypted-media; fullscreen; gyroscope;'
								frameBorder={0}
								key={i.toString()}
								src={`https://www.youtube-nocookie.com/embed/${obj.hash}?theme=dark&color=white`}
								title={obj.title}
							/>
						)
					default:
						return <></>
				}
			})}
		</main>
	)
}
