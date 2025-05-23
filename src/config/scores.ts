export type ScoreJSON = {
	composer: string
	file?: string
	instrumentation: string
	link?: URL
	title: string
	year: string
}

export const compositions: readonly ScoreJSON[] = [
	// {
	// 	composer: 'Lewis Wolstanholme',
	// 	instrumentation: 'for open instrumentation',
	// 	link: new URL('https://google.com'),
	// 	title: 'Red Kite',
	// 	year: '2024',
	// },
	{
		composer: 'Julia Set',
		instrumentation: 'in four parts',
		link: new URL('https://juliaset.bandcamp.com/merch/folds-score'),
		title: 'Folds',
		year: '2023',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Red_Kite_by_Lewis_Wolstanholme',
		instrumentation: 'in four parts',
		title: 'Red Kite',
		year: '2022',
	},
	{
		composer: 'Lewis Wolstanholme',
		instrumentation: 'for live electronics and surround sound speakers',
		link: new URL('https://lewiswolstanholme.bandcamp.com/merch/chroma-score'),
		title: 'Chroma',
		year: '2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Weaving_by_Lewis_Wolstanholme',
		instrumentation: 'for three microtonal synthesisers',
		title: 'Weaving',
		year: '2018 - 2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Quotient_by_Lewis_Wolstanholme',
		instrumentation: 'for string trio',
		title: 'ℚuotient',
		year: '2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Coprime_by_Lewis_Wolstanholme',
		instrumentation: 'for piano trio',
		title: 'Coprime',
		year: '2019',
	},
	{
		composer: 'Lewis Wolstanholme',
		file: 'Lorem_Ipsum_by_Lewis_Wolstanholme',
		instrumentation: 'for microtonal piano',
		title: 'Lorem Ipsum',
		year: '2018',
	},
]

export const engravings: readonly ScoreJSON[] = [
	{
		composer: 'Robert Matthew-Walker',
		file: 'Robert_Matthew-Walker_Concerto_for_Viola_and_String_Orchestra',
		instrumentation: 'Christ on the Road to Emmaus',
		title: 'Concerto for Viola and String Orchestra',
		year: '2022',
	},
	{
		composer: 'Alexis Taylor',
		file: 'Alexis_Taylor_A_Hit_Song_arr_by_Emma_Smith_&_Richard_Jones',
		instrumentation: 'for voice and orchestra',
		title: 'A Hit Song',
		year: '2018 / 2022',
	},
	{
		composer: 'Fela Sowande',
		file: 'Fela_Sowande_African_Suite_arr_by_Robert_Matthew-Walker',
		instrumentation: 'for violin, viola, violoncello, contrabass and piano',
		title: 'African Suite',
		year: '1955 / 2021',
	},
	{
		composer: 'Robert Matthew-Walker',
		file: 'Robert_Matthew-Walker_Sinfonietta_Urbana',
		instrumentation: 'for chamber orchestra',
		title: 'Sinfonietta Urbana',
		year: '2018',
	},
	{
		composer: 'Edvard Grieg',
		file: 'Edvard_Grieg_Piano_Concerto_No.2_in_B_Minor',
		instrumentation: 'for piano and orchestra',
		title: 'Piano Concerto No.2 in B Minor',
		year: '1883 / 2017',
	},
]
