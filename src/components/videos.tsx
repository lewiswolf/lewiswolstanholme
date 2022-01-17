// src
import { VideosJSON, videos_json } from '../config/videos'

export default function Videos(): JSX.Element {
	return (
		<main className='videos'>
			{videos_json.map((obj: VideosJSON, i: number): JSX.Element => {
				return (
					<iframe
						allow='accelerometer; autoplay; encrypted-media; fullscreen; gyroscope;'
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
