export type Point = [number, number]
export type Line = [[number, number], [number, number]]

/*
Compare a point with an array of points by vector length and return the
closest point. Return the point itself if a = [].
*/
export const compareShortestVector = (p: Point, a: Point[]): [Point, number] => {
	let vec_min: number = 0
	let a_closest: Point = p
	let idx: number = 0
	a.forEach((a_p: Point, i: number) => {
		const vec = Math.sqrt(Math.pow(p[0] - a_p[0], 2) + Math.pow(p[1] - a_p[1], 2))
		if (vec < vec_min || i === 0) {
			vec_min = vec
			a_closest = a_p
			idx = i
		}
	})
	return [a_closest, idx]
}

/*
Finds the point at which two lines intersect. Returns null if they
do not intersect.
collisionLineLine() => https://github.com/bmoren/p5.collide2D
*/
export const intersectionLineLine = (a: Line, b: Line): Point | null => {
	// calculate the distance to intersection point
	const uA: number =
		((b[1][0] - b[0][0]) * (a[0][1] - b[0][1]) - (b[1][1] - b[0][1]) * (a[0][0] - b[0][0])) /
		((b[1][1] - b[0][1]) * (a[1][0] - a[0][0]) - (b[1][0] - b[0][0]) * (a[1][1] - a[0][1]))
	const uB: number =
		((a[1][0] - a[0][0]) * (a[0][1] - b[0][1]) - (a[1][1] - a[0][1]) * (a[0][0] - b[0][0])) /
		((b[1][1] - b[0][1]) * (a[1][0] - a[0][0]) - (b[1][0] - b[0][0]) * (a[1][1] - a[0][1]))
	// if uA and uB are betbeen 0-1, lines are colliding
	if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
		return [a[0][0] + uA * (a[1][0] - a[0][0]), a[0][1] + uA * (a[1][1] - a[0][1])]
	} else {
		return null
	}
}

/*
Determines whether or not a cartesion pair is within a polygon.
collidePointPoly() => https://github.com/bmoren/p5.collide2D
*/
export const isPointInsideOfPolygon = (point: Point, vertices: Point[]): boolean => {
	let collision = false
	// go through each of the vertices, plus the next vertex in the list
	vertices.forEach((c: Point, i: number) => {
		const n = vertices[(i + 1) % vertices.length]!
		// compare position, flip 'collision' variable back and forth
		if (
			((c[1] >= point[1] && n[1] < point[1]) || (c[1] < point[1] && n[1] >= point[1])) &&
			point[0] < ((n[0] - c[0]) * (point[1] - c[1])) / (n[1] - c[1]) + c[0]
		) {
			collision = !collision
		}
	})
	return collision
}

/*
Rotate a cartesian pair around the origin by the angle theta.
*/
export const rotatePoint = (x: number, y: number, theta: number): Point => [
	x * Math.cos(theta) - y * Math.sin(theta),
	x * Math.sin(theta) + y * Math.cos(theta),
]
