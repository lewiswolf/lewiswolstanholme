// dependencies
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// src
import bio from '../config/bio.md'

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
				<ReactMarkdown children={markdown} className='bio' />
			</main>
		</>
	)
}
