import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      // handle success
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="post-title">
                <h5>{post.title}</h5>
              </span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">
        <p>....post not in yet</p>
      </div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}
export default Home;
