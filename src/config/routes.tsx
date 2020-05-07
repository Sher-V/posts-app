import React from "react";
import Login from "../components/Login";
import Posts from "../components/Posts";
import Post from "../components/Post";

interface IRoute {
  path: string;
  exact: boolean;
  component: React.ComponentType;
}

interface IRoutes {
  public: IRoute[];
  private: IRoute[];
}

const routes: IRoutes = {
  public: [
    {
      path: "/",
      exact: true,
      component: Login,
    },
    {
      path: "/login",
      exact: true,
      component: Login,
    },
  ],
  private: [
    {
      path: "/posts",
      exact: true,
      component: Posts,
    },
    {
      path: "/posts/:id",
      exact: false,
      component: Post,
    },
  ],
};

export default routes;
