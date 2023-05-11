type PublicationJSON = {
	authors: string[]
	date: Date
	doi: string
	title: string
}

export const publication_json: PublicationJSON[] = [
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date('2022-06-22'),
		doi: '10.21428/92fbeb44.7c140077',
		title: 'terracotta',
	},
	{
		authors: ['Lewis Wolstanholme'],
		date: new Date('2022-09-09'),
		doi: '10.5281/zenodo.7274474',
		title: 'kac_drumset: A Dataset Generator for Arbitrarily Shaped Drums',
	},
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date(),
		doi: '',
		title: 'josef: Spatiality as a Material Property of Audiovisual art',
	},
]
