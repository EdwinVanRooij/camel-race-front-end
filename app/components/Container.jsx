import React from 'react';
import Nav from 'Nav';


class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: new WebSocket('ws://192.168.5.115:8082/host')
        };
    }

    componentDidMount() {
        this.state.ws.onopen = () => {
            this.state.ws.send("Connected from React");
        };

        this.state.ws.onmessage = (event) => {
            const obj = JSON.parse(event.data);

            this.setState({
                gameId: obj.id
            })
        };
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                // ws: ws
                ws: 'Test'
            });
        })
    }

    render() {

        return (
            <div>
                <Nav/>
                {this.renderChildren()}
            </div>
        )
    }
}

module.exports = Container;