// dependencies
import { Object as MaxObject, RadioGroup } from 'maxmsp-gui'
import type { JSX } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../scss/navi.scss'

// src
import NaviCable from '../svg/navi-cable.svg?react'

export default function Navi(): JSX.Element {
	const pages = ['', 'music', 'scores', 'videos', 'code', 'info']
	const location = useLocation().pathname.slice(1)
	const navigate = useNavigate()
	return (
		<nav>
			<RadioGroup
				ariaLabel={'Navigation Menu'}
				items={pages.slice(1)}
				spacing={20.5}
				setValue={location && pages.includes(location) ? pages.indexOf(location) : 0}
				onClick={(i: number) => {
					void navigate(`/${pages[i] ?? ''}`)
				}}
			/>
			<NaviCable />
			<MaxObject text='Lewis Wolstanholme' />
		</nav>
	)
}
