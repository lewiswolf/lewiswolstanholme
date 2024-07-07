import { PublicationJSON } from './types'

export function parseCitation(P: PublicationJSON[string]): JSX.Element {
	// format authors
	let authors = ''
	function initials(N: string): string {
		return N.split(' ')
			.map((n: string) => `${n[0]}.`)
			.join(' ')
	}
	switch (P.authors.length) {
		case 0:
			break
		case 1:
			authors = `${P.authors[0]?.last_name}, ${initials(P.authors[0]?.first_name as NonNullable<string>)} `
			break
		case 2:
			authors = `${P.authors[0]?.last_name}, ${initials(P.authors[0]?.first_name as NonNullable<string>)} & ${P.authors[1]?.last_name}, ${initials(P.authors[1]?.first_name as NonNullable<string>)} `
			break
		default:
			authors = `${P.authors[0]?.last_name}, ${initials(P.authors[0]?.first_name as NonNullable<string>)} et al. `
			break
	}
	return (
		<p className='citation' key={P.title}>
			{authors}
			{P.date && '(' + P.date.getFullYear() + '). '}
			{P.title && P.title + '. '}
			{P.type !== '' && P.type !== 'article' && P.type !== 'dataset' ? 'In ' : ''}
			{P.publication && <i>{P.publication + '. '}</i>}
			{P.address && P.address + '. '}
			{P.pages && P.pages + '. '}
		</p>
	)
}
