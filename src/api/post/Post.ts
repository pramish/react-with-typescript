import { useMutation, useQuery } from "react-query";

const BASE_URL = process.env.REACT_APP_POST_BASE_URL;

// Add according to what your project needs
type useFetchPostsData = {
  authorizationtoken: string;
};

// GET
export const useFetchPosts = ({ authorizationtoken }: useFetchPostsData) => {
  const fetchPosts = async () => {
    const fetchPostResponse = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorizationtoken,
      },
    });
    return fetchPostResponse.json();
  };

  return useQuery("posts", fetchPosts);
};

// Add according to what your project needs
type useSubmitPostsData = {
  authorizationtoken: string;
  title: string;
  description: string;
};
// POST
export const useSubmitPosts = ({
  authorizationtoken,
  title,
  description,
}: useSubmitPostsData) => {
  const submitPost = async () => {
    const fetchSubmitPostResponse = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorizationtoken,
      },
      body: JSON.stringify({ title, description }),
    });
    return fetchSubmitPostResponse.json();
  };

  return useMutation("posts", submitPost);
};
