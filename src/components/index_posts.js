import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import _ from "lodash";

class IndexPosts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

    renderPosts() {
        return _.map(this.props.posts, (post) => {
            return (
                <li className="group-list-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(IndexPosts);
