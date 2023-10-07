type PublicationJSON = {
	authors: string[]
	date: Date
	permalink: string
	place?: string
	publication: string
	title: string
	type: 'article' | 'conference paper' | 'dataset' | 'performance' | 'presentation' | 'workshop'
}

export const publication_json: PublicationJSON[] = [
	// {
	// 	authors: [
	// 		'Lewis Wolstanholme',
	// 		'Teresa Pelinski',
	// 		'Aliénor Golvet',
	// 		'Cyrus Vahidi',
	// 		'Vincent Martos',
	// 	],
	// 	date: new Date(),
	// 	permalink: '',
	// 	place: 'Institut de Recherche et Coordination Acoustique/Musique, Paris',
	// 	publication:
	// 		'AI (r)evolution - where are we heading?: Thoughts about the future of music and sound technologies in the era of deep learning',
	// 	title: 'Responsible Innovation and Creative Practice',
	// 	type: 'article',
	// },
	// {
	// 	authors: ['Lewis Wolstanholme', 'Francis Devine'],
	// 	date: new Date(),
	// 	permalink: '',
	// 	publication: 'Internation Journal of Creative Media Research',
	// 	title: 'josef: Spatiality as a Material Property of Audiovisual Art',
	// 	type: 'article',
	// },
	{
		authors: ['Lewis Wolstanholme', 'Andrew McPherson'],
		date: new Date('2023-09-11'),
		permalink: '',
		place: 'Politecnico di Torino, Italy',
		publication: 'Forum Acusticum, 10th Convention of the European Acoustics Association',
		title: 'Towards Orchestrating Physically Modelled 2D Percussion Instruments',
		type: 'conference paper',
	},
	{
		authors: [
			'Jack Armitage',
			'Victor Shepardson',
			'Nicola Privato',
			'Teresa Pelinski',
			'Adán L. Benito Temprano',
			'Lewis Wolstanholme',
			'Andrea Martelloni',
			'Franco Santiago Caspe',
			'Courtney N. Reed',
			'Sophie Skach',
			'Rodrigo Diaz',
			"Sean Patrick O'Brien",
			'Jordie Shier',
		],
		date: new Date('2023-08-30'),
		permalink: '',
		place: 'University of Sussex, UK',
		publication: '4th International Conference on AI and Music Creativity (AIMC)',
		title: 'Agential Instruments Design Workshop',
		type: 'workshop',
	},
	{
		authors: ['Lewis Wolstanholme', 'Cyrus Vahidi', 'Andrew McPherson'],
		date: new Date('2023-08-23'),
		permalink: 'http://www.aes.org/e-lib/browse.cfm?elib=22158',
		place: 'University of Huddersfield, UK',
		publication: 'International Conference on Spatial and Immersive Audio (AES)',
		title: 'Hearing from Within a Sound: A Series of Techniques for Deconstructing and Spatialising Timbre',
		type: 'conference paper',
	},
	{
		authors: ['Lewis Wolstanholme', 'Andrew McPherson'],
		date: new Date('2022-12-20'),
		permalink: 'https://www.qmul.ac.uk/dmrn/media/dmrn/DMRN-17-proceedings---Draft.pdf',
		place: 'Queen Mary University of London, UK',
		publication: '17th Digital Music Research Network (DMRN)',
		title: 'Remarks on a Cultural Investigation of Abstract Percussion Instruments',
		type: 'presentation',
	},
	{
		authors: ['Lewis Wolstanholme'],
		date: new Date('2022-11-23'),
		permalink: 'https://doi.org/10.5281/zenodo.7274474',
		publication: 'Zenodo',
		title: 'kac_drumset: A Dataset Generator for Arbitrarily Shaped Drums',
		type: 'dataset',
	},
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date('2022-06-22'),
		permalink: 'https://doi.org/10.21428/92fbeb44.7c140077',
		place: 'University of Auckland, New Zealand',
		publication: '22nd International Conference on New Interfaces for Musical Expression (NIME)',
		title: 'terracotta',
		type: 'performance',
	},
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date('2022-06-16'),
		permalink: '',
		place: 'University of Gloucestershire, UK',
		publication: 'Everyday is Spatial: Immersive Audio Conference',
		title: 'Subjective Spatial Colour',
		type: 'performance',
	},
]
