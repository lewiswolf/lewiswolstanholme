// dependencies
import { Line, Point } from './types'
import {
	compareShortestVector,
	intersectionLineLine,
	isPointInsideOfPolygon,
	rotatePoint,
} from './utils'

export class Triangle {
	spin: number
	vertices: [Point, Point, Point]

	constructor(size: number, spin: number) {
		this.vertices = [
			{ x: size, y: size },
			{
				x: size * Math.cos((4 * Math.PI) / 3) + Math.random() * 50,
				y: size * Math.sin((4 * Math.PI) / 3) + Math.random() * 50,
			},
			{
				x: size * Math.cos((2 * Math.PI) / 3) + Math.random() * 50,
				y: size * Math.sin((2 * Math.PI) / 3) + Math.random() * 50,
			},
		]
		this.spin = spin
	}

	rotate = (): void => {
		this.vertices = [
			rotatePoint(this.vertices[0], this.spin),
			rotatePoint(this.vertices[1], this.spin),
			rotatePoint(this.vertices[2], this.spin),
		]
	}

	lines = (): [Line, Line, Line] => [
		[this.vertices[0], this.vertices[1]],
		[this.vertices[1], this.vertices[2]],
		[this.vertices[2], this.vertices[0]],
	]

	linesInsideTriangle = (t_prime: Triangle): Line[] => {
		/*
		Returns all of the lines/line segments that are inside of t_prime.
		*/

		let out: Line[] = []
		for (let line of this.lines()) {
			let intersections: Point[] = []
			for (let line_prime of t_prime.lines()) {
				let intersection = intersectionLineLine(line, line_prime)
				intersection && intersections.push(intersection)
			}
			const v_inside: [boolean, boolean] = [
				isPointInsideOfPolygon(line[0], t_prime.vertices),
				isPointInsideOfPolygon(line[1], t_prime.vertices),
			]
			if (v_inside[0] && v_inside[1]) {
				// if both vertices are inside of t_prime with no intersections, draw a line
				// between each vertex
				out.push(line)
			} else if (v_inside[0] && !v_inside[1] && intersections[0]) {
				// if vertex A is inside and vertex B outside, find closest intersection and draw
				// from vertex A to intersection
				out.push([line[0], intersections[0]])
			} else if (!v_inside[0] && v_inside[1] && intersections[0]) {
				// if vertex A is outside and vertex B inside, find closest intersection and draw
				// from vertex B to intersection
				out.push([line[1], intersections[0]])
			} else if (!v_inside[0] && !v_inside[1] && intersections[0] && intersections[1]) {
				// if both vertices are outside of the polygon with two intersections, draw a line
				// between both intersections
				out.push([intersections[0], intersections[1]])
			}
		}
		return out
	}

	linesOutsideTriangle = (t_prime: Triangle): Line[] => {
		/*
		Returns all of the lines/line segments that are outside of t_prime.
		*/

		let out: Line[] = []
		for (let line of this.lines()) {
			let intersections: Point[] = []
			for (let line_prime of t_prime.lines()) {
				let intersection = intersectionLineLine(line, line_prime)
				intersection && intersections.push(intersection)
			}
			const v_inside: [boolean, boolean] = [
				isPointInsideOfPolygon(line[0], t_prime.vertices),
				isPointInsideOfPolygon(line[1], t_prime.vertices),
			]
			if (!v_inside[0] && !v_inside[1] && !intersections.length) {
				// if both vertices are outside of t_prime with no intersections, draw a line
				// between each vertex
				out.push(line)
			} else if (!v_inside[0] && v_inside[1] && intersections) {
				// if vertex A is outside and vertex B inside, find closest intersection and draw
				// from vertex B to intersection
				out.push([line[0], compareShortestVector(line[0], intersections)[0]])
			} else if (v_inside[0] && !v_inside[1] && intersections) {
				// if vertex A is inside and vertex B outside, find closest intersection and draw
				// from vertex A to intersection
				out.push([line[1], compareShortestVector(line[1], intersections)[0]])
			} else if (v_inside[0] && v_inside[1] && intersections[0] && intersections[1]) {
				// if both vertices are inside the polygon, draw between intersections
				out.push([intersections[0], intersections[1]])
			} else if (!v_inside[0] && !v_inside[1] && intersections) {
				// if both vertices are outside of the polygon, draw between intersections
				out.push([line[0], compareShortestVector(line[0], intersections)[0]])
				out.push([line[1], compareShortestVector(line[1], intersections)[0]])
			}
		}
		return out
	}
}
