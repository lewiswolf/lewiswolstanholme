export type AlbumJSON = {
	link: string
	img: string
	title: string
}

export const albums: readonly AlbumJSON[] = [
	// {
	// 	link: 'https://lewiswolstanholme.bandcamp.com/album/red-kite',
	// 	img: '',
	// 	title: 'red kite by Lewis Wolstanholme',
	// },
	// {
	// 	link: '',
	// 	img: '',
	// 	title: 'Julia Set X mori.111111',
	// },
	{
		link: 'https://juliaset.bandcamp.com/album/sallow',
		img: 'https://f4.bcbits.com/img/a2573041574_10.jpg',
		title: 'sallow by Julia Set',
	},
	{
		link: 'https://juliaset.bandcamp.com/album/josef',
		img: 'https://f4.bcbits.com/img/a3407752053_16.jpg',
		title: 'josef by Julia Set',
	},
	{
		link: 'https://juliaset.bandcamp.com/album/terracotta',
		img: 'https://f4.bcbits.com/img/a0499687799_16.jpg',
		title: 'terracotta by Julia Set',
	},
	{
		link: 'https://juliaset.bandcamp.com/album/morass-cairn',
		img: 'https://f4.bcbits.com/img/a2284081809_16.jpg',
		title: 'morass / cairn by Julia Set',
	},
	{
		link: 'https://lewiswolstanholme.bandcamp.com/album/chroma',
		img: 'https://f4.bcbits.com/img/a2566795833_10.jpg',
		title: 'chroma by Lewis Wolstanholme',
	},
	{
		link: 'https://lewiswolstanholme.bandcamp.com/album/noble-seed',
		img: 'https://f4.bcbits.com/img/a1666427238_16.jpg',
		title: 'noble / seed by Lewis Wolstanholme / Ciarán Corr',
	},
	{
		link: 'https://lewiswolstanholme.bandcamp.com/album/bach-fractal',
		img: 'https://f4.bcbits.com/img/a3526980092_16.jpg',
		title: 'bach.fractal by Ciarán Corr & Lewis Wolstanholme',
	},
] as const
