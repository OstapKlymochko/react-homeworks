import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = null;
    }
    render() {
    const {id,name} = this.props.comment;
    return(
        <div><h3>{id}. {name}</h3></div>
    )
    }
}

export {
    Comment
}