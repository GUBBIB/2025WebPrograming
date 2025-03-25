import React from "react";

class NotificationJ extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount() called.");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate() called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount() called.");
    }

    render() {
        return <div>{this.props.message}</div>;
    }
}
export default NotificationJ;