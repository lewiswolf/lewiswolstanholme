// dependencies
import { type JSX, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// components
import { GoogleAnalytics, analyticsPageView } from '../modules/google-analytics'
import Home from './home'
import Info from './info'
import Music from './music'
import Navi from './navi'
import Projects from './projects'
import Scores from './scores'
import Videos from './videos'

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
			<Helmet>
				<title>{`Lewis Wolstanholme${
					location === '/' ? '' : ` | ${location.slice(1, 2).toUpperCase()}${location.slice(2)}`
				}`}</title>
			</Helmet>
			<GoogleAnalytics id='G-52FG4N6KPP' />
			<Navi />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Music />} path='/music' />
				<Route element={<Scores />} path='/scores' />
				<Route element={<Videos />} path='/videos' />
				<Route element={<Projects />} path='/projects' />
				<Route element={<Info />} path='/info' />
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</>
	)
}
