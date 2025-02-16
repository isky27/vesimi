import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const BlogSection = ({ data }: any) => {
  return (
    <section className="productSection py-3 py-md-4 blogSection">
      <div className="container">
        <div className="productHead text-center  mb-md-4">
          <h2 className="Playfair fs-3 text-black">Our Blog </h2>
          <p>A curated set of blog articles from Vesimi’s in-house experts </p>
        </div>

        <div className="productSliderWrap">
          <div className="row">
            <OwlCarousel
              className="owl-theme productSlider"
              margin={10}
              nav={true}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 3,
                },
                1000: {
                  items: 4,
                },
              }}
            >
               {data?.map((blog: any) => (
                <div className="position-relative">
                  <picture>
                    <img src={blog?.banner} alt="" />
                  </picture>
                  <div className="py-2">
                    <h3 className="text-md-dark fs-7 my-2">{blog?.title} </h3>
                    <div dangerouslySetInnerHTML={{ __html: `<p>${blog?.short_description}</p>` }}></div>
                    {/* <Link
                      to="/"
                      className="font-semibold text-md-dark fs-7 fw-light text-decoration-none"
                    >
                      Read More
                    </Link> */}
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          to="/blog"
          className="bg-themered px-5 py-2 text-decoration-none text-white"
          style={{ fontSize: "12px" }}
        >
          GO TO BLOGS
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
