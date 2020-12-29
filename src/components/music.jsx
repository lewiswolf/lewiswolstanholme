import React from 'react'
import GridFromJSON from './sub-components/grid-from-json'

export default function Music() {
	return (
		<main className='music'>
			<GridFromJSON
				json={`${process.env.PUBLIC_URL}/config/music.json`}
				children={(obj, i) => (
					<div
						key={i}
						className='albumcover'
						{...(obj.released && {
							'aria-label': `listen to ${obj.title}`,
							role: 'button',
							tabIndex: '0',
						})}
						style={{ cursor: obj.released ? 'pointer' : 'normal' }}
						onClick={(e) => obj.released && window.open(obj.link, '_blank')}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								obj.released && window.open(obj.link, '_blank')
							}
						}}
					>
						<img tabIndex='-1' src={`${process.env.PUBLIC_URL}/images/${obj.src}`} alt={obj.title} />
						{!obj.released && <div>coming soon</div>}
					</div>
				)}
			/>
		</main>
	)
}
