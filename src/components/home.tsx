import { Slider } from 'maxmsp-gui'

export default function Home(): JSX.Element {
	return (
		<>
			<div className='header' id='home-header'>
				<Slider
					fidelity={1000}
					length={200}
					onChange={(v: number) => console.log(`this is my value: ${v}`)}
				/>
			</div>
			<main className='home'></main>
		</>
	)
}
