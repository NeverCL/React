var Hello = React.createClass({
    handleClick: function () {
        if (this.refs.tip.innerText === 'Hello')
            this.refs.tip.innerText = 'World!!';
        else
            this.refs.tip.innerText = 'Hello';
    },
    render: function () {
        return <div>
            <button onClick={this.handleClick}>Click</button>
            <span ref="tip">Hello</span>
        </div>
    }
});

ReactDOM.render(<Hello />, document.getElementById('root1'))


var Hello = React.createClass({
    getInitialState: function () {
        return {
            inputContent: ''
        };
    },
    change: function (ev) {
        this.setState({
            inputContent: ev.target.value
        })
    },
    render: function () {
        return <div>
            <input onChange={this.change} />
            <span ref="tip">{this.state.inputContent}</span>
        </div>
    }
});

ReactDOM.render(<Hello />, document.getElementById('root2'))
