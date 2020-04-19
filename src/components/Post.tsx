import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const Post = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <p>Title: {data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

const fetcher = (url) => fetch(url).then((r) => r.json());

export default Post;
