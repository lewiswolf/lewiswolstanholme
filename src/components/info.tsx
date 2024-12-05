// dependencies
import { type JSX, useEffect, useState } from 'react'
import Markdown from 'react-markdown'

// src
import bio from '../config/bio.md'
import '../scss/info.scss'

export default function Info(): JSX.Element {
	const [markdown, setMarkdown] = useState<string>('')

	useEffect(() => {
		void fetch(bio as RequestInfo)
			.then((res) => res.text())
			.then((text) => {
				setMarkdown(text)
			})
	}, [])

	return (
		<>
			<header>
				<p>lewiswolstanholme@gmail.com</p>
			</header>
			<main className='info'>
				<Markdown className='bio'>{markdown}</Markdown>
			</main>
		</>
	)
}
