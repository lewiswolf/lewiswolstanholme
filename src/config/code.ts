export type CodeProjectsJSON = {
	github: string
	name: string
}

export const projects: { [key: string]: CodeProjectsJSON } = {
	'tempgen': {
		github: 'lewiswolf/Temperament-Generator',
		name: 'Temperament Generator',
	},
	'microtonal-kontakt': {
		github: 'lewiswolf/Polyphonic-Microtuning-in-Kontakt-with-Max-MSP',
		name: 'Polyphonic Microtuning in Kontakt with Max MSP',
	},
	'maxmsp-gui': {
		github: 'lewiswolf/maxmsp-gui',
		name: 'maxmsp-gui',
	},
}
	// {
	// 	"id": "tempgen",
	// 	"name": "Temperament Generator",
	// 	"readme": "https://raw.githubusercontent.com/lewiswolf/Temperament-Generator/master/README.md",
	// 	"github": "https://github.com/lewiswolf/Temperament-Generator",
	// 	"npm": null,
	// 	"iframe": null,
	// 	"iframeOverrideBG": false,
	// 	"img": "code-tempgen.png",
	// 	"codeSyntax": null
	// },
	// {
	// 	"id": "microtonal-kontakt",
	// 	"name": "Polyphonic Microtuning in Kontakt with Max MSP",
	// 	"readme": "https://raw.githubusercontent.com/lewiswolf/Polyphonic-Microtuning-in-Kontakt-with-Max-MSP/master/readme.md",
	// 	"github": "https://github.com/lewiswolf/Polyphonic-Microtuning-in-Kontakt-with-Max-MSP",
	// 	"npm": null,
	// 	"iframe": null,
	// 	"iframeOverrideBG": false,
	// 	"img": "code-kontakt.png",
	// 	"codeSyntax": "KSP"
	// },
	// {
	// 	"id": "maxmsp-gui",
	// 	"name": "maxmsp-gui",
	// 	"readme": "https://raw.githubusercontent.com/lewiswolf/maxmsp-gui/master/README.md",
	// 	"github": "https://github.com/lewiswolf/maxmsp-gui",
	// 	"npm": "",
	// 	"iframe": "https://lewiswolf.github.io/maxmsp-gui/",
	// 	"iframeOverrideBG": true,
	// 	"img": null,
	// 	"codeSyntax": "default"
	// }

