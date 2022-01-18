export type CodeProjectsJSON = {
	className: string
	github: string
	iframe: string
	name: string
}

export const projects: { [key: string]: CodeProjectsJSON } = {
	tempgen: {
		className: 'video',
		github: 'lewiswolf/Temperament-Generator',
		iframe: 'https://www.youtube-nocookie.com/embed/C4txE2hQ53w?theme=dark&color=white',
		name: 'Temperament Generator',
	},
	'microtonal-kontakt': {
		className: 'video',
		github: 'lewiswolf/Polyphonic-Microtuning-in-Kontakt-with-Max-MSP',
		iframe: 'https://www.youtube-nocookie.com/embed/bQRwxHz54rs?theme=dark&color=white',
		name: 'Polyphonic Microtuning in Kontakt with Max MSP',
	},
	francisdevine: {
		className: 'website',
		github: '',
		iframe: 'http://francisdevine.co.uk',
		name: 'francisdevine',
	},
	// 'maxmsp-gui': {
	// 	className: 'maxmsp',
	// 	github: 'lewiswolf/maxmsp-gui',
	// 	iframe: 'https://lewiswolf.github.io/maxmsp-gui/',
	// 	name: 'maxmsp-gui',
	// },
}
