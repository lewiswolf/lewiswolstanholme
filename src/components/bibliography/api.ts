export type PublicationJSON = {
	[key: string]: Readonly<{
		address: string
		authors: { first_name: string; last_name: string }[]
		date: Date
		editors: { first_name: string; last_name: string }[]
		links: { doi: string; url: string }
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
	let current_key: string | null = null
	s.split('\n').forEach((line: string) => {
		// create a new key
		if (line[0] === '@') {
			const line_tmp = line.split('{') as NonNullable<[string, string]>
			current_key = line_tmp[1].slice(0, -1)
			tmp[current_key] = { content_type: line_tmp[0].slice(1) }
			return
		} else if (line[0] === '}') {
			current_key = null
			return
		}
		// add fields to key
		if (current_key) {
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
	})
	// format entries
	for (const key in tmp) {
		out[key] = {
			address: tmp[key]?.address || '',
			authors: (() => {
				return tmp[key]?.author
					? (tmp[key]?.author as NonNullable<string>).split(' and ').map((author: string) => {
							const [last_name, first_name] = author.split(', ') as NonNullable<[string, string]>
							return { first_name, last_name }
						})
					: []
			})(),
			date: (() => {
				const date: [number, number, number] = [
					parseInt(tmp[key]?.year || '0'),
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
					parseInt(tmp[key]?.day || '1'),
				]
				return date[0] ? new Date(...date) : new Date()
			})(),
			editors: (() => {
				return tmp[key]?.editor
					? (tmp[key]?.editor as NonNullable<string>).split(' and ').map((editor: string) => {
							const [last_name, first_name] = editor.split(', ') as NonNullable<[string, string]>
							return { first_name, last_name }
						})
					: []
			})(),
			links: { doi: tmp[key]?.doi || '', url: tmp[key]?.url || '' },
			pdf: tmp[key]?.file || '',
			publication: tmp[key]?.journal || tmp[key]?.booktitle || '',
			title: tmp[key]?.title || '',
			type: (tmp[key]?.type as PublicationJSON[keyof PublicationJSON]['type']) || '',
		}
	}
	return out
}
