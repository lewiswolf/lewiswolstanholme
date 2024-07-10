// dependencies
import { type FC, type JSX, useEffect, useRef, useState } from 'react'

type GridProperties = {
	width: string
	gridAutoRows: string
	gridTemplateColumns: string
}

export const GridFromJSON: FC<{
	cell: (obj: any, i: number) => JSX.Element
	gridSpacer?: number
	json: Readonly<{ [key: string]: any }[]> | string[] | string
	maxHeight?: number
	maxWidth?: number
}> = ({ cell, gridSpacer = 20, json, maxWidth = 280, maxHeight = maxWidth }) => {
	const self = useRef<HTMLDivElement>(null)
	const [content, setContent] = useState<Readonly<{ [key: string]: any }[]> | string[]>([])
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
					.map((s: string) => Number.parseFloat(s))
				const parentWidth: number =
					self.current.parentElement.getBoundingClientRect().width -
					(padding_array[0] || 0) -
					(padding_array[1] || 0)
				const largestGrid: number = content.length * (maxWidth + gridSpacer) - gridSpacer
				setGrid({
					width: parentWidth > largestGrid ? `${largestGrid.toString()}px` : '100%',
					gridAutoRows: `${(parentWidth > maxWidth ? maxHeight : (maxHeight * parentWidth) / maxWidth).toString()}px`,
					gridTemplateColumns:
						parentWidth > maxWidth
							? `repeat(${
									parentWidth > largestGrid ? content.length.toString() : 'auto-fill'
								}, ${maxWidth.toString()}px)`
							: `${parentWidth.toString()}px`,
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
		}
		return
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
				gap: `${gridSpacer.toString()}px`,
				justifyContent: 'space-evenly',
				justifyItems: 'center',
				alignItems: 'center',
			}}
		>
			{content.map((obj: any, i: number): JSX.Element => cell(obj, i))}
		</div>
	)
}
