const highlight1: string = '#c92c2c'
const highlight2: string = '#0F8919'
const highlight3: string = '#8f28db'
const highlight4: string = '#0E82A9'

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
		color: highlight1,
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
	comment: {
		color: 'black',
	},
	'block-comment': {
		color: 'black',
	},
	prolog: {
		color: 'black',
	},
	doctype: {
		color: 'black',
	},
	cdata: {
		color: 'black',
	},
	punctuation: {
		color: 'black',
	},
	property: {
		color: highlight1,
	},
	tag: {
		color: highlight1,
	},
	boolean: {
		color: highlight1,
	},
	number: {
		color: highlight1,
	},
	'function-name': {
		color: highlight1,
	},
	constant: {
		color: highlight1,
	},
	symbol: {
		color: highlight1,
	},
	deleted: {
		color: highlight1,
	},
	selector: {
		color: highlight2,
	},
	'attr-name': {
		color: highlight2,
	},
	string: {
		color: highlight2,
	},
	char: {
		color: highlight2,
	},
	function: {
		color: highlight2,
	},
	builtin: {
		color: highlight2,
	},
	inserted: {
		color: highlight2,
	},
	operator: {
		color: highlight3,
	},
	entity: {
		color: highlight3,
		cursor: 'help',
	},
	url: {
		color: highlight3,
	},
	variable: {
		color: highlight3,
	},
	atrule: {
		color: highlight4,
	},
	'attr-value': {
		color: highlight4,
	},
	keyword: {
		color: highlight4,
	},
	'class-name': {
		color: highlight4,
	},
	regex: {
		color: '#e90',
	},
	important: {
		color: '#e90',
		fontWeight: 'normal',
	},
	'.language-css .token.string': {
		color: highlight3,
	},
	'.style .token.string': {
		color: highlight3,
	},
	bold: {
		fontWeight: 'bold',
	},
	italic: {
		fontStyle: 'italic',
	},
	namespace: {
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
}

export default coy
