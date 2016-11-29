var Hello = React.createClass({
    getDefaultProps: function () {
        console.log('getDefaultProps')
        return {
            initialDate: new Date()
        }
    },
    getInitialState: function () {
        console.log('getInitialState');
        return { isOK: true };
    },
    componentWillMount: function () {
        console.log('componentWillMount')
    },
    componentDidMount: function () {
        //this.getDOMNode()
        console.log('componentDidMount')
    },
    handleClick: function () {
        console.log('handleClick')
    },
    render: function () {
        return <h1 onClick={this.handleClick}>Hello{this.props.children + this.props.initialDate} {this.state.isOK && 'Test'}</h1>
    }
});

ReactDOM.render(<Hello>你好！</Hello>, document.getElementById('root1'))


var Hello = React.createClass({
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps')
    },
    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate');
        return true;
    },
    componentWillMount: function () {
        console.log('componentWillMount')
    },
    componentDidMount: function () {
        console.log('componentDidMount')
    },
    handleClick: function () {
        this.setState({
            isOK: true
        });
        console.log('handleClick')
    },
    render: function () {
        return <h1 onClick={this.handleClick} >Hello{this.props.children}2！</h1>
    }
});

ReactDOM.render(<Hello>你好！</Hello>, document.getElementById('root2'))



var Hello = React.createClass({
    componentWillUnmount: function () {
        //todo 未执行
        console.log('componentWillUnmount');
    },
    handleClick: function (e) {
        document.getElementById('root3').removeChild(e.target);
        // e.target.remove();
    },
    render: function () {
        return <h1 onClick={this.handleClick} >Hello{this.props.children}3！</h1>
    }
});

ReactDOM.render(<Hello>你好！</Hello>, document.getElementById('root3'))





