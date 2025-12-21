// dependencies
import type { P5CanvasInstance, SketchProps } from '@p5-wrapper/react'

// src
import type { Dimensions } from '../modules/p5.tsx'
import { Triangle } from './triangle.ts'

export default function sketch(p5: P5CanvasInstance<SketchProps & { dimensions: Dimensions }>) {
	let dim: Dimensions = {
		height: 0,
		width: 0,
	}
	const triangles: [Triangle, Triangle, Triangle] = [
		new Triangle(Math.random() * 50 + 50, (Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002)),
		new Triangle(Math.random() * 50 + 50, (Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002)),
		new Triangle(Math.random() * 50 + 50, (Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002)),
	]

	// create canvas
	p5.setup = (): void => {
		p5.createCanvas(dim.width, dim.height)
		p5.describe('An illusory animation of three triangles rotating.', p5.FALLBACK)
	}

	// update canvas props
	p5.updateWithProps = (props: SketchProps & { dimensions: Dimensions }): void => {
		dim = props.dimensions
		p5.resizeCanvas(dim.width, dim.height)
	}

	p5.draw = (): void => {
		// canvas styles
		p5.clear(1, 1, 1, 1)
		p5.translate(p5.width / 2, p5.height / 2)
		p5.fill(0, 0)
		p5.stroke('black')
		p5.strokeWeight(1)
		// triangle 0 always shows
		for (const line of triangles[0].lines()) {
			p5.line(line[0].x, line[0].y, line[1].x, line[1].y)
		}
		// triangle 1 is hidden by triangle 0
		for (const line of triangles[1].linesOutsideTriangle(triangles[0])) {
			p5.line(line[0].x, line[0].y, line[1].x, line[1].y)
		}
		// triangle 2 inside of triangle 0, but hidden by triangle 1
		for (const line of triangles[2].linesInsideTriangle(triangles[0])) {
			p5.line(line[0].x, line[0].y, line[1].x, line[1].y)
		}
		for (const line of triangles[2].linesOutsideTriangle(triangles[1])) {
			p5.line(line[0].x, line[0].y, line[1].x, line[1].y)
		}
		// rotate triangles
		for (const tri of triangles) {
			tri.rotate()
		}
	}
}
