import React, { Component } from 'react'

const exampleInput = `id: Int
transactionId: Int
storeId: Int!
transactionDate: Datetime!
totalQuantity: Int!
createdAt: Datetime
updatedAt: Datetime
`

export default class Root extends Component {
	constructor(props) {
		super(props)
		this.state = { input: '', filters: [] }

		this.onFilterChange = this.onFilterChange.bind(this)
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.input !== this.state.input) {
			const filters = getFilters(this.state.input)
			this.setState({ filters })
		}
	}

	onFilterChange(event) {
		const name = event.target.name

		if (this.state.filters.indexOf(name) > -1) {
			// If Checked
			this.setState({ filters: this.state.filters.filter(val => val !== name) })
		} else {
			this.setState({ filters: [...this.state.filters, name] })
		}
	}

	render() {
		return (
			<div>
				<h3>Paste the Schema on the left panel</h3>
				<p>Example Input:</p>
				<code>
					<pre>{exampleInput}</pre>
				</code>
				<div style={{ display: 'flex', flexDirection: 'row', height: '50vh' }}>
					<textarea
						value={this.state.input}
						onChange={e => {
							this.setState({ input: e.target.value })
						}}
						style={{ flex: '1 1 0' }}
					/>
					<div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column' }}>
						<h4 style={{ margin: 0 }}>Param</h4>
						<textarea
							style={{ flex: '1 1 0' }}
							value={getParam(this.state.input, this.state.filters || [])}
							readOnly
						/>
						<h4 style={{ margin: 0 }}>Parent Param</h4>
						<textarea
							style={{ flex: '1 1 0' }}
							value={getParentParam(this.state.input, this.state.filters || [])}
							readOnly
						/>
					</div>
				</div>
				<div>
					<h2>Filter</h2>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{getFilters(this.state.input).map((name, i) => (
							<label key={`filter_${i}`}>
								{name}
								<input
									name={name}
									type="checkbox"
									onChange={this.onFilterChange}
									checked={this.state.filters.indexOf(name) > -1}
								/>
							</label>
						))}
					</div>
				</div>
			</div>
		)
	}
}

const validLineRegex = /(.+): (.+)!?/

const reduceRemoveIfFalse = (acc, val) => (!!val ? [...acc, val] : acc)

const parseInput = input => {
	return input
		.split('\n')
		.map(line => {
			const match = line.match(validLineRegex)

			return match || false
		})
		.reduce(reduceRemoveIfFalse, [])
}

const getParam = (input, filter) => {
	return parseInput(input)
		.filter(match => filter.indexOf(match[1]) > -1)
		.map(match => `${match[1]}: $${match[1]}`)
		.join(`, `)
}

const getParentParam = (input, filter) => {
	return parseInput(input)
		.filter(match => filter.indexOf(match[1]) > -1)
		.map(match => `$${match[1]}: ${match[2]}`)
		.join(`, `)
}

const getFilters = input => {
	return parseInput(input).map(match => match[1])
}
