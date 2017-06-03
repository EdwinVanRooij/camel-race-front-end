var React = require('react');

var Rules = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Title not filled in',
        };
    },
    render: function () {

        var title = this.props.title;

        return (
            <div>
                <h1 className="text-center page-header">{title}</h1>
            </div>
        );
    }
});

module.exports = Rules;
