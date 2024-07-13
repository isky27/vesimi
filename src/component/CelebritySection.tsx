const CelebritySection = () => {
  return (
    <section className="productSection py-3 py-md-4 bg-light-yellow">
    <div className="container">
      <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
        <h2 className="Playfair fs-2 fw-bold text-black">Celebrity Style </h2>
        <a href="#" className="text-uparcase">VIEW ALL</a>
      </div>

      <div className="productSliderWrap">
        <div className="owl-carousel owl-theme productSlider">
          <div className="item">
            <div className="productCols position-relative">
              <span className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                style={{backgroundPosition: "-147px -158px", width:"24px", height:"24px"}}></span>
              <a href="#" className="text-decoration-none text-md-dark">
                <picture><img src={require("assets/images/Drops4.avif")} alt="ankita lokhande" /></picture>
                <div className="text-center captionOverlay">
                  <h3 className="text-uparcase fs-7 text-black Playfair">Ankita Lokhande</h3>
                  <small className="font-semibold fs-7 text-black"><small>in</small>Mandira
                    Wirk</small>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <div className="productCols position-relative">
              <span className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                style={{backgroundPosition: "-147px -158px", width:"24px", height:"24px"}}></span>
              <a href="#" className="text-decoration-none text-md-dark">
                <picture><img src="images/Drops3.avif" alt="" /></picture>
                <div className="text-center captionOverlay">
                  <h3 className="text-uparcase fs-7 text-black Playfair">Ankita Lokhande</h3>
                  <small className="font-semibold fs-7 text-black"><small>in</small>Mandira
                    Wirk</small>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <div className="productCols position-relative">
              <span className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                style={{backgroundPosition: "-147px -158px", width:"24px", height:"24px"}}></span>
              <a href="#" className="text-decoration-none text-md-dark">
                <picture><img src="images/Drops2.avif" alt="" /></picture>
                <div className="text-center captionOverlay">
                  <h3 className="text-uparcase fs-7 text-black Playfair">Ankita Lokhande</h3>
                  <small className="font-semibold fs-7 text-black"><small>in</small>Mandira
                    Wirk</small>
                </div>
              </a>
            </div>
          </div>

          <div className="item">
            <div className="productCols position-relative">
              <span className="bg-image d-inline-block position-absolute top-0 end-0 m-3"
                style={{backgroundPosition: "-147px -158px", width:"24px", height:"24px"}}></span>
              <a href="#" className="text-decoration-none text-md-dark">
                <picture><img src="images/Drops1.avif" alt="" /></picture>
                <div className="text-center captionOverlay">
                  <h3 className="text-uparcase fs-7 text-black Playfair">Ankita Lokhande</h3>
                  <small className="font-semibold fs-7 text-black"><small>in</small>Mandira
                    Wirk</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
  )
}

export default CelebritySection