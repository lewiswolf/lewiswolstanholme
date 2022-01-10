// dependencies
import { Sketch, SketchProps } from 'react-p5-wrapper'

// src
import { Dimensions } from '../components/sub-components/p5'

// class Triangle {
// 	/*

// 	*/

// 	vertices: [number, number][]
// 	// area: number
// 	offset: [number, number]
// 	spin: number
// 	lines = []

// 	constructor(size: number, offset: number, spin: number) {
// 		this.vertices = [
// 			[
// 				size + offset,
// 				size + offset,
// 			],
// 			[
// 				size * (Math.cos((4 * Math.PI) / 3)) + (Math.random() * 50) + offset,
// 				size * (Math.sin((4 * Math.PI) / 3)) + (Math.random() * 50) + offset
// 			],
// 			[
// 				size * (Math.cos((2 * Math.PI) / 3)) + (Math.random() * 50) + offset,
// 				size * (Math.sin((2 * Math.PI) / 3)) + (Math.random() * 50) + offset
// 			]
// 		]
// 		// this.area = this.calculateArea(this.vertices[0], this.vertices[1], this.vertices[2])
// 		this.offset = [offset, offset]
// 		this.spin = spin
// 		this.lines = []
// 	}

// 	calculateArea = (v_0: [number, number], v_1: [number, number], v_2: [number, number]): number => {
// 		return Math.abs(((v_0[0] * (v_1[1] - v_2[1])) + (v_1[0] * (v_2[1] - v_0[1])) + (v_0[0] * (v_0[1] - v_1[1]))) / 2);
// 	}

// 	rotate = (): void => {
// 		this.vertices = this.vertices.map((v: [number, number]): [number, number] => {
// 			return [
// 				(v[0] * Math.cos(this.spin)) - (v[1] * Math.sin(this.spin)),
// 				(v[0] * Math.sin(this.spin)) + (v[1] * Math.cos(this.spin))
// 			]
// 		})
// 	}
// }

const sketch: Sketch = (p5) => {
	// let triangles: Triangle[] = []
	let dim: Dimensions = {
		height: 0,
		width: 0,
	}

	p5.setup = (): void => {
		p5.createCanvas(dim.width, dim.height)
		// for (let i = 0; i < 2; i++) {
		// 	triangles[i] = new Triangle(
		// 		Math.random() * 50 + 50,
		// 		i === 0 ? 0 : (Math.random() * 60) - 30,
		// 		((Math.round(Math.random()) * 2) - 1) * ((Math.random() * 0.01) + 0.002)
		// 	)
		// }
	}

	p5.updateWithProps = (props: SketchProps): void => {
		if (props.dimensions) {
			dim = props.dimensions
			p5.resizeCanvas(dim.width, dim.height)
		}
	}

	p5.draw = (): void => {
		p5.clear()
		// p5.translate(dim.width / 2, dim.height / 2)
		p5.background('red')
		// for (let tri of triangles) {
		// 	tri.rotate()
		// 	p5.fill(0, 0);
		// 	p5.strokeWeight(1)
		// 	p5.translate(...tri.offset)
		// this.lines.forEach((line) => {
		// 	p5.line(...line)
	}
}

export default sketch