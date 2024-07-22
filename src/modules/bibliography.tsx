// dependencies
import type { JSX } from 'react'

export type PublicationJSON = {
	[key: string]: Readonly<{
		address: string
		authors: { first_name: string; last_name: string }[]
		bibtex: string
		date: Date
		editors: { first_name: string; last_name: string }[]
		links: { doi: string; url: string }
		pages: string
		pdf: string
		publication: string
		title: string
		type: '' | 'article' | 'conference paper' | 'dataset' | 'performance' | 'presentation' | 'workshop'
	}>
}

export const parseBibliography = (s: string): PublicationJSON => {
	/*
	Convert a .bib file to a PublicationJSON object.
	*/

	const out: PublicationJSON = {}
	const tmp: { [key: string]: { [key: string]: string } } = {}
	let bibtex: string = ''
	let current_key: string | null = null
	for (const line of s.split('\n')) {
		// create a new key
		if (line[0] === '@') {
			bibtex += `${line}\n`
			const line_tmp = line.split('{') as NonNullable<[string, string]>
			current_key = line_tmp[1].slice(0, -1)
			tmp[current_key] = { content_type: line_tmp[0].slice(1) }
			continue
		}
		if (current_key) {
			// close a key
			if (line[0] === '}') {
				tmp[current_key] = { ...tmp[current_key], ...{ bibtex: bibtex + line } }
				bibtex = ''
				current_key = null
				continue
			}
			// add fields to key
			if (!line.trim().startsWith('file')) {
				bibtex += `${line}\n`
			}
			const [key, content] = line.split('=') as NonNullable<[string, string]>
			tmp[current_key] = {
				...tmp[current_key],
				...{
					[key.trim()]: content
						.trim()
						.replace(/\{|\}/g, '')
						/* eslint-disable */
						.replace(/\\\&/g, '&')
						.replace(/\\\_/g, '_')
						/* eslint-enable */
						.replace(/,$/, ''),
				},
			}
		}
	}
	// format entries
	for (const key in tmp) {
		out[key] = {
			address: tmp[key]?.address || '',
			authors: (() => {
				return tmp[key]?.author
					? tmp[key].author.split(' and ').map((author: string) => {
							const [last_name, first_name] = author.split(', ') as NonNullable<[string, string]>
							return { first_name, last_name }
						})
					: []
			})(),
			bibtex: tmp[key]?.bibtex || '',
			date: (() => {
				const date: [number, number, number] = [
					Number.parseInt(tmp[key]?.year || '0'),
					{
						jan: 0,
						feb: 1,
						mar: 2,
						apr: 3,
						may: 4,
						jun: 5,
						jul: 6,
						aug: 7,
						sep: 8,
						oct: 9,
						nov: 10,
						dec: 11,
					}[tmp[key]?.month || 'jan'] as NonNullable<number>,
					Number.parseInt(tmp[key]?.day || '1'),
				]
				return date[0] ? new Date(...date) : new Date()
			})(),
			editors: (() => {
				return tmp[key]?.editor
					? tmp[key].editor.split(' and ').map((editor: string) => {
							const [last_name, first_name] = editor.split(', ') as NonNullable<[string, string]>
							return { first_name, last_name }
						})
					: []
			})(),
			links: { doi: tmp[key]?.doi || '', url: tmp[key]?.url || '' },
			pages: tmp[key]?.pages || '',
			pdf: tmp[key]?.file || '',
			publication: tmp[key]?.journal || tmp[key]?.booktitle || tmp[key]?.howpublished || '',
			title: tmp[key]?.title || '',
			type: (tmp[key]?.type as PublicationJSON[keyof PublicationJSON]['type']) || '',
		}
	}
	return out
}

export function parseCitation(P: PublicationJSON[string]): JSX.Element {
	/*
	Format a PublicationJSON object as a JSX element.
	*/

	// format authors
	let authors = ''
	function initials(N: string): string {
		return N.split(' ')
			.map((n: string) => (n[0] ? `${n[0]}.` : ''))
			.join(' ')
	}
	switch (P.authors.length) {
		case 0:
			break
		case 1:
			if (P.authors[0]) {
				authors = `${P.authors[0].last_name}, ${initials(P.authors[0].first_name)} `
			}
			break
		case 2:
			if (P.authors[0] && P.authors[1]) {
				authors = `${P.authors[0].last_name}, ${initials(P.authors[0].first_name)} & ${P.authors[1].last_name}, ${initials(P.authors[1].first_name)} `
			}
			break
		default:
			if (P.authors[0]) {
				authors = `${P.authors[0].last_name}, ${initials(P.authors[0].first_name)} et al. `
			}
			break
	}
	return (
		<p className='citation' key={P.title}>
			{authors}
			{`(${P.date.getFullYear().toString()}). `}
			{P.title && `${P.title}. `}
			{P.type !== '' && P.type !== 'article' && P.type !== 'dataset' ? 'In ' : ''}
			{P.publication && <i>{`${P.publication}. `}</i>}
			{P.address && `${P.address}. `}
			{P.pages && `${P.pages}. `}
		</p>
	)
}
