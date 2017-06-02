var React = require('react');
var Nav = require('Nav');

var Container = React.createClass({
    render: function () {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Container;