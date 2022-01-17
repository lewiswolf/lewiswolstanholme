// dependencies
import { useEffect, useRef, useState } from 'react'

type Props = {
	cell: (obj: any, i: number) => JSX.Element
	gridSpacer?: number
	json: { [key: string]: any }[] | string
	maxHeight?: number
	maxWidth?: number
}

type GridProperties = {
	gridDim: number
	gridWidth: string
	maxCol: string
}

const GridFromJSON: React.FC<Props> = ({
	cell,
	gridSpacer = 20,
	json,
	maxHeight = 280,
	maxWidth = maxHeight,
}) => {
	const self = useRef<HTMLDivElement>(null)
	const [content, setContent] = useState<{ [key: string]: any }[]>([])
	const [gridState, setGrid] = useState<GridProperties>({
		gridDim: 0,
		gridWidth: '',
		maxCol: '',
	})

	useEffect(() => {
		/*
			This effect is used to dyanmically load the content either as a raw json file
			from the public folder, or update the content using the prop itself.
		*/
		if (typeof json === 'string') {
			fetch(json)
				.then((res: Response) => res.json())
				.then((json: { [key: string]: any }[]) => setContent(json))
				.catch()
		} else {
			setContent(json)
		}
	}, [json])

	useEffect(() => {
		/*
			This effect is used in conjunction with the 'resize' window event listener.
			When the window is resized, the size of the parent element is queried, from
			which the grid dimensions are inferred. This method keeps the grid centered
			within the parent, and sized according to the maximum number of grid cells
			per row.
		*/
		const gridResponse = (): void => {
			if (self.current !== null && self.current.parentElement !== null) {
				const parentWidth: number = self.current.parentElement.getBoundingClientRect().width
				const largestGrid: number = content.length * (maxWidth + gridSpacer) - gridSpacer
				setGrid({
					gridDim: parentWidth < maxWidth ? parentWidth : maxWidth,
					gridWidth: parentWidth > largestGrid ? `${largestGrid}px` : '100%',
					maxCol: parentWidth > largestGrid ? `${content.length}` : 'auto-fill',
				})
			}
		}
		// Add and remove event listeners
		if (content.length > 0) {
			window.addEventListener('resize', gridResponse)
			gridResponse()
			return () => window.removeEventListener('resize', gridResponse)
		} else {
			return () => {}
		}
	}, [content.length, gridSpacer, maxWidth])

	return (
		<div
			ref={self}
			style={{
				width: gridState.gridWidth,
				margin: '0 auto',
				display: 'grid',
				gridTemplateColumns: `repeat(${gridState.maxCol}, ${gridState.gridDim}px)`,
				gridAutoRows: `${maxHeight}px`,
				columnGap: `${gridSpacer}px`,
				rowGap: `${gridSpacer}px`,
				justifyContent: 'space-evenly',
				justifyItems: 'center',
				alignItems: 'center',
			}}
		>
			{content.map((obj: any, i: number): JSX.Element => cell(obj, i))}
		</div>
	)
}

export default GridFromJSON
