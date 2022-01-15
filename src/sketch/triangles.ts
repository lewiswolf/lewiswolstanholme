// dependencies
import { Sketch, SketchProps } from 'react-p5-wrapper'

// src
import { Dimensions } from '../components/sub-components/p5'
import {
	Line,
	Point,
	intersectionLineLine,
	isPointInsideOfPolygon,
	rotatePoint
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

	// linesInsideTriangle = (t: Triangle): Line[] => {
	// 	let lines: Line[] = []
	// 	for (let line of this.lines()) {
	// 		const intersections: Point[] = t.lines().map((tLine: Line) => intersectionLineLine(line, tLine)).filter((x) => typeof x !== null)
	// 		const vertexInTriangle: [boolean, boolean] = [
	// 			isPointInsideOfPolygon(line[0], t.vertices),
	// 			isPointInsideOfPolygon(line[1], t.vertices),
	// 		]

	// 		if (vertexInTriangle[0] && vertexInTriangle[1]) {
	// 			lines.push(line)
	// 		} else if (vertexInTriangle[0] && !vertexInTriangle[1] && intersections.length === 1) {
	// 			let a = getClosestPointToVertex(line[0], intersections)
	// 			a && lines.push([line[0], a])
	// 		} else if (!vertexInTriangle[0] && vertexInTriangle[1] && intersections.length === 1) {
	// 			let a = getClosestPointToVertex(line[1], intersections)
	// 			a && lines.push([line[1], a])
	// 		} else if (!vertexInTriangle[0] && !vertexInTriangle[1] && intersections.length === 2) { }

	// 	}
	// 	return lines
	// }

	// linesOutsideTriangle = (t: Triangle): Line[] => {
	// 	for (let line of t.lines()) {

	// 	}
	// 	return []
	// }

	findIntersections = (triangle: Triangle): any | null => {
		const intersections: any = [[], [], []]
		this.lines().forEach((lineA: Line, aIdx: number) => {
			triangle.lines().forEach((lineB: Line) => {
				let intersection: Point | null = intersectionLineLine(lineA, lineB)
				intersection && intersections[aIdx].push(intersection)
			})
		})
		return intersections
	}

	drawTriangleOnTop = (triangle: Triangle, p5: any) => {
		const intersections = this.findIntersections(triangle)

		this.lines().forEach((line, idx) => {
			let vertexInTriangle = [
				isPointInsideOfPolygon(line[0], triangle.vertices),
				isPointInsideOfPolygon(line[1], triangle.vertices),
			]
			if (!vertexInTriangle[0] && !vertexInTriangle[1] && !intersections[idx].length) {
				// if both vertex of line outside of triangle and no intersections
				p5.line(...line[0], ...line[1])
			} else if (!vertexInTriangle[0] && vertexInTriangle[1] && intersections[idx]) {
				// if vertex A outside, vertex B inside, find closest intersection and draw line A to intersection
				let a = getClosestPointToVertex(line[0], intersections[idx])
				a && p5.line(...line[0], ...a)
			} else if (vertexInTriangle[0] && !vertexInTriangle[1] && intersections[idx]) {
				// if vertex A inside, vertex B outside, find closest intersection and draw line B to intersection
				let a = getClosestPointToVertex(line[1], intersections[idx])
				a && p5.line(...line[1], ...a)
			} else if (
				vertexInTriangle[0] &&
				vertexInTriangle[1] &&
				intersections[idx].length === 2
			) {
				// if both vertex in triangle
				p5.line(...intersections[0], ...intersections[1])
			} else if (
				!vertexInTriangle[0] &&
				!vertexInTriangle[1] &&
				intersections[idx].length === 2
			) {
				// if both vertex  of triangle and two intersections

				let a = getClosestPointToVertex(line[0], intersections[idx])
				a && p5.line(...line[0], ...a)
				let b = getClosestPointToVertex(line[1], intersections[idx])
				b && p5.line(...line[1], ...b)
			}
		})
	}
	drawTriangleInside = (triangle: Triangle, p5: any) => {
		const intersections = this.findIntersections(triangle)

		this.lines().forEach((line, idx) => {
			let vertexInTriangle = [
				isPointInsideOfPolygon(line[0], triangle.vertices),
				isPointInsideOfPolygon(line[1], triangle.vertices),
			]
			if (vertexInTriangle[0] && vertexInTriangle[1]) {
				// if both vertex of inside of triangle and no intersections draw line between vertex
				p5.line(...line[0], ...line[1])
			} else if (vertexInTriangle[0] && !vertexInTriangle[1] && intersections[idx]) {
				// if vertex A inside, vertex B outside, find closest point between vertex A and intersection and draw line
				let a = getClosestPointToVertex(line[0], intersections[idx])
				a && p5.line(...line[0], ...a)
			} else if (!vertexInTriangle[0] && vertexInTriangle[1] && intersections[idx]) {
				// if vertex A outside, vertex B inside, find closest point between vertex B and intersection and draw line
				let a = getClosestPointToVertex(line[1], intersections[idx])
				a && p5.line(...line[1], ...a)
			} else if (
				!vertexInTriangle[0] &&
				!vertexInTriangle[1] &&
				intersections[idx].length === 2
			) {
				// if both vertex outside of triangle and two intersections, draw line between intersections
				intersections[0][0] &&
					intersections[0][1] &&
					p5.line(...intersections[0][0], ...intersections[0][1])
				intersections[1][0] &&
					intersections[1][1] &&
					p5.line(...intersections[1][0], ...intersections[1][1])
			}
		})
	}
}

const getClosestPointToVertex = (vertex: Point, arrayOfPoints: Point[]): Point | undefined => {
	let distances: number[] = []
	arrayOfPoints.forEach((pointB: Point) => {
		distances.push(
			Math.sqrt(Math.pow(vertex[0] - pointB[0], 2) + Math.pow(vertex[1] - pointB[1], 2))
		)
	})
	return arrayOfPoints[distances.indexOf(Math.min.apply(Math, distances))]
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
		// for (let line of triangles[1].linesOutsideTriangle(triangles[0])) {
		// 	p5.line(...line[0], ...line[1])
		// }
		// // triangle 2 inside of triangle 0, but hidden by triangle 1
		// for (let line of triangles[2].linesInsideTriangle(triangles[0])) {
		// 	p5.line(...line[0], ...line[1])
		// }
		// for (let line of triangles[2].linesOutsideTriangle(triangles[1])) {
		// 	p5.line(...line[0], ...line[1])
		// }
		// triangle 1 is hidden by triangle 0
		triangles[1].drawTriangleOnTop(triangles[0], p5)
		// triangle 2 inside of triangle 0, but hidden by triangle 1
		triangles[2].drawTriangleOnTop(triangles[1], p5)
		triangles[2].drawTriangleInside(triangles[0], p5)
	}
}

export default sketch
