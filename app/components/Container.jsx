import React from 'react';
import Nav from 'Nav';


class Container extends React.Component {


    render() {

        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                doSomething: this.doSomething
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