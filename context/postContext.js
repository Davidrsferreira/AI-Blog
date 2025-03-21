import React, { useCallback, useState } from "react";

const PostContext = React.createContext();

export default PostContext;

export const PostProvider = ({ children }) => {
  const [posts, setPost] = useState([]);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const deletePost = useCallback((postId) => {
    setPost((value) => {
      const newPosts = [];
      value.forEach((post) => {
        if (post._id !== postId) {
          newPosts.push(post);
        }
      });
      return newPosts;
    });
  }, []);

  const setPostsFromSSR = useCallback((postsFromSSR = []) => {
    setPost((value) => {
      const newPosts = [...value];
      postsFromSSR.forEach((post) => {
        if (!newPosts.find((p) => p._id === post._id)) {
          newPosts.push(post);
        }
      });
      return newPosts;
    });
  }, []);

  const getPosts = useCallback(
    async ({ lastPostDate, getNewerPosts = false }) => {
      const result = await fetch("/api/getPosts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lastPostDate, getNewerPosts }),
      });

      const data = await result.json();
      const postsResult = data.posts || [];

      if (postsResult.length < 5) {
        setNoMorePosts(true);
      }

      setPost((value) => {
        const newPosts = [...value];
        postsResult.forEach((post) => {
          if (!newPosts.find((p) => p._id === post._id)) {
            newPosts.push(post);
          }
        });
        return newPosts;
      });
    },
    []
  );

  return (
    <PostContext.Provider
      value={{ posts, setPostsFromSSR, getPosts, noMorePosts, deletePost }}
    >
      {children}
    </PostContext.Provider>
  );
};
