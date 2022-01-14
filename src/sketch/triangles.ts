// dependencies
import { SketchProps } from 'react-p5-wrapper'

// src
import { Dimensions } from '../components/sub-components/p5'

type Point = [number, number]
type Line = [[number, number], [number, number]]

class Triangle {
	area: number
	lines: [Line, Line, Line]
	vertices: [Point, Point, Point]

	constructor(size: number) {
		const A: Point = [size, size]
		const B: Point = [
			size * Math.cos((4 * Math.PI) / 3) + Math.random() * 50,
			size * Math.sin((4 * Math.PI) / 3) + Math.random() * 50,
		]
		const C: Point = [
			size * Math.cos((2 * Math.PI) / 3) + Math.random() * 50,
			size * Math.sin((2 * Math.PI) / 3) + Math.random() * 50,
		]
		this.vertices = [A, B, C]
		this.lines = [
			[A, B],
			[B, C],
			[C, A],
		]
		this.area = calculateAreaOfTriangle(...this.vertices)
	}

	rotate = (spin: number) => {
		this.vertices[0] = [
			this.vertices[0][0] * Math.cos(spin) - this.vertices[0][1] * Math.sin(spin),
			this.vertices[0][0] * Math.sin(spin) + this.vertices[0][1] * Math.cos(spin),
		]
		this.vertices[1] = [
			this.vertices[1][0] * Math.cos(spin) - this.vertices[1][1] * Math.sin(spin),
			this.vertices[1][0] * Math.sin(spin) + this.vertices[1][1] * Math.cos(spin),
		]
		this.vertices[2] = [
			this.vertices[2][0] * Math.cos(spin) - this.vertices[2][1] * Math.sin(spin),
			this.vertices[2][0] * Math.sin(spin) + this.vertices[2][1] * Math.cos(spin),
		]
		this.lines = [
			[this.vertices[0], this.vertices[1]],
			[this.vertices[1], this.vertices[2]],
			[this.vertices[2], this.vertices[0]],
		]
	}
	findIntersections = (triangle: Triangle): any | null => {
		const intersections: any = [[], [], []]
		this.lines.forEach((lineA: Line, aIdx: number) => {
			triangle.lines.forEach((lineB: Line) => {
				let intersection: Point | null = collideLineLine(lineA, lineB)
				intersection && intersections[aIdx].push(intersection)
			})
		})
		return intersections
	}
	isPointInsideOfTriangle = (point: Point): boolean => {
		var collision = false

		// go through each of the vertices, plus the next vertex in the list
		var next = 0
		for (var current = 0; current < this.vertices.length; current++) {
			// get next vertex in list if we've hit the end, wrap around to 0
			next = current + 1
			if (next === this.vertices.length) next = 0

			// get the PVectors at our current position this makes our if statement a little cleaner
			var vc = this.vertices[current] // c for "current"
			var vn = this.vertices[next] // n for "next"

			// compare position, flip 'collision' variable back and forth
			if (
				vc &&
				vn &&
				((vc[1] >= point[1] && vn[1] < point[1]) ||
					(vc[1] < point[1] && vn[1] >= point[1])) &&
				point[0] < ((vn[0] - vc[0]) * (point[1] - vc[1])) / (vn[1] - vc[1]) + vc[0]
			) {
				collision = !collision
			}
		}
		return collision
	}
}

const calculateAreaOfTriangle = (v0: Point, v1: Point, v2: Point): number =>
	Math.abs((v0[0] * (v1[1] - v2[1]) + v1[0] * (v2[1] - v0[1]) + v2[0] * (v0[1] - v1[1])) / 2.0)

const collideLineLine = (v: Line, w: Line): [number, number] | null => {
	// calculate the distance to intersection point
	const uA: number =
		((w[1][0] - w[0][0]) * (v[0][1] - w[0][1]) - (w[1][1] - w[0][1]) * (v[0][0] - w[0][0])) /
		((w[1][1] - w[0][1]) * (v[1][0] - v[0][0]) - (w[1][0] - w[0][0]) * (v[1][1] - v[0][1]))
	const uB: number =
		((v[1][0] - v[0][0]) * (v[0][1] - w[0][1]) - (v[1][1] - v[0][1]) * (v[0][0] - w[0][0])) /
		((w[1][1] - w[0][1]) * (v[1][0] - v[0][0]) - (w[1][0] - w[0][0]) * (v[1][1] - v[0][1]))

	// if uA and uB are between 0-1, lines are colliding
	if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
		return [v[0][0] + uA * (v[1][0] - v[0][0]), v[0][1] + uA * (v[1][1] - v[0][1])]
	} else {
		return null
	}
}

