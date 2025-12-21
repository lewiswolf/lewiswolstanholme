// dependencies
import { type JSX, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// components
import { GoogleAnalytics, analyticsPageView } from '../modules/google-analytics.tsx'
import Home from './home.tsx'
import Info from './info.tsx'
import Music from './music.tsx'
import Navi from './navi.tsx'
import Code from './code.tsx'
import Scores from './scores.tsx'
import Videos from './videos.tsx'

// scss
import '../scss/App.scss'

export default function App(): JSX.Element {
	const location = useLocation().pathname
	// biome-ignore lint/correctness/useExhaustiveDependencies: analyticsPageView calculates its own version of location internally
	useEffect(() => {
		analyticsPageView()
	}, [location])

	return (
		<>
			<title>{`Lewis Wolstanholme${
				location === '/' ? '' : ` | ${location.slice(1, 2).toUpperCase()}${location.slice(2)}`
			}`}</title>
			<GoogleAnalytics G4A_id='G-52FG4N6KPP' />
			<Navi />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Music />} path='/music' />
				<Route element={<Scores />} path='/scores' />
				<Route element={<Videos />} path='/videos' />
				<Route element={<Code />} path='/code' />
				<Route element={<Info />} path='/info' />
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</>
	)
}
