import Drop1 from '../assets/images/Drops1.avif'
import Drop2 from '../assets/images/Drops2.avif'
import Drop3 from '../assets/images/Drops3.avif'
import Drop4 from '../assets/images/Drops4.avif'
import OwlCarousel from "react-owl-carousel";


const CelebritySection = ({ celebrityProductData, navigate }: any) => {
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
            {celebrityProductData?.map((item: any) => (
              <div className="item" key={item?.id}>
                <div className="productCols">
                  <button
                    onClick={() => navigate(`/category/${item?.id}`)}
                    className="text-decoration-none text-md-dark border-0 p-0 m-0"
                  >
                    <picture>
                      <img src={item?.icon} alt="ankita lokhande" />
                    </picture>
                    <div className="text-center captionOverlay">
                      <h3 className="text-uparcase fs-7 text-black Playfair">
                        {item?.name}
                      </h3>
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