// const getIdxOfClosestPointToVertex = (vertex: Point, arrayOfPoints: Point[]): number => {
// 	let distances: number[] = []

// 	arrayOfPoints.forEach((pointB: Point) => {
// 		distances.push(
// 			Math.sqrt(Math.pow(vertex[0] - pointB[0], 2) + Math.pow(vertex[1] - pointB[1], 2))
// 		)
// 	})

// 	return distances.indexOf(Math.max.apply(Math, distances))
// }

const sketch = (p5: any) => {
	let triangles: [Triangle, Triangle]
	let spin: [number, number] = [
		(Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002),
		(Math.round(Math.random()) * 2 - 1) * (Math.random() * 0.01 + 0.002),
	]
	let dim: Dimensions = {
		height: 0,
		width: 0,
	}

	p5.setup = (): void => {
		p5.createCanvas(dim.width, dim.height)
		triangles = [new Triangle(Math.random() * 50 + 50), new Triangle(Math.random() * 50 + 50)]
	}

	p5.updateWithProps = (props: SketchProps): void => {
		if (props.dimensions) {
			dim = props.dimensions
			p5.resizeCanvas(dim.width, dim.height)
		}
	}

	p5.draw = (): void => {
		p5.clear()
		p5.translate(dim.width / 2, dim.height / 2)
		p5.fill(0, 0)
		p5.strokeWeight(1)

		triangles[0].rotate(spin[0])
		triangles[1].rotate(spin[1])

		// triangle 0
		triangles[0].lines.forEach((line) => {
			p5.stroke('red')

			p5.line(...line[0], ...line[1])
		})
		triangles[1].lines.forEach((line) => {
			p5.stroke('black')

			p5.line(...line[0], ...line[1])
		})

		const intersections = triangles[0].findIntersections(triangles[1])
		if (intersections) {
			p5.strokeWeight(5)
			p5.stroke('red')
			intersections.forEach((pointsOnLine: any, idx: number) => {
				// if (pointsOnLine.length == 0) {
				// 	p5.strokeWeight(2)
				// 	p5.stroke('green')
				// 	triangles[0].vertices.forEach((vertex) => {
				// 		if (
				// 			!triangles[0].isPointInsideOfTriangle(vertex) &&
				// 			triangles[0].lines[idx]?.includes(vertex)
				// 		) {
				// 			let line = triangles[0].lines[idx]
				// 			line && p5.line(...line[0], ...line[1])
				// 		}
				// 	})
				// }
				console.log(triangles[0].lines[idx])

				if (pointsOnLine.length == 0) {
					let [a, b] = triangles[0].lines[idx] || [
						[0, 0],
						[0, 0],
					]
					if (
						triangles[1].isPointInsideOfTriangle(a) &&
						triangles[1].isPointInsideOfTriangle(b)
					) {
						p5.strokeWeight(2)
						p5.stroke('blue')
						p5.line(...a, ...b)
					}
				}

				// case 2 points on same line

				if (pointsOnLine.length == 2) {
					p5.strokeWeight(2)
					p5.stroke('blue')
					p5.line(...pointsOnLine[0], ...pointsOnLine[1])
					p5.strokeWeight(5)
					p5.stroke('red')
					p5.point(...pointsOnLine[0])
					p5.point(...pointsOnLine[1])
					// draw closest point
					// triangles[0].vertices.forEach((vertex) => {
					// 	if (triangles[0].lines[idx]?.includes(vertex)) {
					// 		p5.strokeWeight(2)
					// 		p5.stroke('green')
					// 		p5.line(
					// 			...vertex,
					// 			...pointsOnLine[getIdxOfClosestPointToVertex(vertex, pointsOnLine)]
					// 		)
					// 	}
					// })
				}
				// case vertex inside triangle0
				if (pointsOnLine.length == 1) {
					triangles[0].vertices.forEach((vertex) => {
						if (
							triangles[0].lines[idx]?.includes(vertex) &&
							triangles[1].isPointInsideOfTriangle(vertex)
						) {
							p5.strokeWeight(5)
							p5.stroke('red')
							p5.point(...pointsOnLine[0])
							p5.strokeWeight(2)
							p5.stroke('blue')
							p5.line(...pointsOnLine[0], ...vertex)
						}
					})
				}
			})
		}
	}
}

export default sketch
