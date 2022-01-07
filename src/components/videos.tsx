// config
import { VideosJSON, videos_json } from '../config/videos'

const Videos = (): JSX.Element => {
	return (
		<main className='videos'>
			{videos_json.map((obj: VideosJSON, i: number): JSX.Element => {
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
