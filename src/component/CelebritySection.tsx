import Drop1 from '../assets/images/Drops1.avif'
import Drop2 from '../assets/images/Drops2.avif'
import Drop3 from '../assets/images/Drops3.avif'
import Drop4 from '../assets/images/Drops4.avif'
import OwlCarousel from "react-owl-carousel";


const CelebritySection = () => {

  return (
    <section className="productSection py-3 py-md-4 bg-light-yellow">
      <div className="container">
        <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
          <h2 className="Playfair fs-2 fw-bold text-black">Celebrity Style </h2>
          <a href="#" className="text-uparcase">
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
            <div className="item">
              <div className="productCols position-relative">
                <span
                  className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                  style={{
                    backgroundPosition: "-147px -158px",
                    width: "24px",
                    height: "24px",
                  }}
                ></span>
                <a href="#" className="text-decoration-none text-md-dark">
                  <picture>
                    <img src={Drop4} alt="ankita lokhande" />
                  </picture>
                  <div className="text-center captionOverlay">
                    <h3 className="text-uparcase fs-7 text-black Playfair">
                      Ankita Lokhande
                    </h3>
                    <small className="font-semibold fs-7 text-black">
                      <small>in</small>Mandira Wirk
                    </small>
                  </div>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="productCols position-relative">
                <span
                  className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                  style={{
                    backgroundPosition: "-147px -158px",
                    width: "24px",
                    height: "24px",
                  }}
                ></span>
                <a href="#" className="text-decoration-none text-md-dark">
                  <picture>
                    <img src={Drop3} alt="" />
                  </picture>
                  <div className="text-center captionOverlay">
                    <h3 className="text-uparcase fs-7 text-black Playfair">
                      Ankita Lokhande
                    </h3>
                    <small className="font-semibold fs-7 text-black">
                      <small>in</small>Mandira Wirk
                    </small>
                  </div>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="productCols position-relative">
                <span
                  className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                  style={{
                    backgroundPosition: "-147px -158px",
                    width: "24px",
                    height: "24px",
                  }}
                ></span>
                <a href="#" className="text-decoration-none text-md-dark">
                  <picture>
                    <img src={Drop2} alt="" />
                  </picture>
                  <div className="text-center captionOverlay">
                    <h3 className="text-uparcase fs-7 text-black Playfair">
                      Ankita Lokhande
                    </h3>
                    <small className="font-semibold fs-7 text-black">
                      <small>in</small>Mandira Wirk
                    </small>
                  </div>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="productCols position-relative">
                <span
                  className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                  style={{
                    backgroundPosition: "-147px -158px",
                    width: "24px",
                    height: "24px",
                  }}
                ></span>
                <a href="#" className="text-decoration-none text-md-dark">
                  <picture>
                    <img src={Drop1} alt="" />
                  </picture>
                  <div className="text-center captionOverlay">
                    <h3 className="text-uparcase fs-7 text-black Playfair">
                      Ankita Lokhande
                    </h3>
                    <small className="font-semibold fs-7 text-black">
                      <small>in</small>Mandira Wirk
                    </small>
                  </div>
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default CelebritySection