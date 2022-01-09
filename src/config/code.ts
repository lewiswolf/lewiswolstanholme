export type CodeProjectsJSON = {
	github: string
	iframe: string
	iframeArguments: { [key: string]: any }
	name: string
}

export const projects: { [key: string]: CodeProjectsJSON } = {
	'tempgen': {
		github: 'lewiswolf/Temperament-Generator',
		// iframe: 'https://www.youtube-nocookie.com/embed/C4txE2hQ53w?theme=dark&color=white',
		// iframeArguments: {
		// 	allow: 'accelerometer; autoplay; encrypted-media; gyroscope;',
		// 	allowFullScreen: true,
		// 	autoResize: false,
		// 	frameBorder: 0,
		// 	style: {
		// 		height: 'auto !important',
		// 	}
		// },
		iframe: '',
		iframeArguments: {},
		name: 'Temperament Generator',
	},
	'microtonal-kontakt': {
		github: 'lewiswolf/Polyphonic-Microtuning-in-Kontakt-with-Max-MSP',
		// iframe: 'https://www.youtube-nocookie.com/embed/bQRwxHz54rs?theme=dark&color=white',
		// iframeArguments: {
		// 	allow: 'accelerometer; autoplay; encrypted-media; gyroscope;',
		// 	allowFullScreen: true,
		// 	autoResize: false,
		// 	frameBorder: 0,
		// },
		iframe: '',
		iframeArguments: {},
		name: 'Polyphonic Microtuning in Kontakt with Max MSP',
	},
	'maxmsp-gui': {
		github: 'lewiswolf/maxmsp-gui',
		iframe: 'https://lewiswolf.github.io/maxmsp-gui/',
		iframeArguments: {
			autoResize: true,
			bodyBackground: 'unset',
			checkOrigin: false,
			scrolling: true,
		},
		name: 'maxmsp-gui',
	},
}
