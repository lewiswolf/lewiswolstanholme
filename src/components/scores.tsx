// biome-ignore-all lint/nursery/noJsxPropsBind : here prop bindings are used alongside Aray.map()

// dependencies
import type { JSX } from 'react'
import '../scss/scores.scss'

// src
import { type ScoreJSON, compositions, engravings } from '../config/scores.ts'
import { GridFromJSON } from '../modules/grid-from-json.tsx'
import CompositionSVG from '../svg/compositions-thumb.svg?react'

function CompositionThumb(obj: ScoreJSON): JSX.Element {
	return (
		<div className='composition-thumb' tabIndex={-1}>
			<CompositionSVG />
			<p>{obj.title}</p>
			<p>{obj.instrumentation}</p>
			<p>{obj.year}</p>
		</div>
	)
}

function EngravingThumb(obj: ScoreJSON): JSX.Element {
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
	function downloadScore(obj: ScoreJSON & Readonly<{ type: 'compositions' | 'engravings' }>): void {
		if (obj.file) {
			window.open(`${window.location.protocol}//lewiswolstanholme.co.uk/api/${obj.type}/${obj.file}.pdf`, '_blank')
		} else if (obj.link) {
			window.open(obj.link.href, '_blank')
		}
	}

	return (
		<main className='scores'>
			<GridFromJSON
				json={[
					...compositions.map((a) => ({ ...a, type: 'compositions' })),
					...engravings.map((a) => ({ ...a, type: 'engravings' })),
				]}
				cell={(obj: ScoreJSON & Readonly<{ type: 'compositions' | 'engravings' }>, i: number): JSX.Element => (
					<button
						aria-label={`Download/purchase the score for ${obj.title}.`}
						key={i.toString()}
						onClick={(): void => {
							downloadScore(obj)
						}}
						onKeyDown={(e): void => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								downloadScore(obj)
							}
						}}
						tabIndex={0}
						type='button'
					>
						{obj.type === 'compositions' ? CompositionThumb(obj) : EngravingThumb(obj)}
					</button>
				)}
			/>
		</main>
	)
}
