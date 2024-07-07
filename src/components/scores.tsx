// src
import GridFromJSON from './sub-components/grid-from-json'
import { ScoreJSON, compositions, engravings } from '../config/scores'
import CompositionSVG from '../svg/compositions-thumb.svg?react'

const CompositionThumb: React.FC<{ obj: ScoreJSON }> = ({ obj }) => {
	return (
		<div className='composition-thumb' tabIndex={-1}>
			<CompositionSVG />
			<p>{obj.title}</p>
			<p>{obj.instrumentation}</p>
			<p>{obj.year}</p>
		</div>
	)
}

const EngravingThumb: React.FC<{ obj: ScoreJSON }> = ({ obj }) => {
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
	type ScoreAndType = ScoreJSON & Readonly<{ type: 'compositions' | 'engravings' }>

	function downloadScore(obj: ScoreAndType): void {
		if (obj.file) {
			window.open(`${window.location.protocol}//lewiswolstanholme.co.uk/api/${obj.type}/${obj.file}.pdf`, '_blank')
		} else if (obj.link) {
			window.open(obj.link.href, '_blank')
		}
	}

	return (
		<>
			<main className='scores'>
				<GridFromJSON
					json={[
						...compositions.map((a) => ({ ...a, type: 'compositions' })),
						...engravings.map((a) => ({ ...a, type: 'engravings' })),
					]}
					cell={(obj: ScoreAndType, i: number): JSX.Element => {
						return (
							<div
								aria-label={`Download/purchase the score for ${obj.title}.`}
								className='score-cover'
								key={i}
								role='button'
								tabIndex={0}
								onClick={() => {
									downloadScore(obj)
								}}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault()
										downloadScore(obj)
									}
								}}
							>
								{obj.type === 'compositions' ? <CompositionThumb obj={obj} /> : <EngravingThumb obj={obj} />}
							</div>
						)
					}}
				/>
			</main>
		</>
	)
}
