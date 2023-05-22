import React from "react";

const Article = ({ posts, handleCommentsClick, comments }) => {
  return (
    <div>
      <article>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleCommentsClick(post.id)}>
              See Comments
            </button>
            {comments.length > 0 && comments[0].postId === post.id && (
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <h3>{comment.name}</h3>
                    <h4>{comment.email}</h4>
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
    </div>
  );
};

export default Article;
