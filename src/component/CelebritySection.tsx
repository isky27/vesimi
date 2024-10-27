import OwlCarousel from "react-owl-carousel";

const CelebritySection = ({ productData, navigate }: any) => {
  return (
    <section className="productSection py-3 py-md-4 bg-light-yellow">
      <div className="container">
        <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
          <h2 className="Playfair fs-2 fw-bold text-black">Celebrity Style </h2>
          <a href="/" className="text-uparcase">
            VIEW ALL
          </a>
        </div>

        <div className="productSliderWrap">
          <OwlCarousel
            className="owl-theme productSlider"
            loop
            margin={10}
            nav
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
            {productData?.map((item: any) => (
              <div className="item" key={item?.id}>
                <div className="productCols">
                  <button
                    onClick={() => navigate(`/products/${item?.id}`)}
                    className="text-decoration-none text-md-dark border-0 p-0 m-0"
                  >
                    <picture>
                      <img src={item?.thumbnail_image} alt="ankita lokhande" />
                    </picture>
                    <div className="text-center captionOverlay">
                      <h3 className="text-uparcase fs-7 text-black Playfair">
                        {item?.designer}
                      </h3>
                      <p className="text-gray ">{item?.name}</p>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default CelebritySection