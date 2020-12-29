import React from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Analytics from 'react-ga'

import Head from './head'
import Navi from './navi'
import Home from './home'
import Music from './music'
import Scores from './scores'
import Videos from './videos'
import Code from './code'
import Info from './info'

import '../scss/App.scss'
import 'maxmsp-gui/dist/index.css'

export default function App() {
	let location = useLocation().pathname

	React.useEffect(() => {
		if (window.location.hostname !== 'localhost') {
			window.dataLayer = window.dataLayer || []
			function gtag() {
				window.dataLayer.push(arguments)
			}

			Analytics.initialize('UA-171437116-2')
			gtag('js', new Date())
			gtag('config', 'G-52FG4N6KPP')

			Analytics.pageview(location)
			gtag('send', 'page_view', {
				page_location: window.location.href,
				page_path: location,
			})
		}
	}, [location])

	return (
		<React.Fragment>
			<Head
				title={
					location === '/'
						? 'Lewis Wolstanholme'
						: `Lewis Wolstanholme | ${location[1].toUpperCase() + location.slice(2)}`
				}
				description='Lewis Wolstanholme - Musician, Composer &amp; Creative Coder'
				themeColor='#333333'
				gtag='G-52FG4N6KPP'
			/>
			<Navi />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/music' component={Music} />
				<Route exact path='/scores' component={Scores} />
				<Route exact path='/videos' component={Videos} />
				<Route exact path='/code' component={Code} />
				<Route exact path='/info' component={Info} />
				<Route path='*' render={() => <Redirect to='/' />} />
			</Switch>
		</React.Fragment>
	)
}
