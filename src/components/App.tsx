// dependencies
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// components
import Metadata from './sub-components/metadata'
import { GoogleAnalytics, analyticsPageView } from './analytics'
import Navi from './navi'
import Home from './home'
import Music from './music'
import Scores from './scores'
import Videos from './videos'
import Code from './code'
import Info from './info'

// scss
import '../scss/App.scss'

export default function App(): JSX.Element {
	const location = useLocation().pathname
	useEffect(() => {
		analyticsPageView()
	}, [location])

	return (
		<HelmetProvider>
			<Metadata
				description='Lewis Wolstanholme - Composer & Artist'
				title={`Lewis Wolstanholme${
					location === '/' ? '' : ` | ${location.slice(1, 2).toUpperCase()}${location.slice(2)}`
				}`}
			/>
			<GoogleAnalytics id='G-52FG4N6KPP' />
			<Navi />
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Music />} path='/music' />
				<Route element={<Scores />} path='/scores' />
				<Route element={<Videos />} path='/videos' />
				<Route element={<Code />} path='/research' />
				<Route element={<Info />} path='/info' />
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</HelmetProvider>
	)
}
