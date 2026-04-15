// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()

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
						onClick={(): void => {
							window.open(obj.link, '_blank')
						}}
						onKeyDown={(e): void => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								window.open(obj.link, '_blank')
							}
						}}
						tabIndex={0}
						type='button'
					>
						<img alt={`Album artwork for ${obj.title}.`} height={280} src={obj.img} tabIndex={-1} width={280} />
					</button>
				)}
			/>
		</main>
	)
}
