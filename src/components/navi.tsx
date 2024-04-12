// dependencies
import { Object, RadioGroup } from 'maxmsp-gui'
import { useLocation, useNavigate } from 'react-router-dom'

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
					navigate(`/${pages[i] || ''}`)
				}}
			/>
			<NaviCable />
			<Object text='Lewis Wolstanholme' />
		</nav>
	)
}
