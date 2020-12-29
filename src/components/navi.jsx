import React from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import { ReactComponent as SVG } from '../svg/navi-cable.svg'
import * as MaxMSP from 'maxmsp-gui'

const pages = ['home', 'music', 'scores', 'videos', 'code', 'info']

function Navi({ history }) {
	const location = useLocation().pathname
	return (
		<nav>
			<MaxMSP.RadioGroup
				items={pages.slice(1)}
				spacing={20.5}
				value={
					location.slice(1) && pages.indexOf(location.slice(1)) !== -1
						? pages.indexOf(location.slice(1))
						: 0
				}
				onClick={(index) => {
					index !== 0 ? history.push(`/${pages[index]}`) : history.push('/')
				}}
			/>
			<div className='navi-cable'>
				<SVG />
			</div>
			<MaxMSP.Object text='Lewis Wolstanholme' />
		</nav>
	)
}

export default withRouter(Navi)
