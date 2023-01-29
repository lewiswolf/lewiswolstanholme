import { performances, PerformanceJSON } from '../config/performances'

function Event(o: PerformanceJSON, i: number): JSX.Element {
	return (
		<div key={i}>
			<p>
				<time dateTime={o.date.toDateString()}>
					{`
				${(1e2 + o.date.getDate() + '').slice(-2)}
				${
					[
						'january',
						'february',
						'march',
						'april',
						'may',
						'june',
						'july',
						'august',
						'september',
						'october',
						'november',
						'december',
					][o.date.getMonth()]
				}`}
				</time>
				<b>{` ${o.artist} `}</b>
				<i>{`${o.event}, `}</i>
				{` ${o.venue}`}
			</p>
		</div>
	)
}

export default function Performances(): JSX.Element {
	// sort and split performancejson into 2 arrays
	let future: { [key: number]: PerformanceJSON[] } = {}
	let past: { [key: number]: PerformanceJSON[] } = {}
	// constructor for object[year]
	const constructObjects = (
		obj: { [key: number]: PerformanceJSON[] },
		entry: PerformanceJSON,
	) => {
		let year: number = entry.date.getFullYear()
		if (obj[year]) {
			obj[year]!.push(entry)
		} else {
			obj[year] = [entry]
		}
	}
	// first sort all the dates
	performances.sort(
		(a: PerformanceJSON, b: PerformanceJSON) => b.date.getTime() - a.date.getTime(),
	)
	// split each performance into future or past, and build yearly array
	for (let p of performances) {
		if (p.date.getTime() > Date.now()) {
			constructObjects(future, p)
		} else {
			constructObjects(past, p)
		}
	}
	// lambda to create both past and future
	function renderObject(str: string, obj: { [key: number]: PerformanceJSON[] }): JSX.Element {
		return (
			<>
				{<h4 children={str} />}
				{Object.keys(obj)
					.reverse()
					.map((key: string) => [
						...[<h4 children={key} key={key} />],
						...obj[parseInt(key)]!.map((o: PerformanceJSON, i: number) => Event(o, i)),
					])}
			</>
		)
	}

	return (
		<div className='performances'>
			{Object.keys(future).length ? renderObject('Future Performances', future) : <></>}
			{renderObject('Past Performances', past)}
		</div>
	)
}
