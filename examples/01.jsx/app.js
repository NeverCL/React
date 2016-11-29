ReactDOM.render(React.createElement('h1', null, 'Hello, world!'), document.getElementById('root'))

ReactDOM.render(<h1>Hello1</h1>, document.getElementById('root1'))

var Hello = React.createClass({
    render: function() {
        return <h1>Hello World2!</h1>
    }
});
ReactDOM.render(<Hello />, document.getElementById('root2'))


var Hello = React.createClass({
    render: function() {
        return <h1>Hello {this.props.title}3!</h1>
    }
});
ReactDOM.render(<Hello title="World"/>, document.getElementById('root3'))