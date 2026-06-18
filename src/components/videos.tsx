/* eslint-disable @eslint-react/dom-no-unsafe-iframe-sandbox */

// dependencies
import { type JSX, Fragment } from 'react'
import '../scss/videos.scss'

// src
import { type VideoJSON, videos } from '../config/videos.ts'

export default function Videos(): JSX.Element {
	return (
		<main className='videos'>
			{videos.map((obj: VideoJSON): JSX.Element => {
				switch (obj.type) {
					case 'vimeo':
						return (
							<iframe
								allow='autoplay; encrypted-media; fullscreen; picture-in-picture; web-share'
								key={obj.hash}
								referrerPolicy='strict-origin-when-cross-origin'
								sandbox='allow-presentation allow-same-origin allow-scripts'
								src={`https://player.vimeo.com/video/${obj.hash}?h=be7c17d620`}
								title={obj.title}
							/>
						)
					case 'youtube':
						return (
							<iframe
								allow='autoplay; encrypted-media; fullscreen; picture-in-picture; web-share'
								key={obj.hash}
								referrerPolicy='strict-origin-when-cross-origin'
								sandbox='allow-presentation allow-same-origin allow-scripts'
								src={`https://www.youtube.com/embed/${obj.hash}?theme=dark&color=white`}
								title={obj.title}
							/>
						)
					default:
						return <Fragment key='null' />
				}
			})}
		</main>
	)
}
