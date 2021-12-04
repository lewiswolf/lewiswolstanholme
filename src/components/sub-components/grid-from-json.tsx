// dependencies
import React from 'react'

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
	json,
	gridSpacer = 20,
	maxHeight = 280,
	maxWidth = 280,
}): JSX.Element => {
	const self = React.useRef<HTMLDivElement>(null)
	const [content, setContent] = React.useState<{ [key: string]: any }[]>([{}])
	const [grid_properties, setGrid] = React.useState<GridProperties>({
		gridDim: 0,
		gridWidth: '',
		maxCol: '',
	})

	React.useEffect(() => {
		// set content
		if (typeof json === 'string') {
			fetch(json)
				.then((res: Response) => res.json())
				.then((res: { [key: string]: any }[]) => setContent(res))
				.catch()
		} else {
			setContent(json)
		}

		// add listeners
		const gridResponse = (): void => {
			/*
			This function is used in conjunction with the 'resize' window event listener.
			When the window is resized, the size of the parent element is queried, from
			which the grid dimensions are inferred. This method keeps the grid centered
			within the parent, and sized according to the maximum number of grid cells
			per row.
			*/
			if (self.current !== null && self.current.parentElement !== null) {
				const contentWidth: number =
					self.current.parentElement.getBoundingClientRect().width
				const largestGrid: number = json.length * (maxWidth + gridSpacer) - gridSpacer
				setGrid({
					gridDim: contentWidth < maxWidth ? contentWidth : maxWidth,
					gridWidth: contentWidth > largestGrid ? `${largestGrid}px` : '100%',
					maxCol: contentWidth > largestGrid ? `${json.length}` : 'auto-fill',
				})
			}
		}
		window.addEventListener('resize', gridResponse)
		gridResponse()

		// remove listeners
		return window.removeEventListener('resize', gridResponse)
	}, [json, gridSpacer, maxHeight, maxWidth])

	return (
		<div
			ref={self}
			style={{
				width: grid_properties.gridWidth,
				margin: '0 auto',
				display: 'grid',
				justifyContent: 'space-evenly',
				justifyItems: 'center',
				alignItems: 'center',
				gridTemplateColumns: `repeat(${grid_properties.maxCol}, ${grid_properties.gridDim}px)`,
				gridAutoRows: `${maxHeight}px`,
				columnGap: `${gridSpacer}px`,
				rowGap: `${gridSpacer}px`,
			}}
		>
			{content.map((obj: any, i: number): JSX.Element => cell(obj, i))}
		</div>
	)
}

export default GridFromJSON
