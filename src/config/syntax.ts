const coy: { [key: string]: { [key: string]: string } } = {
	'code[class*="language-"]': {
		color: 'black',
		background: 'unset',
		fontFamily: 'inherit',
		fontSize: '1em',
		textAlign: 'left',
		whiteSpace: 'pre',
		wordSpacing: 'normal',
		wordBreak: 'normal',
		wordWrap: 'normal',
		lineHeight: '1.5',
		MozTabSize: '4',
		OTabSize: '4',
		tabSize: '4',
		WebkitHyphens: 'none',
		MozHyphens: 'none',
		msHyphens: 'none',
		hyphens: 'none',
		maxHeight: 'inherit',
		height: 'inherit',
		padding: '0',
		display: 'block',
		overflow: 'auto',
	},
	'pre[class*="language-"]': {
		color: 'black',
		background: 'unset',
		fontFamily: 'inherit',
		fontSize: '1em',
		textAlign: 'left',
		whiteSpace: 'pre',
		wordSpacing: 'normal',
		wordBreak: 'normal',
		wordWrap: 'normal',
		lineHeight: '1.5',
		MozTabSize: '4',
		OTabSize: '4',
		tabSize: '4',
		WebkitHyphens: 'none',
		MozHyphens: 'none',
		msHyphens: 'none',
		hyphens: 'none',
		position: 'relative',
		margin: '0',
		overflow: 'visible',
		padding: '0',
		backgroundColor: 'none',
		WebkitBoxSizing: 'border-box',
		MozBoxSizing: 'border-box',
		boxSizing: 'border-box',
		marginBottom: '1em',
	},
	'pre[class*="language-"]>code': {
		position: 'relative',
		borderLeft: '10px solid #358ccb',
		boxShadow: '-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf',
		backgroundColor: 'none',
		backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)',
		backgroundSize: '3em 3em',
		backgroundOrigin: 'content-box',
		backgroundAttachment: 'local',
	},
	':not(pre) > code[class*="language-"]': {
		backgroundColor: 'none',
		WebkitBoxSizing: 'border-box',
		MozBoxSizing: 'border-box',
		boxSizing: 'border-box',
		marginBottom: '1em',
		position: 'relative',
		padding: '0',
		borderRadius: '0.3em',
		color: '#c92c2c',
		border: '1px solid rgba(0, 0, 0, 0.1)',
		display: 'inline',
		whiteSpace: 'normal',
	},
	'pre[class*="language-"]:before': {
		content: '"""',
		zIndex: '-2',
		display: 'block',
		position: 'absolute',
		bottom: '0.75em',
		left: '0.18em',
		width: '40%',
		height: '20%',
		maxHeight: '13em',
		boxShadow: '0px 13px 8px #979797',
		WebkitTransform: 'rotate(-2deg)',
		MozTransform: 'rotate(-2deg)',
		msTransform: 'rotate(-2deg)',
		OTransform: 'rotate(-2deg)',
		transform: 'rotate(-2deg)',
	},
	'pre[class*="language-"]:after': {
		content: '""',
		zIndex: '-2',
		display: 'block',
		position: 'absolute',
		bottom: '0.75em',
		left: 'auto',
		width: '40%',
		height: '20%',
		maxHeight: '13em',
		boxShadow: '0px 13px 8px #979797',
		WebkitTransform: 'rotate(2deg)',
		MozTransform: 'rotate(2deg)',
		msTransform: 'rotate(2deg)',
		OTransform: 'rotate(2deg)',
		transform: 'rotate(2deg)',
		right: '0.75em',
	},
	'comment': {
		color: 'black',
	},
	'block-comment': {
		color: 'black',
	},
	'prolog': {
		color: 'black',
	},
	'doctype': {
		color: 'black',
	},
	'cdata': {
		color: 'black',
	},
	'punctuation': {
		color: '#5F6364',
	},
	'property': {
		color: '#c92c2c',
	},
	'tag': {
		color: '#c92c2c',
	},
	'boolean': {
		color: '#c92c2c',
	},
	'number': {
		color: '#c92c2c',
	},
	'function-name': {
		color: '#c92c2c',
	},
	'constant': {
		color: '#c92c2c',
	},
	'symbol': {
		color: '#c92c2c',
	},
	'deleted': {
		color: '#c92c2c',
	},
	'selector': {
		color: '#0F8919',
	},
	'attr-name': {
		color: '#0F8919',
	},
	'string': {
		color: '#0F8919',
	},
	'char': {
		color: '#0F8919',
	},
	'function': {
		color: '#0F8919',
	},
	'builtin': {
		color: '#0F8919',
	},
	'inserted': {
		color: '#0F8919',
	},
	'operator': {
		color: '#8f28db',
	},
	'entity': {
		color: '#8f28db',
		'cursor': 'help',
	},
	'url': {
		color: '#8f28db',
	},
	'variable': {
		color: '#8f28db',
	},
	'atrule': {
		color: 'rgb(14 130 169)',
	},
	'attr-value': {
		color: 'rgb(14 130 169)',
	},
	'keyword': {
		color: 'rgb(14 130 169)',
	},
	'class-name': {
		color: 'rgb(14 130 169)',
	},
	'regex': {
		color: '#e90',
	},
	'important': {
		color: '#e90',
		fontWeight: 'normal',
	},
	'.language-css .token.string': {
		color: '#8f28db',
		// 'background': 'rgba(255, 255, 255, 0.5)'
	},
	'.style .token.string': {
		color: '#8f28db',
		// 'background': 'rgba(255, 255, 255, 0.5)'
	},
	'bold': {
		fontWeight: 'bold',
	},
	'italic': {
		fontStyle: 'italic',
	},
	'namespace': {
		Opacity: '.7',
	},
	'pre[class*="language-"].line-numbers.line-numbers': {
		paddingLeft: '0',
	},
	'pre[class*="language-"].line-numbers.line-numbers code': {
		paddingLeft: '3.8em',
	},
	'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows': {
		left: '0',
	},
	'pre[class*="language-"][data-line]': {
		paddingTop: '0',
		paddingBottom: '0',
		paddingLeft: '0',
	},
	'pre[data-line] code': {
		position: 'relative',
		paddingLeft: '4em',
	},
	'pre .line-highlight': {
		marginTop: '0',
	},
};

export default coy