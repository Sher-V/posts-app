import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useSWR from "swr";

const Posts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  const { url } = useRouteMatch();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((post, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p>Title: {post.title}</p>
          <Link to={`${url}/${post.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

const fetcher = (url) => fetch(url).then((r) => r.json());

export default Posts;
