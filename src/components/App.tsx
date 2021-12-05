// dependencies
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import 'maxmsp-gui/dist/index.css' // this can be removed with the next build of maxmsp-gui

// components
import { GoogleAnalytics, analyticsPageView } from './sub-components/analytics'
import Navi from './navi'
import Home from './home'
import Music from './music'
import Videos from './videos'

// scss
import '../scss/App.scss'

// config
import { music_json } from '../config/music'
import { videos_json } from '../config/videos'

export default function App(): JSX.Element {
	const location = useLocation().pathname
	React.useEffect(() => analyticsPageView(), [location])

	return (
		<>
			<GoogleAnalytics id='G-52FG4N6KPP' />
			<Navi />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/music' element={<Music json={music_json} />} />
				<Route path='/scores' element={<></>} />
				<Route path='/videos' element={<Videos json={videos_json} />} />
				<Route path='/code' element={<></>} />
				<Route path='/info' element={<></>} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</>
	)
}

/* <Head
	darkModeFavicon={true}
	gtag='G-52FG4N6KPP'
	title={
		location === '/'
			? 'Lewis Wolstanholme'
			: `Lewis Wolstanholme | ${location[1].toUpperCase() + location.slice(2)}`
	}
/> */

// import Head from '../../unused/src/components/head'
// import Home from '../../unused/src/components/home'
// import Music from '../../unused/src/components/music'
// import Scores from '../../unused/src/components/scores'
// import Videos from '../../unused/src/components/videos'
// import Code from '../../unused/src/components/code'
// import Info from '../../unused/src/components/info'

// import '../scss/App.scss'
// import 'maxmsp-gui/dist/index.css'
// React.useEffect(() => {
// 	// if (window.location.hostname !== 'localhost') {
// 	// 	window.dataLayer = window.dataLayer || []
// 	// 	function gtag() {
// 	// 		window.dataLayer.push(arguments)
// 	// 	}
// 	// 	gtag('js', new Date())
// 	// 	gtag('config', 'G-52FG4N6KPP')
// 	// 	gtag('send', 'page_view', {
// 	// 		page_location: window.location.href,
// 	// 		page_path: window.location.pathname,
// 	// 	})
// 	// }
// }, [location])
