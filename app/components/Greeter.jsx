var React = require('react');
var GreeterMessage = require('app/components/GreeterMessage');
var GreeterForm = require('app/components/GreeterForm');

var Greeter = React.createClass({

    getDefaultProps: function () {
        return {
            name: 'Default name',
            message: 'Default message',
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message,
        };
    },

    handleNewName: function (newName) {
        this.setState({
            name: newName
        });
    },
    handleNewMessage: function (newMessage) {
        this.setState({
            message: newMessage
        });
    },

    // This is what's rendered to the screen for every greeter instance
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        // The actual div that's going to be compiled to JS and rendered to html on a webpage
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
            </div>
        );
    },
});

module.exports = Greeter;
