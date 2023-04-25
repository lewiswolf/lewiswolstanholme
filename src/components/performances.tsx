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

	return (
		<div className='performances'>
			<main className='performances'>
				{Object.keys(future) ? (
					<>
						<h2>Future</h2>
						{Object.keys(future).map((key: string) => [
							...[<h3 children={key} key={key} />],
							...future[parseInt(key)]!.reverse().map(
								(p: PerformanceJSON, i: number) => Event(p, i),
							),
						])}
					</>
				) : (
					<></>
				)}
				<h2>Past</h2>
				{Object.keys(past)
					.reverse()
					.map((key: string) => [
						...[<h3 children={key} key={key} />],
						...past[parseInt(key)]!.map((p: PerformanceJSON, i: number) => Event(p, i)),
					])}
			</main>
		</div>
	)
}
