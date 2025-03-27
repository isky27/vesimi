import React from "react";
import { Col, Row } from "reactstrap";
import BlogController from "./blogController";
import Loader from "../../component/Loader";

const BlogView = () => {
  const { blogsData, isLoadingBlogs } = BlogController();

  return (
    <div>
      <Loader isLoading={[isLoadingBlogs]} />
      <div className="productListinfWrap wishListSection py-4">
        <div className="container">
          <Row>
            {blogsData?.map((blog: any) => (
              <Col sm={6} lg={4}>
                <div className="blogList">
                  <figure>
                    <img src={blog?.banner} alt="blog" />
                  </figure>
                  <figcaption>
                    <h3 className="text-md-dark fs-7 my-2">{blog?.title} </h3>
                    <div dangerouslySetInnerHTML={{ __html: `<p>${blog?.short_description}</p>` }}></div>
                  </figcaption>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
