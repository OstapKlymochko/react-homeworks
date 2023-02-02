import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);
        this.state = null;
    }
    render() {
        const {id, title} = this.props.post;
        return(
            <h3>{id} {title}</h3>
        )
    }
}

export {
    Post
}