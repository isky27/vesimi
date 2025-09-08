'use client';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/redux.hooks";
import { getBlogs } from "../store/blog/blog.slice";

const BlogController = () => {
  const dispatch = useAppDispatch();
  const { blogs, isLoading } = useAppSelector((state: any) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return {
    blogsData: blogs,
    isLoadingBlogs: isLoading,
  };
};

export default BlogController;
