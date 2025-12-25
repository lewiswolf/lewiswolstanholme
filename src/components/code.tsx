// dependencies
import { TextButton, Umenu } from 'maxmsp-gui'
import { type JSX, useEffect, useState } from 'react'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'
import { useLocation, useNavigate } from 'react-router-dom'
import { Prism } from 'react-syntax-highlighter'

// src
import { type CodeProjectJSON, projects } from '../config/code.ts'
import { default as syntax } from '../modules/syntax-highlighter.ts'
import '../scss/projects.scss'

const regex = {
	new_line: /\n$/,
	programming_language: /language-(\w+)/,
}

export default function Code(): JSX.Element {
	const location: string = useLocation().search.slice(6)
	const navigate = useNavigate()
	const pages: string[] = Object.keys(projects)
	const [markdown, setMarkdown] = useState<string>('')

	useEffect(() => {
		if (pages.includes(location)) {
			if (projects[location]?.github) {
				fetch(`https://raw.githubusercontent.com/${projects[location].github}/master/readme.md`)
					.then((res: Response) => {
						if (res.ok) {
							return res.text()
						}
						throw new Error('Readme not found.')
					})
					.then((_markdown: string) => {
						setMarkdown(_markdown.replace('by Lewis Wolf', ''))
					})
					.catch(() =>
						fetch(
							`https://raw.githubusercontent.com/${(projects[location] as NonNullable<CodeProjectJSON>).github}/master/README.md`,
						)
							.then((res: Response) => res.text())
							.then((_markdown: string) => {
								setMarkdown(
									_markdown
										.replace(
											'[![Watch the video](https://i.ytimg.com/vi/HnUc3VTUReo/maxresdefault.jpg)](https://youtu.be/HnUc3VTUReo)',
											'',
										)
										.replace('<div  align="center">', '')
										.replace('</div>', ''),
								)
							})
							.catch(),
					)
			}
		} else if (pages[0]) {
			void navigate(`/code?view=${pages[0]}`)
		}
	}, [location, navigate, pages])

	return (
		<>
			<header>
				<Umenu
					ariaLabel='What code project would you like to see?'
					items={pages.map((key: string) => projects[key]?.name ?? '')}
					setValue={pages.includes(location) ? pages.indexOf(location) : 0}
					width={255}
					onChange={(i: number) => {
						if (pages[i]) {
							void navigate(`/code?view=${pages[i]}`)
						}
					}}
				/>
				<TextButton
					ariaLabel='Open this project on GitHub.'
					inactive={!projects[location]?.github}
					text='GitHub'
					onClick={() => {
						if (projects[location]?.github) {
							window.open(`https://github.com/${projects[location].github}`, '_blank')
						}
					}}
				/>
			</header>
			<main className='code'>
				{!!projects[location]?.iframe && (
					<iframe
						allow='autoplay; encrypted-media; fullscreen; picture-in-picture; web-share'
						className={projects[location].className}
						referrerPolicy='strict-origin-when-cross-origin'
						src={projects[location].iframe}
						title={projects[location].name}
					/>
				)}
				{projects[location]?.github && markdown !== '404: Not Found' && (
					<div className='readme'>
						<Markdown
							components={{
								code({ className = '', children }) {
									const match = regex.programming_language.exec(className)
									return match ? (
										<Prism language={match[1]} style={syntax}>
											{typeof children === 'string' ? children.replace(regex.new_line, '') : ''}
										</Prism>
									) : (
										<code className={className}>{children}</code>
									)
								},
							}}
							rehypePlugins={[rehypeRaw]}
							remarkPlugins={[remarkGfm]}
						>
							{markdown}
						</Markdown>
					</div>
				)}
			</main>
		</>
	)
}
