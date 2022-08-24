// dependencies
import { Umenu } from 'maxmsp-gui'
import { useEffect } from 'react'
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
			<p>{obj.composer}</p>
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

	useEffect(() => {
		if (pages.indexOf(location) === -1) {
			navigate(`/scores?view=${pages[0]}`)
		}
	})

	return (
		<>
			<header>
				<Umenu
					ariaLabel='What type of scores are on the page?'
					items={pages.map(
						(page: string) => page.charAt(0).toUpperCase() + page.slice(1),
					)}
					value={pages.indexOf(location) !== -1 ? pages.indexOf(location) : 0}
					width={200}
					onChange={(i: number) => navigate(`/scores?view=${pages[i]}`)}
				/>
			</header>
			<main className='scores'>
				<GridFromJSON
					json={location && location === pages[1] ? engravings : compositions}
					cell={(obj: ScoresJSON, i: number): JSX.Element => {
						return (
							<div
								aria-label={`Download the score for ${obj.title}.`}
								className='score-cover'
								key={i}
								role='button'
								tabIndex={0}
								onClick={() =>
									window.open(
										`${window.location.protocol}//lewiswolstanholme.co.uk/api/${location}/${obj.file}.pdf`,
										'_blank',
									)
								}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault()
										return window.open(
											`${window.location.protocol}//lewiswolstanholme.co.uk/api/${location}/${obj.file}.pdf`,
											'_blank',
										)
									} else {
										return null
									}
								}}
							>
								{location && location === pages[0] ? (
									<CompositionThumb obj={obj} />
								) : (
									<EngravingThumb obj={obj} />
								)}
							</div>
						)
					}}
				/>
			</main>
		</>
	)
}
