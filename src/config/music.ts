export type AlbumJSON = {
	link: string
	img: string
	title: string
}

export const albums: readonly AlbumJSON[] = [
	// {
	// 	link: 'https://lewiswolstanholme.bandcamp.com/album/red-kite',
	// 	img: 'https://f4.bcbits.com/img/a2039280653_10.jpg',
	// 	title: 'red kite by Lewis Wolstanholme',
	// },
	{
		img: 'https://f4.bcbits.com/img/a1325455413_10.jpg',
		link: 'https://juliaset.bandcamp.com/album/julia-set-x-mori-111111',
		title: 'Julia Set X mori.111111',
	},
	{
		img: 'https://f4.bcbits.com/img/a2573041574_10.jpg',
		link: 'https://juliaset.bandcamp.com/album/sallow',
		title: 'sallow by Julia Set',
	},
	{
		img: 'https://f4.bcbits.com/img/a3407752053_16.jpg',
		link: 'https://juliaset.bandcamp.com/album/josef',
		title: 'josef by Julia Set',
	},
	{
		img: 'https://f4.bcbits.com/img/a0499687799_16.jpg',
		link: 'https://juliaset.bandcamp.com/album/terracotta',
		title: 'terracotta by Julia Set',
	},
	{
		img: 'https://f4.bcbits.com/img/a2284081809_16.jpg',
		link: 'https://juliaset.bandcamp.com/album/morass-cairn',
		title: 'morass / cairn by Julia Set',
	},
	{
		img: 'https://f4.bcbits.com/img/a2566795833_10.jpg',
		link: 'https://lewiswolstanholme.bandcamp.com/album/chroma',
		title: 'chroma by Lewis Wolstanholme',
	},
	{
		img: 'https://f4.bcbits.com/img/a1666427238_16.jpg',
		link: 'https://lewiswolstanholme.bandcamp.com/album/noble-seed',
		title: 'noble / seed by Lewis Wolstanholme / Ciarán Corr',
	},
	{
		img: 'https://f4.bcbits.com/img/a3526980092_16.jpg',
		link: 'https://lewiswolstanholme.bandcamp.com/album/bach-fractal',
		title: 'bach.fractal by Ciarán Corr & Lewis Wolstanholme',
	},
] as const
