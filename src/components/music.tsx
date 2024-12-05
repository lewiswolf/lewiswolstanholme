// dependencies
import type { JSX } from 'react'

// src
import { type AlbumJSON, albums } from '../config/music.ts'
import { GridFromJSON } from '../modules/grid-from-json.tsx'
import '../scss/music.scss'

export default function Music(): JSX.Element {
	return (
		<main className='music'>
			<GridFromJSON
				json={albums}
				cell={(obj: AlbumJSON, i: number): JSX.Element => (
					<button
						aria-label={`Listen to ${obj.title}.`}
						key={i.toString()}
						tabIndex={0}
						type='button'
						onClick={() => window.open(obj.link, '_blank')}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								window.open(obj.link, '_blank')
							}
						}}
					>
						<img alt={`Album artwork for ${obj.title}.`} src={obj.img} tabIndex={-1} />
					</button>
				)}
			/>
		</main>
	)
}
