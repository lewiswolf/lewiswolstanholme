import React from 'react'
import { ReactComponent as SVG } from '../svg/scores-thumb.svg'
import GridFromJSON from './sub-components/grid-from-json'

type ScoresJSON = {
	file: string
	instrumentation: string
	title: string
	year: string
}

export default function Scores() {
	const maxWidth = 280
	return (
		<main className='scores'>
			<GridFromJSON
				children={(obj: ScoresJSON, i: number) => (
					<div
						key={i}
						className='score-cover'
						aria-label={`download the score for ${obj.title}`}
						role='button'
						tabIndex={0}
						style={{ height: maxWidth, width: maxWidth }}
						onClick={(): Window | null =>
							window.open(
								`${window.location.protocol}//${window.location.hostname}/api/documents/${obj.file}`,
								'_blank'
							)
						}
						onKeyDown={(e: React.KeyboardEvent): Window | null => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								return window.open(
									`${window.location.protocol}//${window.location.hostname}/api/documents/${obj.file}`,
									'_blank'
								)
							} else {
								return null
							}
						}}
					>
						<SVG tabIndex={-1} />
						<div
							tabIndex={-1}
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
				json={`${process.env.PUBLIC_URL}/config/scores.json`}
				maxWidth={maxWidth}
			/>
		</main>
	)
}
