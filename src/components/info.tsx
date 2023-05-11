// dependencies
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// src
// import Performances from './performances'
import bio from '../config/bio.md'

export default function Info(): JSX.Element {
	const [markdown, setMarkdown] = useState<string>('')

	useEffect(() => {
		fetch(bio)
			.then((res) => res.text())
			.then((text) => setMarkdown(text))
	}, [])

	return (
		<>
			<header>
				<p>lewiswolstanholme@gmail.com</p>
			</header>
			<main className='info'>
				<ReactMarkdown children={markdown} className='bio' />
				{/* <Performances /> */}
			</main>
		</>
	)
}
