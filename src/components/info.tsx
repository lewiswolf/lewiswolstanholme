// dependencies
import type { JSX } from 'react'
import Markdown from 'react-markdown'

// src
import bio from '../config/bio.md?raw'
import '../scss/info.scss'

export default function Info(): JSX.Element {
	return (
		<>
			<header>
				<p>lewiswolstanholme@gmail.com</p>
			</header>
			<main className='info'>
				<Markdown>{bio}</Markdown>
			</main>
		</>
	)
}
