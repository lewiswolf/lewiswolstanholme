// src
import { Line, Point } from './types'

export function compareShortestVector(p: Point, V: Point[]): [Point, number] {
	/*
	Compare a point with an array points by vector length and return the
	closest point. Return the point itself if V = [].
	*/

	let vec_min: number = 0
	let v_closest: Point = p
	let idx: number = 0
	V.forEach((v: Point, i: number) => {
		const vec = Math.sqrt(Math.pow(p.x - v.x, 2) + Math.pow(p.y - v.y, 2))
		if (vec < vec_min || i === 0) {
			vec_min = vec
			v_closest = v
			idx = i
		}
	})
	return [v_closest, idx]
}

export function intersectionLineLine(a: Line, b: Line): Point | null {
	/*
	Finds the point at which two lines intersect. Returns null if they
	do not intersect.
	collisionLineLine() => https://github.com/bmoren/p5.collide2D
	*/

	// calculate the distance to intersection point
	const uA: number =
		((b[1].x - b[0].x) * (a[0].y - b[0].y) - (b[1].y - b[0].y) * (a[0].x - b[0].x)) /
		((b[1].y - b[0].y) * (a[1].x - a[0].x) - (b[1].x - b[0].x) * (a[1].y - a[0].y))
	const uB: number =
		((a[1].x - a[0].x) * (a[0].y - b[0].y) - (a[1].y - a[0].y) * (a[0].x - b[0].x)) /
		((b[1].y - b[0].y) * (a[1].x - a[0].x) - (b[1].x - b[0].x) * (a[1].y - a[0].y))
	// if uA and uB are betbeen 0-1, lines are colliding
	if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
		return { x: a[0].x + uA * (a[1].x - a[0].x), y: a[0].y + uA * (a[1].y - a[0].y) }
	} else {
		return null
	}
}

export function isPointInsideOfPolygon(p: Point, V: Point[]): boolean {
	/*
	Determines whether or not a cartesion pair is within a polygon. collidePointPoly()
	 => https://github.com/bmoren/p5.collide2D
	*/

	let collision = false
	// go through each of the vertices, plus the next vertex in the list
	V.forEach((v: Point, i: number) => {
		const w = V[(i + 1) % V.length]!
		// compare position, flip 'collision' variable back and forth
		if (
			((v.y >= p.y && w.y < p.y) || (v.y < p.y && w.y >= p.y)) &&
			p.x < ((w.x - v.x) * (p.y - v.y)) / (w.y - v.y) + v.x
		) {
			collision = !collision
		}
	})
	return collision
}

export function rotatePoint(p: Point, theta: number): Point {
	/*
	Rotate a cartesian pair around the origin by the angle theta.
	*/

	const cos_theta: number = Math.cos(theta)
	const sin_theta: number = Math.sin(theta)
	return {
		x: p.x * cos_theta - p.y * sin_theta,
		y: p.x * sin_theta + p.y * cos_theta,
	}
}
