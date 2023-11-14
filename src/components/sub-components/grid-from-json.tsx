/* eslint-disable @typescript-eslint/no-explicit-any */
// dependencies
import { useEffect, useRef, useState } from 'react'

type GridProperties = {
	width: string
	gridAutoRows: string
	gridTemplateColumns: string
}

const GridFromJSON: React.FC<{
	cell: (obj: any, i: number) => JSX.Element
	gridSpacer?: number
	json: { [key: string]: any }[] | string[] | string
	maxHeight?: number
	maxWidth?: number
}> = ({ cell, gridSpacer = 20, json, maxWidth = 280, maxHeight = maxWidth }) => {
	const self = useRef<HTMLDivElement>(null)
	const [content, setContent] = useState<{ [key: string]: any }[] | string[]>([])
	const [gridState, setGrid] = useState<GridProperties>({
		width: '',
		gridAutoRows: '',
		gridTemplateColumns: '',
	})

	useEffect(() => {
		/*
			This effect is used to dyanmically load the content either as a raw json file
			from the public folder, or update the content using the prop itself.
		*/
		if (typeof json === 'string') {
			void fetch(json)
				.then((res: Response) => res.json())
				.then((json: { [key: string]: any }[]) => {
					setContent(json)
				})
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
			if (self.current?.parentElement) {
				const padding_array: number[] = window
					.getComputedStyle(self.current.parentElement, null)
					.getPropertyValue('padding-inline')
					.split(' ')
					.map((s: string) => parseFloat(s))
				padding_array[0] = padding_array[0] !== undefined ? padding_array[0] : 0
				padding_array[1] = padding_array[1] !== undefined ? padding_array[1] : padding_array[0]
				const parentWidth: number =
					self.current.parentElement.getBoundingClientRect().width - padding_array[0] - padding_array[1]
				const largestGrid: number = content.length * (maxWidth + gridSpacer) - gridSpacer
				setGrid({
					width: parentWidth > largestGrid ? `${largestGrid}px` : '100%',
					gridAutoRows: `${parentWidth > maxWidth ? maxHeight : (maxHeight * parentWidth) / maxWidth}px`,
					gridTemplateColumns:
						parentWidth > maxWidth
							? `repeat(${parentWidth > largestGrid ? `${content.length}` : 'auto-fill'}, ${maxWidth}px)`
							: `${parentWidth}px`,
				})
			}
		}
		// Add and remove event listeners
		if (content.length > 0) {
			window.addEventListener('resize', gridResponse)
			gridResponse()
			return () => {
				window.removeEventListener('resize', gridResponse)
			}
		} else {
			return () => {}
		}
	}, [content.length, gridSpacer, maxHeight, maxWidth])

	return (
		<div
			ref={self}
			style={{
				width: gridState.width,
				margin: '0 auto',
				display: 'grid',
				gridAutoRows: gridState.gridAutoRows,
				gridTemplateColumns: gridState.gridTemplateColumns,
				gap: `${gridSpacer}px`,
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
