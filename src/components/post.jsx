//! ვარიანტი 1
import React, { Component } from "react";
import { fetchPosts, fetchComments } from "./../api/posts.js";
import Article from "./postsArticle.jsx";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchPostsData();
  }

  fetchPostsData = async () => {
    try {
      const postsData = await fetchPosts();
      this.setState({ posts: postsData });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  fetchCommentsData = async (postId) => {
    try {
      const commentsData = await fetchComments(postId);
      this.setState({ comments: commentsData });
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error);
    }
  };

  handleCommentsClick = async (postId) => {
    if (postId === this.state.activePostId) {
      this.setState({ comments: [], activePostId: null });
    } else {
      await this.fetchCommentsData(postId);
      this.setState({ activePostId: postId });
    }
  };

  render() {
    const { posts, comments } = this.state;

    return (
      <Article
        posts={posts}
        handleCommentsClick={this.handleCommentsClick}
        comments={comments}
      />
    );
  }
}

export { PostList };

// //! ვარიანტი 2
// import React, { useState, useEffect } from "react";
// import { fetchPosts, fetchComments } from "./../api/posts.js";
// import Article from "./postsArticle.jsx";

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const postsData = await fetchPosts();
//         setPosts(postsData);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCommentsClick = async (postId) => {
//     if (comments.length > 0 && comments[0].postId === postId) {
//       setComments([]);
//     } else {
//       try {
//         const commentsData = await fetchComments(postId);
//         setComments(commentsData);
//       } catch (error) {
//         console.error(`Error fetching comments for post ${postId}:`, error);
//       }
//     }
//   };

//   return (
//     <Article
//       posts={posts}
//       handleCommentsClick={handleCommentsClick}
//       comments={comments}
//     />
//   );
// };

// export { PostList };
