// dependencies
import 'maxmsp-gui/dist/index.css' // this can be removed with the next build of maxmsp-gui
import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// components
import { GoogleAnalytics, analyticsPageView } from './sub-components/analytics'
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
	useEffect(() => analyticsPageView(), [location])

	return (
		<>
			<GoogleAnalytics id='G-52FG4N6KPP' />
			<Navi />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/music' element={<Music />} />
				<Route path='/scores' element={<Scores />} />
				<Route path='/videos' element={<Videos />} />
				<Route path='/code' element={<Code />} />
				<Route path='/info' element={<Info />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</>
	)
}
