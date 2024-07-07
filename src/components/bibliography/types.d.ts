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
