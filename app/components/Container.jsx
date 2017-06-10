import React from 'react';
import Nav from 'Nav';


class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: new WebSocket('ws://192.168.5.115:8082/host'),
        };
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                ws: this.state.ws
            })
        );

        return (
            <div>
                <Nav/>

                {childrenWithProps}
            </div>
        )
    }
}

module.exports = Container;