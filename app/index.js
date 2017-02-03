class MarkdownEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.rawMarkup = this.rawMarkup.bind(this);
		this.state = {
			value: 'Type some *markdown* here!',
		}
	}
	handleChange() {
		this.setState({value: this.refs.textarea.value});
	}
	rawMarkup() {
		const md = new Remarkable();
		return { __html: md.render(this.state.value) };
	}
	render() {
		return (
			<div className="MarkdownEditor">
				<h3>Input</h3>
				<textarea
					onChange={this.handleChange}
					ref="textarea"
					defaultValue={this.state.value} />
				<h3>Output</h3>
				<div
					className="content"
					dangerouslySetInnerHTML={this.rawMarkup()}
				/>
			</div>
		);
	}
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('app'));
