// dependencies
import React from 'react'
import GridFromJSON from './sub-components/grid-from-json'

// config
import { MusicJSON } from '../config/music'

const Music: React.FC<{ json: MusicJSON[] }> = ({ json }) => {
	return (
		<main className='music'>
			<GridFromJSON
				json={json}
				children={(obj: MusicJSON, i: number): JSX.Element => (
					<div
						key={i}
						className='albumcover'
						aria-label={`listen to ${obj.title}`}
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
							tabIndex={-1}
							src={`${process.env.PUBLIC_URL}/images/${obj.src}`}
							alt={obj.title}
						/>
					</div>
				)}
			/>
		</main>
	)
}

export default Music
