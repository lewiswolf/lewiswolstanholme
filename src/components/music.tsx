// dependencies
import React from 'react'
import GridFromJSON from './sub-components/grid-from-json'

// config
import { MusicJSON } from '../config/music'

const Music: React.FC<{ json: MusicJSON[] }> = ({ json }): JSX.Element => {
	return (
		<main className='music'>
			<GridFromJSON
				json={json}
				cell={(obj: MusicJSON, i: number): JSX.Element => (
					<div
						aria-label={`listen to ${obj.title}`}
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
						<img
							alt={obj.title}
							src={`${process.env.PUBLIC_URL}/images/${obj.src}`}
							tabIndex={-1}
						/>
					</div>
				)}
			/>
		</main>
	)
}

export default Music
