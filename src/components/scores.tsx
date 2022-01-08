// dependencies
import React from 'react'
import { Umenu } from 'maxmsp-gui'
import { useLocation, useNavigate } from 'react-router-dom'

// src
import GridFromJSON from './sub-components/grid-from-json'
import { ScoresJSON, compositions, engravings } from '../config/scores'
import { ReactComponent as CompositionSVG } from '../svg/compositions-thumb.svg'

const CompositionThumb: React.FC<{ obj: ScoresJSON }> = ({ obj }) => {
	return (
		<div className='composition-thumb' tabIndex={-1}>
			<CompositionSVG />
			<p>{obj.title}</p>
			<p>{obj.instrumentation}</p>
			<p>{obj.year}</p>
		</div>
	)
}

const EngravingThumb: React.FC<{ obj: ScoresJSON }> = ({ obj }) => {
	return (
		<div className='engraving-thumb' tabIndex={-1}>
			<p>{obj.composer ? obj.composer : ''}</p>
			<p>{obj.title}</p>
			<hr />
			<p>{obj.instrumentation}</p>
			<hr />
			<p>{obj.year}</p>
		</div>
	)
}

export default function Scores(): JSX.Element {
	const pages: string[] = ['compositions', 'engravings']
	const location: string = useLocation().search.slice(6)
	const navigate = useNavigate()

	React.useEffect(() => {
		if (pages.indexOf(location) === -1) {
			navigate(`/scores?view=${pages[0]}`)
		}
	})

	return (
		<>
			<div className='header' id='scores-header'>
				<Umenu
					ariaLabel='What type of scores are on the page?'
					items={pages.map(
						(page: string) => page.charAt(0).toUpperCase() + page.slice(1)
					)}
					width={255}
					onChange={(i: number) => navigate(`/scores?view=${pages[i]}`)}
				/>
			</div>
			<main className='scores'>
				<GridFromJSON
					json={location && location === pages[1] ? engravings : compositions}
					cell={(obj: ScoresJSON, i: number): JSX.Element => {
						return (
							<div
								key={i}
								className='score-cover'
								aria-label={`download the score for ${obj.title}`}
								role='button'
								tabIndex={0}
								onClick={() =>
									window.open(
										`${window.location.protocol}//${window.location.hostname}/api/documents/${obj.file}`,
										'_blank'
									)
								}
								onKeyDown={(e) => {
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
								{location && location === pages[1] ? (
									<EngravingThumb obj={obj} />
								) : (
									<CompositionThumb obj={obj} />
								)}
							</div>
						)
					}}
				/>
			</main>
		</>
	)
}
