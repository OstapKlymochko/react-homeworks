import {Component} from "react";

import {commentsServices} from "../../services/commentsServices";
import {Comment} from "../Comment/Comment";


class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {comments:[]};
    }
    componentDidMount() {
        commentsServices.getAll().then(({data}) => this.setState({comments:[...data]}));
    }

    render() {
        return(
            <div>
                <h1>Comments</h1>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )

    }
}
export {Comments}