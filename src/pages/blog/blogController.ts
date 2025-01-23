import { useEffect } from "react";
import { getBlogs } from "store/home/home.slice";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";

const BlogController = () => {

const dispatch = useAppDispatch();
const { blogsData, isLoadingBlogs } = useAppSelector((state:any) => state.home);

useEffect(()=>{
    dispatch(getBlogs())
}, [dispatch])

  return {
    blogsData,
    isLoadingBlogs
  };
}

export default BlogController;
