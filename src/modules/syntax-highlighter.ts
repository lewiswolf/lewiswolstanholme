const highlight1 = '#c92c2c'
const highlight2 = '#0F8919'
const highlight3 = '#8f28db'
const highlight4 = '#0E82A9'

const coy: Record<string, Record<string, string>> = {
	'.language-css .token.string': {
		color: highlight3,
	},
	'.style .token.string': {
		color: highlight3,
	},
	':not(pre) > code[class*="language-"]': {
		MozBoxSizing: 'border-box',
		WebkitBoxSizing: 'border-box',
		backgroundColor: 'transparent',
		border: '1px solid rgba(0, 0, 0, 0.1)',
		borderRadius: '0.3em',
		boxSizing: 'border-box',
		color: highlight1,
		display: 'inline',
		marginBottom: '1em',
		padding: '0',
		position: 'relative',
		whiteSpace: 'normal',
	},
	atrule: {
		color: highlight4,
	},
	'attr-name': {
		color: highlight2,
	},
	'attr-value': {
		color: highlight4,
	},
	'block-comment': {
		color: 'black',
	},
	bold: {
		fontWeight: 'bold',
	},
	boolean: {
		color: highlight1,
	},
	builtin: {
		color: highlight2,
	},
	cdata: {
		color: 'black',
	},
	char: {
		color: highlight2,
	},
	'class-name': {
		color: highlight4,
	},
	'code[class*="language-"]': {
		MozHyphens: 'none',
		MozTabSize: '4',
		OTabSize: '4',
		WebkitHyphens: 'none',
		backgroundColor: 'transparent',
		color: 'black',
		display: 'block',
		fontFamily: 'inherit',
		fontSize: '1em',
		height: 'inherit',
		hyphens: 'none',
		lineHeight: '1.5',
		maxHeight: 'inherit',
		msHyphens: 'none',
		overflow: 'auto',
		padding: '0',
		tabSize: '4',
		textAlign: 'left',
		whiteSpace: 'pre',
		wordBreak: 'normal',
		wordSpacing: 'normal',
		wordWrap: 'normal',
	},
	comment: {
		color: 'black',
	},
	constant: {
		color: highlight1,
	},
	deleted: {
		color: highlight1,
	},
	doctype: {
		color: 'black',
	},
	entity: {
		color: highlight3,
		cursor: 'help',
	},
	function: {
		color: highlight2,
	},
	'function-name': {
		color: highlight1,
	},
	important: {
		color: '#e90',
		fontWeight: 'normal',
	},
	inserted: {
		color: highlight2,
	},
	italic: {
		fontStyle: 'italic',
	},
	keyword: {
		color: highlight4,
	},
	namespace: {
		opacity: '.7',
	},
	number: {
		color: highlight1,
	},
	operator: {
		color: highlight3,
	},
	'pre .line-highlight': {
		marginTop: '0',
	},
	'pre[class*="language-"]': {
		MozBoxSizing: 'border-box',
		MozHyphens: 'none',
		MozTabSize: '4',
		OTabSize: '4',
		WebkitBoxSizing: 'border-box',
		WebkitHyphens: 'none',
		backgroundColor: 'transparent',
		boxSizing: 'border-box',
		color: 'black',
		fontFamily: 'inherit',
		fontSize: '1em',
		hyphens: 'none',
		lineHeight: '1.5',
		margin: '0',
		marginBottom: '1em',
		msHyphens: 'none',
		padding: '0',
		position: 'relative',
		tabSize: '4',
		textAlign: 'left',
		whiteSpace: 'pre',
		wordBreak: 'normal',
		wordSpacing: 'normal',
		wordWrap: 'normal',
	},
	'pre[class*="language-"].line-numbers.line-numbers': {
		paddingLeft: '0',
	},
	'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows': {
		left: '0',
	},
	'pre[class*="language-"].line-numbers.line-numbers code': {
		paddingLeft: '3.8em',
	},
	'pre[class*="language-"]:after': {
		MozTransform: 'rotate(2deg)',
		OTransform: 'rotate(2deg)',
		WebkitTransform: 'rotate(2deg)',
		bottom: '0.75em',
		boxShadow: '0px 13px 8px #979797',
		content: '""',
		display: 'block',
		height: '20%',
		left: 'auto',
		maxHeight: '13em',
		msTransform: 'rotate(2deg)',
		position: 'absolute',
		right: '0.75em',
		transform: 'rotate(2deg)',
		width: '40%',
		zIndex: '-2',
	},
	'pre[class*="language-"]:before': {
		MozTransform: 'rotate(-2deg)',
		OTransform: 'rotate(-2deg)',
		WebkitTransform: 'rotate(-2deg)',
		bottom: '0.75em',
		boxShadow: '0px 13px 8px #979797',
		content: '"""',
		display: 'block',
		height: '20%',
		left: '0.18em',
		maxHeight: '13em',
		msTransform: 'rotate(-2deg)',
		position: 'absolute',
		transform: 'rotate(-2deg)',
		width: '40%',
		zIndex: '-2',
	},
	'pre[class*="language-"]>code': {
		backgroundAttachment: 'local',
		backgroundColor: 'transparent',
		backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)',
		backgroundOrigin: 'content-box',
		backgroundSize: '3em 3em',
		borderLeft: '10px solid #358ccb',
		boxShadow: '-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf',
		position: 'relative',
	},
	'pre[class*="language-"][data-line]': {
		paddingBottom: '0',
		paddingLeft: '0',
		paddingTop: '0',
	},
	'pre[data-line] code': {
		paddingLeft: '4em',
		position: 'relative',
	},
	prolog: {
		color: 'black',
	},
	property: {
		color: highlight1,
	},
	punctuation: {
		color: 'black',
	},
	regex: {
		color: '#e90',
	},
	selector: {
		color: highlight2,
	},
	string: {
		color: highlight2,
	},
	symbol: {
		color: highlight1,
	},
	tag: {
		color: highlight1,
	},
	url: {
		color: highlight3,
	},
	variable: {
		color: highlight3,
	},
}

export default coy
