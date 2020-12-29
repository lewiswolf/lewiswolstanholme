import React from 'react'
import { ReactComponent as SVG } from '../svg/scores-thumb.svg'
import GridFromJSON from './sub-components/grid-from-json'

export default function Scores() {
	return (
		<main className='scores'>
			<GridFromJSON
				json={`${process.env.PUBLIC_URL}/config/scores.json`}
				children={(obj, i, maxWidth) => (
					<div
						key={i}
						className='score-cover'
						aria-label={`download the score for ${obj.title}`}
						role='button'
						tabIndex='0'
						style={{ height: maxWidth, width: maxWidth }}
						onClick={() =>
							window.open(
								`${window.location.protocol}//${window.location.hostname}/api/documents/${obj.file}`,
								'_blank'
							)
						}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								window.open(
									`${window.location.protocol}//${window.location.hostname}/api/documents/${obj.file}`,
									'_blank'
								)
							}
						}}
					>
						<SVG tabIndex='-1' />
						<div
							tabIndex='-1'
							style={{
								height: `${maxWidth - 78}px`,
								width: `${maxWidth - 78}px`,
							}}
						>
							<p>{obj.title}</p>
							<p>{obj.instrumentation}</p>
							<p>{obj.year}</p>
						</div>
					</div>
				)}
			/>
		</main>
	)
}
