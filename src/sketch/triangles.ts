// dependencies
import { Sketch, SketchProps } from 'react-p5-wrapper'

// src
import { Dimensions } from '../components/sub-components/p5'
import {
	Line,
	Point,
	compareShortestVector,
	intersectionLineLine,
	isPointInsideOfPolygon,
	rotatePoint,
} from './geometry'

class Triangle {
	spin: number
	vertices: [Point, Point, Point]

	constructor(size: number, spin: number) {
		this.vertices = [
			[
				size,
				size,
			],
			[
				size * Math.cos((4 * Math.PI) / 3) + Math.random() * 50,
				size * Math.sin((4 * Math.PI) / 3) + Math.random() * 50,
			],
			[
				size * Math.cos((2 * Math.PI) / 3) + Math.random() * 50,
				size * Math.sin((2 * Math.PI) / 3) + Math.random() * 50,
			],
		]
		this.spin = spin
	}

	rotate = (): void => {
		this.vertices = [
			rotatePoint(...this.vertices[0], this.spin),
			rotatePoint(...this.vertices[1], this.spin),
			rotatePoint(...this.vertices[2], this.spin),
		]
	}

	lines = (): [Line, Line, Line] => [
		[this.vertices[0], this.vertices[1]],
		[this.vertices[1], this.vertices[2]],
		[this.vertices[2], this.vertices[0]],
	]

	linesInsideTriangle = (t: Triangle): Line[] => {
		let lines: Line[] = []
		this.lines().forEach((line) => {
			let intersections: Point[] = []
			t.lines().forEach((tLine: Line) => {
				let intersection = intersectionLineLine(line, tLine)
				intersection && intersections.push(intersection)
			})
			const vertexInTriangle: [boolean, boolean] = [
				isPointInsideOfPolygon(line[0], t.vertices),
				isPointInsideOfPolygon(line[1], t.vertices),
			]
			if (vertexInTriangle[0] && vertexInTriangle[1]) {
				// if both vertex of inside of triangle and no intersections draw line between vertex
				lines.push(line)
			} else if (vertexInTriangle[0] && !vertexInTriangle[1] && intersections[0]) {
				// if vertex A outside, vertex B inside, find closest intersection and draw line A to intersection
				lines.push([line[0], intersections[0]])
			} else if (!vertexInTriangle[0] && vertexInTriangle[1] && intersections[0]) {
				// if vertex A inside, vertex B outside, find closest intersection and draw line B to intersection
				lines.push([line[1], intersections[0]])
			} else if (!vertexInTriangle[0] && !vertexInTriangle[1] && intersections[0] && intersections[1]) {
				// if both vertex outside of triangle and two intersections, draw line between intersections
				lines.push([intersections[0], intersections[1]])
			}
		})
		return lines
	}

	linesOutsideTriangle = (t: Triangle): Line[] => {
		let lines: Line[] = []
		this.lines().forEach((line) => {
			let intersections: Point[] = []
			t.lines().forEach((tLine: Line) => {
				let intersection = intersectionLineLine(line, tLine)
				intersection && intersections.push(intersection)
			})
			const vertexInTriangle: [boolean, boolean] = [
				isPointInsideOfPolygon(line[0], t.vertices),
				isPointInsideOfPolygon(line[1], t.vertices),
			]
			if (!vertexInTriangle[0] && !vertexInTriangle[1] && !intersections.length) {
				// if both vertex of inside of triangle and no intersections draw line between vertex
				lines.push(line)
			} else if (!vertexInTriangle[0] && vertexInTriangle[1] && intersections) {
				// if vertex A outside, vertex B inside, find closest intersection and draw line A to intersection
				lines.push([line[0], compareShortestVector(line[0], intersections)[0]])
			} else if (vertexInTriangle[0] && !vertexInTriangle[1] && intersections) {
				// if vertex A inside, vertex B outside, find closest intersection and draw line B to intersection
				lines.push([line[1], compareShortestVector(line[1], intersections)[0]])
			} else if (vertexInTriangle[0] && vertexInTriangle[1] && intersections[0] && intersections[1]) {
				// if both vertex in triangle
				lines.push([intersections[0], intersections[1]])
			} else if (!vertexInTriangle[0] && !vertexInTriangle[1] && intersections) {
				// if both vertex  of triangle and two intersections
				lines.push([line[0], compareShortestVector(line[0], intersections)[0]])
				lines.push([line[1], compareShortestVector(line[1], intersections)[0]])
			}
		})
		return lines
	}
}

const sketch: Sketch = (p5) => {
	let dim: Dimensions = {
		height: 0,
		width: 0,
	}
	const triangles: [Triangle, Triangle, Triangle] = [
		new Triangle(
			Math.random() * 50 + 50,
			(Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002)
		),
		new Triangle(
			Math.random() * 50 + 50,
			(Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002)
		),
		new Triangle(
			Math.random() * 50 + 50,
			(Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002)
		),
	]

	// create canvas
	p5.setup = (): void => {
		p5.createCanvas(dim.width, dim.height)
		p5.describe('An illusory animation of three triangles rotating.')
	}

	// update canvas props
	p5.updateWithProps = (props: SketchProps): void => {
		if (props.dimensions) {
			dim = props.dimensions
			p5.resizeCanvas(dim.width, dim.height)
		}
	}

	p5.draw = (): void => {
		// canvas styles
		p5.clear()
		p5.translate(p5.width / 2, p5.height / 2)
		p5.fill(0, 0)
		p5.stroke('black')
		p5.strokeWeight(1)
		// rotate triangles
		for (let tri of triangles) {
			tri.rotate()
		}
		// triangle 0 always shows
		for (let line of triangles[0].lines()) {
			p5.line(...line[0], ...line[1])
		}
		// // triangle 1 is hidden by triangle 0
		for (let line of triangles[1].linesOutsideTriangle(triangles[0])) {
			p5.line(...line[0], ...line[1])
		}
		// // triangle 2 inside of triangle 0, but hidden by triangle 1
		for (let line of triangles[2].linesInsideTriangle(triangles[0])) {
			p5.line(...line[0], ...line[1])
		}
		for (let line of triangles[2].linesOutsideTriangle(triangles[1])) {
			p5.line(...line[0], ...line[1])
		}
	}
}

export default sketch
