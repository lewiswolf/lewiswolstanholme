export type PublicationJSON = {
	authors: Readonly<string[]>
	date: Date
	links?: { [key: string]: string }
	pdf?: string
	permalink?: string
	place?: string
	publication: string
	title: string
	type: 'article' | 'conference paper' | 'dataset' | 'performance' | 'presentation' | 'workshop'
}

export const publications: Readonly<PublicationJSON[]> = [
	// {
	// 	authors: ['Lewis Wolstanholme', 'Francis Devine'],
	// 	date: new Date(),
	// 	pdf: '',
	// 	permalink: '',
	// 	publication: 'Internation Journal of Creative Media Research',
	// 	title: 'josef: Spatiality as a Material Property of Audiovisual Art',
	// 	type: 'article',
	// },
	{
		authors: ['Lewis Wolstanholme', 'Teresa Pelinski', 'Aliénor Golvet', 'Cyrus Vahidi', 'Vincent Martos'],
		date: new Date('2023-11-31'),
		pdf: 'AI_(r)evolution_-_Where_are_We_Heading?',
		permalink: 'https://hal.science/hal-04276793',
		place: 'Institut de Recherche et Coordination Acoustique/Musique (IRCAM), Paris',
		publication:
			'AI (r)evolution - where are we heading?: Thoughts about the future of music and sound technologies in the era of deep learning',
		title: 'Responsible Innovation and Creative Practice',
		type: 'article',
	},
	{
		authors: ['Lewis Wolstanholme', 'Andrew McPherson'],
		date: new Date('2023-09-11'),
		links: { code: 'https://github.com/lewiswolf/kac_prediction' },
		pdf: 'Wolstanholme_McPherson_2023_Towards_Orchestrating_Physically_Modelled_2D_Percussion_Instruments',
		permalink: 'https://appfa2023.silsystem.solutions/atti/000664.pdf',
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
		links: {
			code: 'https://github.com/rodrigodzf/NeuralResonatorBela',
			demo: '',
		},
		pdf: 'Armitage_et_al_2023_Agential_Instruments_Design_Workshop',
		permalink: 'https://aimc2023.pubpub.org/pub/25mg4xnz',
		place: 'University of Sussex, UK',
		publication: '4th International Conference on AI and Music Creativity (AIMC)',
		title: 'Agential Instruments Design Workshop',
		type: 'workshop',
	},
	{
		authors: ['Lewis Wolstanholme', 'Cyrus Vahidi', 'Andrew McPherson'],
		date: new Date('2023-08-23'),
		links: {
			code: 'https://github.com/lewiswolf/hearing-from-within-a-sound',
			demo: 'https://youtu.be/-0i4IlHmgRs',
		},
		pdf: 'Wolstanholme_et_al_2023_Hearing_from_Within_a_Sound',
		permalink: 'http://www.aes.org/e-lib/browse.cfm?elib=22158',
		place: 'University of Huddersfield, UK',
		publication: 'International Conference on Spatial and Immersive Audio (AES)',
		title: 'Hearing from Within a Sound: A Series of Techniques for Deconstructing and Spatialising Timbre',
		type: 'conference paper',
	},
	{
		authors: ['Lewis Wolstanholme', 'Andrew McPherson'],
		date: new Date('2022-12-20'),
		pdf: 'Wolstanholme_McPherson_2022_Remarks_on_a_Cultural_Investigation_of_Abstract_Percussion_Instruments',
		permalink: 'https://www.qmul.ac.uk/dmrn/media/dmrn/DMRN-17-proceedings---Draft.pdf',
		place: 'Queen Mary University of London, UK',
		publication: '17th Digital Music Research Network (DMRN)',
		title: 'Remarks on a Cultural Investigation of Abstract Percussion Instruments',
		type: 'presentation',
	},
	{
		authors: ['Lewis Wolstanholme'],
		date: new Date('2022-11-23'),
		links: { code: 'https://github.com/lewiswolf/kac_drumset' },
		permalink: 'https://doi.org/10.5281/zenodo.7274474',
		publication: 'Zenodo',
		title: 'kac_drumset: A Dataset Generator for Arbitrarily Shaped Drums',
		type: 'dataset',
	},
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date('2022-06-22'),
		links: { watch: 'https://vimeo.com/772567097' },
		pdf: 'Wolstanholme_Devine_2022_terracotta',
		permalink: 'https://doi.org/10.21428/92fbeb44.7c140077',
		place: 'University of Auckland, New Zealand',
		publication: '22nd International Conference on New Interfaces for Musical Expression (NIME)',
		title: 'terracotta',
		type: 'performance',
	},
	{
		authors: ['Lewis Wolstanholme', 'Francis Devine'],
		date: new Date('2022-06-16'),
		links: { watch: 'https://youtu.be/d6IfdD9n2A4' },
		place: 'University of Gloucestershire, UK',
		publication: 'Everyday is Spatial: Immersive Audio Conference',
		title: 'Subjective Spatial Colour',
		type: 'performance',
	},
] as const
