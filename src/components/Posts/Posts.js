import {Component} from "react";

import {Post} from "../Post/Post";
import {postsServices} from "../../services/postsServices";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts:[]};
    }
    // componentDidMount() {
    //     this.getPosts();
    // }

    componentDidMount() {
        postsServices.getAll().then(({data}) => this.setState({posts:[...data]}));
    }
    render() {
        // this.getPosts();
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export {Posts}