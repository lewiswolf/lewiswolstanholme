import React from 'react'
import GridFromJSON from './sub-components/grid-from-json'

type MusicJSON = {
	link: string
	released: boolean
	src: string
	title: string
}

export default function Music(): JSX.Element {
	return (
		<main className='music'>
			<GridFromJSON
				json={`${process.env.PUBLIC_URL}/config/music.json`}
				children={(obj: MusicJSON, i: number): JSX.Element => (
					<div
						key={i}
						className='albumcover'
						{...(obj.released && {
							'aria-label': `listen to ${obj.title}`,
							role: 'button',
							tabIndex: 0,
						})}
						style={{ cursor: obj.released ? 'pointer' : 'normal' }}
						onClick={(): Window | null => (obj.released ? window.open(obj.link, '_blank') : null)}
						onKeyDown={(e: React.KeyboardEvent): void => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								obj.released && window.open(obj.link, '_blank')
							}
						}}
					>
						<img tabIndex={-1} src={`${process.env.PUBLIC_URL}/images/${obj.src}`} alt={obj.title} />
						{!obj.released && <div>coming soon</div>}
					</div>
				)}
			/>
		</main>
	)
}
