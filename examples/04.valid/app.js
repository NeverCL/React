import React from '../../scripts/react';
import ReactDOM from '../../scripts/react-dom';

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