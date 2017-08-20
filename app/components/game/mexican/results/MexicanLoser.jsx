import React from 'react';
import {Link, IndexLink} from 'react-router';

class MexicanLoser extends React.Component {

    render() {

        return (
            <div className="mexican-loser">
                <h2>{this.props.stake} ⟶ {this.props.name}</h2>
            </div>
        )
    }
}

module.exports = MexicanLoser;
