//! პოსტები
export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

//! კომენტარები
export const fetchComments = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return [];
  }
};
