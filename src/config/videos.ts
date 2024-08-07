export type VideoJSON = {
	hash: string
	title: string
	type: 'youtube' | 'vimeo'
}

export const videos: readonly VideoJSON[] = [
	{
		hash: '1iYzt-zUhjA',
		title: 'king lily by Mark Cables X Lewis Wolf',
		type: 'youtube',
	},
	{
		hash: 'bjNu__e3OyI',
		title: 'centerbeam by Julia Set',
		type: 'youtube',
	},
	{
		hash: '9dWz4KJjG4A',
		title: 'Julia Set X Barrell Jones (State51 X Nonclassical)',
		type: 'youtube',
	},
	{
		hash: 'S2Wl10zEWUk',
		title: 'Julia Set X Nonclassical',
		type: 'youtube',
	},
	{
		hash: '772567653',
		title: 'josef by Julia Set',
		type: 'vimeo',
	},
	{
		hash: '772567097',
		title: 'terracotta by Julia Set',
		type: 'vimeo',
	},
	{
		hash: '0arhLOG00Js',
		title: 'topspin (demo) by Julia Set',
		type: 'youtube',
	},
	{
		hash: '772565927',
		title: 'morass by Julia Set',
		type: 'vimeo',
	},
	{
		hash: '772562898',
		title: 'cairn by Julia Set',
		type: 'vimeo',
	},
	{
		hash: 's3jbrXySGXg',
		title: 'weaving by Lewis Wolstanholme',
		type: 'youtube',
	},
	{
		hash: '20eLg6skiK4',
		title: 'chroma by Lewis Wolstanholme',
		type: 'youtube',
	},
	// {
	// 	hash: 'eIMS1Q_vu_M',
	// 	title: 'sabar by Julia Set',
	// 	type: 'youtube',
	// },
	{
		hash: 'iXguBng4cJg',
		title: 'marble by Julia Set',
		type: 'youtube',
	},
	{
		hash: 'sZYNHRozFBc',
		title: 'bach.fractal by Ciarán Corr & Lewis Wolstanholme',
		type: 'youtube',
	},
] as const
