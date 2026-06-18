// biome-ignore-all lint/nursery/noInlineStyles : this component has been designed to dynamically control a responive css grid
// biome-ignore-all lint/suspicious/noExplicitAny : any is used to maintain user configurability
// biome-ignore-all lint/nursery/useExplicitType : any is used to maintain user configurability
/* eslint-disable @typescript-eslint/no-explicit-any */

// dependencies
import { type JSX, useEffect, useRef, useState } from 'react'

type GridProperties = {
	width: string
	gridAutoRows: string
	gridTemplateColumns: string
}

export function GridFromJSON({
	cell,
	gridSpacer = 20,
	json,
	maxWidth = 280,
	maxHeight = maxWidth,
}: {
	cell: (obj: any, i: number) => JSX.Element
	gridSpacer?: number
	json: readonly Record<string, any>[] | string[] | string
	maxHeight?: number
	maxWidth?: number
}): JSX.Element {
	const self = useRef<HTMLDivElement>(null)
	const [content, setContent] = useState<readonly Record<string, any>[] | string[]>([])
	const [gridProps, setGridProps] = useState<GridProperties>({
		gridAutoRows: '',
		gridTemplateColumns: '',
		width: '',
	})

	useEffect((): void => {
		/*
		This effect is used to dyanmically load the content either as a raw json file
		from the public folder, or update the content using the prop itself.
		*/
		const loadJSON = async (): Promise<void> => {
			if (typeof json === 'string') {
				try {
					const res = await fetch(json)
					const data: unknown = await res.json()
					setContent(data as Record<string, any>[])
				} catch {
					// handle error
				}
			} else {
				setContent(json)
			}
		}
		void loadJSON()
	}, [json])

	useEffect((): (() => void) => {
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
					(padding_array[0] ?? 0) -
					(padding_array[1] ?? 0)
				const largestGrid: number = content.length * (maxWidth + gridSpacer) - gridSpacer
				setGridProps({
					gridAutoRows: `${(parentWidth > maxWidth ? maxHeight : (maxHeight * parentWidth) / maxWidth).toString()}px`,
					gridTemplateColumns:
						parentWidth > maxWidth
							? `repeat(${
									parentWidth > largestGrid ? content.length.toString() : 'auto-fill'
								}, ${maxWidth.toString()}px)`
							: `${parentWidth.toString()}px`,
					width: parentWidth > largestGrid ? `${largestGrid.toString()}px` : '100%',
				})
			}
		}
		// Add and remove event listeners
		window.addEventListener('resize', gridResponse)
		gridResponse()
		return (): void => {
			window.removeEventListener('resize', gridResponse)
		}
	}, [content.length, gridSpacer, maxHeight, maxWidth])

	return (
		<div
			ref={self}
			style={{
				...{
					alignItems: 'center',
					display: 'grid',
					gap: `${gridSpacer.toString()}px`,
					justifyContent: 'space-evenly',
					justifyItems: 'center',
					margin: '0 auto',
				},
				...gridProps,
			}}
		>
			{content.map((obj: any, i: number): JSX.Element => cell(obj, i))}
		</div>
	)
}
