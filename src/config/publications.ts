type PublicationJSON = {
	authors: string[]
	date: Date
	permalink: string
	title: string
}

export const publication_json: PublicationJSON[] = [
	// {
	// 	authors: ['Lewis Wolstanholme', 'Francis Devine'],
	// 	date: new Date(),
	// 	permalink: '',
	// 	title: 'josef: Spatiality as a Material Property of Audiovisual art',
	// },
	// {
	// 	authors: ['Lewis Wolstanholme', 'Andrew McPherson'],
	// 	date: new Date(),
	// 	permalink: '',
	// 	title: 'Towards Orchestrating Physically Modelled 2D Percussion Instruments',
	// },
	{
		authors: ['Lewis Wolstanholme', 'Cyrus Vahidi', 'Andrew McPherson'],
		date: new Date(),
		permalink: 'http://www.aes.org/e-lib/browse.cfm?elib=22158',
		title: 'Hearing from Within a Sound: A Series of Techniques for Deconstructing and Spatialising Timbre',
	},
	{
		authors: ['Lewis Wolstanholme'],
		date: new Date('2022-11-23'),
		permalink: 'https://doi.org/10.5281/zenodo.7274474',
		title: 'kac_drumset: A Dataset Generator for Arbitrarily Shaped Drums',
	},
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date('2022-06-22'),
		permalink: 'https://doi.org/10.21428/92fbeb44.7c140077',
		title: 'terracotta',
	},
]
