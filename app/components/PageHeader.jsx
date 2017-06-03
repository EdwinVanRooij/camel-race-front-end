var React = require('react');

class Rules extends React.Component{

    render (){

        var title = this.props.title;

        return (
            <div>
                <h1 className="text-center page-header">{title}</h1>
            </div>
        );
    }
}

module.exports = Rules;
