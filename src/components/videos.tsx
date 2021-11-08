import React from 'react'

type VideosJSON = {
	hash: string
	title: string
}

interface State {
	json: VideosJSON[]
}

export default class Videos extends React.Component<{}, State> {
	constructor() {
		super({})
		this.state = {
			json: [],
		}
	}

	componentDidMount(): void {
		fetch(`${process.env.PUBLIC_URL}/config/videos.json`)
			.then((res: Response) => res.json())
			.then((json: VideosJSON[]) => this.setState({ json }))
	}

	render(): JSX.Element {
		return (
			<main className='videos'>
				{this.state.json.map((obj: VideosJSON, i: number): JSX.Element => {
					return (
						<iframe
							key={i}
							title={obj.title}
							src={`https://www.youtube-nocookie.com/embed/${obj.hash}?theme=dark&color=white`}
							frameBorder={0}
							allow='accelerometer; autoplay; encrypted-media; gyroscope;'
							allowFullScreen={true}
						/>
					)
				})}
			</main>
		)
	}
}
