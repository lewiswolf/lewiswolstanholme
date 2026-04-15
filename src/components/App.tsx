// dependencies
import type { JSX } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// components
import Code from './code.tsx'
import Home from './home.tsx'
import Info from './info.tsx'
import Music from './music.tsx'
import { Navi } from './navi.tsx'
import Scores from './scores.tsx'
import Videos from './videos.tsx'

// scss
import '../scss/App.scss'

// routes (this is _ordered_)
/* eslint-disable sort-keys */
const pages: Record<string, JSX.Element> = {
	'/': <Home />,
	'/music': <Music />,
	'/scores': <Scores />,
	'/videos': <Videos />,
	'/code': <Code />,
	'/info': <Info />,
}
/* eslint-enable sort-keys */

export default function App(): JSX.Element {
	return (
		<>
			<Navi pages={Object.keys(pages)} />
			<Routes>
				{Object.keys(pages).map((path) => (
					<Route element={pages[path]} key={path} path={path} />
				))}
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</>
	)
}
