import { useEffect, useRef, useState } from 'react'
import { ReactP5Wrapper, Sketch } from 'react-p5-wrapper'

export type Dimensions = {
	height: number
	width: number
}

export const P5: React.FC<{ sketch: Sketch }> = ({ sketch }) => {
	const self = useRef<HTMLDivElement>(null)
	const [dim, setDim] = useState<Dimensions>({
		height: 0,
		width: 0,
	})

	useEffect(() => {
		/*
			This effect is used in conjunction with the 'resize' window event listener.
			When the window is resized, the size of the parent element is queried, from
			which the p5 dimensions are inferred.
		*/
		const resize = (): void => {
			if (self.current !== null && self.current.parentElement !== null) {
				const parent: DOMRect = self.current.parentElement.getBoundingClientRect()
				setDim({
					height: parent.height,
					width: parent.width,
				})
			}
		}
		// Add and remove event listeners
		window.addEventListener('resize', resize)
		resize()
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<div
			ref={self}
			className='p5'
			style={{
				height: '100%',
				width: '100%',
				fontSize: 0,
			}}
		>
			{dim.height && dim.width && <ReactP5Wrapper dimensions={dim} sketch={sketch} />}
		</div>
	)
}
