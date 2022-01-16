import { useMutation } from "react-query";

import { useSubmitPosts } from "../../api/post";

export const useMutateCreatePosts = () => {
  return useMutation(useSubmitPosts);
};
