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
		return collidePointPoly(point, this.vertices)
	}
}

const collidePointPoly = (p: Point, vertices: [Point, Point, Point]) => {
	var collision = false

	// go through each of the vertices, plus the next vertex in the list
	var next = 0
	for (var current = 0; current < vertices.length; current++) {
		// get next vertex in list if we've hit the end, wrap around to 0
		next = current + 1
		if (next === vertices.length) next = 0

		// get the PVectors at our current position this makes our if statement a little cleaner
		var vc = vertices[current] // c for "current"
		var vn = vertices[next] // n for "next"

		// compare position, flip 'collision' variable back and forth
		if (
			vc &&
			vn &&
			((vc[1] >= p[1] && vn[1] < p[1]) || (vc[1] < p[1] && vn[1] >= p[1])) &&
			p[0] < ((vn[0] - vc[0]) * (p[1] - vc[1])) / (vn[1] - vc[1]) + vc[0]
		) {
			collision = !collision
		}
	}
	return collision
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

// const isInside = (point: Point, triangle: Triangle): boolean => {
// 	const A1: number = calculateAreaOfTriangle(point, triangle.vertices[0], triangle.vertices[1])
// 	const A2: number = calculateAreaOfTriangle(point, triangle.vertices[1], triangle.vertices[2])
// 	const A3: number = calculateAreaOfTriangle(point, triangle.vertices[2], triangle.vertices[0])
// 	return triangle.area - A1 + A2 + A3 < 0.01
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
				// case 2 points on same line

				if (pointsOnLine.length == 2) {
					p5.strokeWeight(2)
					p5.stroke('blue')
					p5.line(...pointsOnLine[0], ...pointsOnLine[1])
					p5.strokeWeight(5)
					p5.stroke('red')
					p5.point(...pointsOnLine[0])
					p5.point(...pointsOnLine[1])
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

		// triangle 1
		// let triangle1_points: Point[] = []
		// triangles[1].lines.forEach((line: Line) => {
		// 	// console.log(!isInside(line[0], triangles[0]))
		// 	if (!isInside(line[0], triangles[0])) {
		// 		triangle1_points.push(line[0])
		// 	}
		// 	for (let line_prime of triangles[0].lines) {
		// 		let intersection: Point | null = collideLineLine(line, line_prime)
		// 		if (intersection) {
		// 			triangle1_points.push(intersection)
		// 			p5.strokeWeight(5)
		// 			p5.stroke('red')
		// 			p5.point(...intersection)
		// 		}
		// 	}
		// })
		// if (!isInside(line[1], triangles[0])) {
		// 	triangle1_points.push(line[1])
		// }
		// })

		// for (let i = 0; i < triangle1_points.length; i++) {
		// 	p5.strokeWeight(5)
		// 	switch (i) {
		// 		case 0:
		// 			p5.stroke('green')
		// 			p5.point(...triangle1_points[0]!)
		// 			break
		// 		case 1:
		// 			p5.stroke('red')
		// 			p5.point(...triangle1_points[1]!)
		// 			break
		// 		default:
		// 			p5.stroke('blue')
		// 			p5.point(...triangle1_points[i]!)
		// 			break
		// 	}
		// }

		// for (let i = 0; i < triangle1_points.length / 2; i++) {
		// 	p5.strokeWeight(1)
		// 	p5.stroke('black')
		// 	if (triangle1_points[i * 2] && triangle1_points[i * 2 + 1]) {
		// 		p5.line(...triangle1_points[i * 2]!, ...triangle1_points[i * 2 + 1]!)
		// 	}
		// }

		// for (let tri of triangles) {
		// 	tri.rotate()
		// 	tri.lines.forEach(line => {
		// 		p5.line(...line.start, ...line.end)
		// 	});
		// }

		// triangles[1]?.lines.forEach(line => {
		// 	p5.line(...line.start, ...line.end)
		// });

		// if (triangles[1] && triangles[0]) {
		// 	let intersections = triangles[0]?.findIntersections(triangles[1]) || null
		// 	let line_0: [number, number][] = []
		// 	let line_1: [number, number][] = []

		// 	for (let obj of intersections) {
		// 		if (obj.id === 0) {
		// 			line_0.push(obj.point)
		// 		} if (obj.id === 1) {
		// 			line_1.push(obj.point)
		// 		}
		// 	}
		// 	if (line_0.length === 2) {
		// 		p5.strokeWeight(1)
		// 		p5.stroke('red')
		// 		if (line_0[0] && line_0[1]) {
		// 			p5.line(line_0[0][0], line_0[0][1], line_0[1][0], line_0[1][1])
		// 		} else if (line_0[0]) {
		// 			p5.line(line_0[0][0], line_0[0][1], triangles[1].lines[0].end[0], triangles[1].lines[1].end[1])
		// 		}

		// 	}
		// 	if (line_1.length === 2) {
		// 		p5.strokeWeight(1)
		// 		p5.stroke('red')
		// 		if (line_1[0] && line_1[1]) {
		// 			p5.line(line_1[0][0], line_1[0][1], line_1[1][0], line_1[1][1])
		// 		} else if (line_1[0]) {
		// 			p5.line(line_1[0][0], line_1[0][1], triangles[1].lines[1].end[0], triangles[1].lines[1].end[1])
		// 		}

		// 	}

		// 	p5.strokeWeight(5)
		// 	p5.stroke('red')
		// 	intersections.forEach((intersection: { id: number, point: [number, number] }) => {
		// 		p5.point(...intersection.point)
		// 	})
	}
}

export default sketch
