import { Object, RadioGroup } from 'maxmsp-gui'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as SVG } from '../svg/navi-cable.svg'

export default function Navi(): JSX.Element {
	const pages = ['home', 'music', 'scores', 'videos', 'code', 'info']
	const location = useLocation().pathname.slice(1)
	const navigate = useNavigate()
	return (
		<nav>
			<RadioGroup
				items={pages.slice(1)}
				spacing={20.5}
				value={location && pages.indexOf(location) !== -1 ? pages.indexOf(location) : 0}
				onClick={(i: number) => {
					i !== 0 ? navigate(`/${pages[i]}`) : navigate('/')
				}}
			/>
			<div className='navi-cable'>
				<SVG />
			</div>
			<Object text='Lewis Wolstanholme' />
		</nav>
	)
}
