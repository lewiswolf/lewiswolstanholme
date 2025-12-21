// src
import type { Line, Point, Polygon } from './types.d.ts'

export function compareShortestVector(p: Readonly<Point>, P: Readonly<Polygon>): [Point, number] {
	/*
	Compare a point with an array points by vector length.
	Returns the closest point and its index within P - otherwise returns the point itself if P = [].
	*/

	let vec_min = 0
	let v_closest = p
	let idx = 0
	P.forEach((v: Point, i: number) => {
		const vec = Math.hypot(p.x - v.x, p.y - v.y)
		if (vec < vec_min || i === 0) {
			vec_min = vec
			v_closest = v
			idx = i
		}
	})
	return [v_closest, idx]
}

export function isPointInsideConvexPolygon(p: Readonly<Point>, P: Readonly<Polygon>): boolean {
	/*
	Determines whether or not a cartesian pair is within a polygon, including boundaries.
	Solution 3 => http://paulbourke.net/geometry/polygonmesh/
	*/

	function crossProductZ(a: Point, b: Point, q: Point) {
		return (b.x - a.x) * (q.y - a.y) - (q.x - a.x) * (b.y - a.y)
	}
	// determine if the polygon is ordered clockwise
	const clockwise = crossProductZ(P[0] as Point, P[1] as Point, P[2] as Point) > 0 ? -1 : 1
	// go through each of the vertices, and test with p
	const N: number = P.length
	for (const v of P) {
		if (p.x === v.x && p.y === v.y) {
			return true
		}
	}
	// determine if the point is always on the right side of the line
	for (let n = 0; n < N; n += 1) {
		if (crossProductZ(P[n] as Point, P[(n + 1) % N] as Point, p) * clockwise > 0) {
			return false
		}
	}
	return true
}

export function lineIntersection(a: Readonly<Line>, b: Readonly<Line>): Point | null {
	/*
	Finds the point at which two lines intersect. Returns null if they do not intersect.
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
	return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1
		? { x: a[0].x + uA * (a[1].x - a[0].x), y: a[0].y + uA * (a[1].y - a[0].y) }
		: null
}

export function rotatePoint(p: Readonly<Point>, theta: Readonly<number>): Point {
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
