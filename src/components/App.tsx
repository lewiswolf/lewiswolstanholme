import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Navi from './navi'
import Home from './home'

import '../scss/App.scss'
import 'maxmsp-gui/dist/index.css' // this can be removed with the next build of maxmsp-gui

export default function App() {
	return (
		<React.Fragment>
			<Navi />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/music' element={<></>} />
				<Route path='/scores' element={<></>} />
				<Route path='/videos' element={<></>} />
				<Route path='/code' element={<></>} />
				<Route path='/info' element={<></>} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</React.Fragment>
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
