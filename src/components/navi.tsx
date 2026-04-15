// dependencies
import { Object as MaxObject, RadioGroup } from 'maxmsp-gui'
import type { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../scss/navi.scss'

// src
import NaviCable from '../svg/navi-cable.svg?react'

export const Navi: FC<{ pages: string[] }> = ({ pages }) => {
	const location = useLocation().pathname
	const navigate = useNavigate()

	// event handlers
	const _onClick = (i: number): void => {
		void navigate(pages[i] ?? '')
	}

	return (
		<>
			<title>
				{`Lewis Wolstanholme${location === '/' ? '' : ` | ${location.charAt(1).toUpperCase() + location.slice(2)}`}`}
			</title>
			<nav>
				<RadioGroup
					ariaLabel='Navigation Menu'
					items={pages.slice(1).map((page) => page.slice(1))}
					onClick={_onClick}
					spacing={20.5}
					setValue={location && pages.includes(location) ? pages.indexOf(location) : 0}
				/>
				<NaviCable />
				<MaxObject text='Lewis Wolstanholme' />
			</nav>
		</>
	)
}
