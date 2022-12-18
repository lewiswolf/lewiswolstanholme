// dependencies
import { TextButton, Umenu } from 'maxmsp-gui'
import { useEffect, useState } from 'react'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { useLocation, useNavigate } from 'react-router-dom'
import { Prism } from 'react-syntax-highlighter'

// src
import { projects } from '../config/code'
import { default as syntax } from '../config/syntax'

export default function Code(): JSX.Element {
	const location: string = useLocation().search.slice(6)
	const navigate = useNavigate()
	const pages: string[] = Object.keys(projects)
	const [markdown, setMarkdown] = useState<string>('')

	useEffect(() => {
		if (pages.indexOf(location) === -1) {
			navigate(`/code?view=${pages[0]}`)
		} else {
			projects[location]?.github &&
				fetch(
					`https://raw.githubusercontent.com/${projects[location]?.github}/master/readme.md`,
				)
					.then((res: Response) => res.text())
					.then((markdown: string) => setMarkdown(markdown.replace('by Lewis Wolf', '')))
					.catch()
		}
	}, [location, navigate, pages])

	return (
		<>
			<header>
				<Umenu
					ariaLabel='What code project would you like to see?'
					items={pages.map((key: string) => projects[key]?.name || '')}
					setValue={pages.indexOf(location) !== -1 ? pages.indexOf(location) : 0}
					width={255}
					onChange={(i: number) => navigate(`/code?view=${pages[i]}`)}
				/>
				<TextButton
					ariaLabel='Open this project on GitHub.'
					inactive={!projects[location]?.github}
					text='GitHub'
					onClick={() => {
						window.open(`https://github.com/${projects[location]?.github}`, '_blank')
					}}
				/>
			</header>
			<main className='code'>
				{projects[location]?.iframe && (
					<iframe
						allow='accelerometer; autoplay; encrypted-media; fullscreen; gyroscope;'
						className={projects[location]?.className}
						frameBorder={0}
						src={projects[location]?.iframe}
						title={projects[location]?.name}
					/>
				)}
				{projects[location]?.github && markdown !== '404: Not Found' && (
					<ReactMarkdown
						children={markdown}
						className='readme'
						components={{
							code({ className, children }) {
								const match = /language-(\w+)/.exec(className || '')
								return match ? (
									<Prism
										children={String(children).replace(/\n$/, '')}
										language={match[1]}
										style={syntax}
									/>
								) : (
									<code className={className}>{children}</code>
								)
							},
						}}
						rehypePlugins={[rehypeRaw]}
						remarkPlugins={[remarkGfm]}
					/>
				)}
			</main>
		</>
	)
}
