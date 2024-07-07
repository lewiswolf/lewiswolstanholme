import { PublicationJSON } from './types'

export function parseCitation(P: PublicationJSON[string]): JSX.Element {
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
			{'(' + P.date.getFullYear().toString() + '). '}
			{P.title && P.title + '. '}
			{P.type !== '' && P.type !== 'article' && P.type !== 'dataset' ? 'In ' : ''}
			{P.publication && <i>{P.publication + '. '}</i>}
			{P.address && P.address + '. '}
			{P.pages && P.pages + '. '}
		</p>
	)
}
