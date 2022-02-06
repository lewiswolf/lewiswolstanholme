// src
import GridFromJSON from './sub-components/grid-from-json'
import { MusicJSON, music_json } from '../config/music'

export default function Music(): JSX.Element {
	return (
		<main className='music'>
			<GridFromJSON
				json={music_json}
				cell={(obj: MusicJSON, i: number): JSX.Element => (
					<div
						aria-label={`Listen to ${obj.title}.`}
						className='albumcover'
						key={i}
						role='button'
						tabIndex={0}
						onClick={() => window.open(obj.link, '_blank')}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								window.open(obj.link, '_blank')
							}
						}}
					>
						<img alt={`Album artwork for ${obj.title}.`} src={obj.img} tabIndex={-1} />
					</div>
				)}
			/>
		</main>
	)
}
