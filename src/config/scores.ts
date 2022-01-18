export type ScoresJSON = {
	composer: string
	file: string
	instrumentation: string
	title: string
	year: string
}

export const compositions: ScoresJSON[] = [
	{
		composer: 'Lewis Wolstanholme',
		file: 'Chroma_by_Lewis_Wolstanholme.pdf',
		instrumentation: 'for live electronics and surround sound speakers',
		title: 'Chroma',
		year: '2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Weaving_by_Lewis_Wolstanholme.pdf',
		instrumentation: 'for three microtonal synthesisers',
		title: 'Weaving',
		year: '2018 - 2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Quotient_by_Lewis_Wolstanholme.pdf',
		instrumentation: 'for string trio',
		title: 'ℚuotient',
		year: '2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Coprime_by_Lewis_Wolstanholme.pdf',
		instrumentation: 'for piano trio',
		title: 'Coprime',
		year: '2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Lorem_Ipsum_by_Lewis_Wolstanholme.pdf',
		instrumentation: 'for microtonal piano',
		title: 'Lorem Ipsum',
		year: '2018',
	},
]

export const engravings = [
	{
		composer: 'Edvard Grieg',
		file: '',
		instrumentation: 'for piano and orchestra',
		title: 'Piano Concerto No.2 in B Minor EG 120',
		year: '1883 / 2017',
	},
	// {
	// 	'composer': 'Fela Sowande',
	// 	'file': '',
	// 	'instrumentation': 'for Violin, Viola, Violoncello, Contrabass & Piano',
	// 	'title': 'African Suite (arr. by Robert Matthew-Walker)',
	// 	'year': '1955 / 2021'
	// },
	// {
	// 	'composer': 'Robert Matthew-Walker',
	// 	'file': '',
	// 	'instrumentation': 'for chamber orchestra',
	// 	'title': 'Sinfonietta Urbana',
	// 	'year': '2018'
	// },
]
