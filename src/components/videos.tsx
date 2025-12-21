// dependencies
import { type JSX, Fragment } from 'react'
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
								allow='autoplay; encrypted-media; fullscreen; picture-in-picture; web-share'
								key={i.toString()}
								referrerPolicy='strict-origin-when-cross-origin'
								src={`https://player.vimeo.com/video/${obj.hash}?h=be7c17d620`}
								title={obj.title}
							/>
						)
					case 'youtube':
						return (
							<iframe
								allow='autoplay; encrypted-media; fullscreen; picture-in-picture; web-share'
								key={i.toString()}
								referrerPolicy='strict-origin-when-cross-origin'
								src={`https://www.youtube.com/embed/${obj.hash}?theme=dark&color=white`}
								title={obj.title}
							/>
						)
					default:
						return <Fragment key={i.toString()} />
				}
			})}
		</main>
	)
}
