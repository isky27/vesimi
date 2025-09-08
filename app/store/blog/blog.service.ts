import axios from "axios";

const getBlogs = async () => {
  const response = await axios.get("/blogs");
  return response.data;
};

export const blogService = {
  getBlogs,
};
