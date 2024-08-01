import CategeryCard from "component/CategeryCard";
import Carousel from "component/carousel";
import ServiceInfo from "./ServiceInfo";
import HomeController from "./homeController";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "component/ProductCard";
import ShopNowCard from "component/ShopNowCard";
import Loader from "component/Loader";
import Header from "component/headerLayout";
import CelebritySection from "component/CelebritySection";
import BlogSection from "component/BlogSection";
import ServiceSection from "component/ServiceSection";
import twitterBack from '../../assets/images/twitterBack.png';
import facebookBack from '../../assets/images/facebookBack.png'
import instagramBack from '../../assets/images/instagramBack.png';
import pinterestBack from '../../assets/images/pinterestBack.png'
import BookAppointment from "component/BookAppointment";
import { Link } from "react-router-dom";

const HomeView = () => {
  const {
    isLoadingMainSlider,
    mainSliderData,
    isLoadingTopCategory,
    topCategoryData,
    isLoadingFeatureCategory,
    featureCategoryData,
    isLoadingBestSellerProduct,
    bestSellerProductData,
    ownDesignerData,
    lovedCollectionData,
    exclusiveCollectionData,
    isLoadingCelebrityProduct,
    celebrityProductData,
    navigate,
    setSelectedPopularStyle,
    isLoadingCategoryProduct,
    categoryProductData,
    selectedPopularStyle,
  } = HomeController();

  return (
    <>
      <Header />
      <section>
        <Loader
          isLoading={[
            isLoadingMainSlider,
            isLoadingTopCategory,
            isLoadingFeatureCategory,
            isLoadingBestSellerProduct,
            isLoadingCelebrityProduct,
            isLoadingCategoryProduct
          ]}
        />

        <main className="pageMain">
          {/*slider main banner */}
          <div className="Mainslider">
            {/* Carousal */}
            {mainSliderData?.length > 0 && (
              <div className="container mainSlider">
                <Carousel
                  images={mainSliderData?.map((item: any) => item?.photo)}
                  isPath={true}
                />
              </div>
            )}

            {/* categoery section */}
            {topCategoryData?.length > 0 && (
              <section className="CTGCols mt-4">
                <div className="container">
                  <div className="row">
                    {topCategoryData?.map((item: any, index: number) => (
                      <div key={item?.icon} className="col-sm-6 col-lg-3">
                        <CategeryCard
                          imageName={item?.icon}
                          isPath={true}
                          tag={item?.name}
                          link={`/category/${item?.id}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {/* END categoery section */}

            {/* <!-- product section --> */}
            {featureCategoryData?.length > 0 && (
              <section className="productSection py-3 py-md-5">
                <div className="container">
                  <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                    <h2 className="Playfair">New Drops</h2>
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
                      {featureCategoryData?.map((item: any) => {
                        return (
                          <div key={item?.icon} className="item">
                            <CategeryCard
                              imageName={item?.icon}
                              isPath={true}
                              tag={item?.name}
                              link={`/category/${item?.id}`}
                            />
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              </section>
            )}

            <section className="productSection py-3">
              <div className="container">
                <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                  <h2 className="Playfair">Popular Styles </h2>
                  <Link
                    to={`/category/${selectedPopularStyle}`}
                    className="text-uparcase"
                  >
                    VIEW ALL
                  </Link>
                </div>

                <div className="productSliderWrap">
                  <ul
                    className="nav nav-tabs themeTabsStyle mb-3 mb-md-4"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        id="all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#All"
                        type="button"
                        role="tab"
                        aria-controls="all"
                        aria-selected="true"
                        onClick={() => setSelectedPopularStyle("5")}
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="woman-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Woman"
                        type="button"
                        role="tab"
                        aria-controls="woman"
                        aria-selected="false"
                        onClick={() => setSelectedPopularStyle("1412")}
                      >
                        Woman
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="man-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Mans"
                        type="button"
                        role="tab"
                        aria-controls="man"
                        aria-selected="false"
                        onClick={() => setSelectedPopularStyle("1342")}
                      >
                        Man
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="kids-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Kids"
                        type="button"
                        role="tab"
                        aria-controls="kids"
                        aria-selected="false"
                        onClick={() => setSelectedPopularStyle("1389")}
                      >
                        Kids
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="accessories-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Accessories"
                        type="button"
                        role="tab"
                        aria-controls="accessories"
                        aria-selected="false"
                        onClick={() => setSelectedPopularStyle("1407")}
                      >
                        Accessories
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {[
                      { id: "All", ariaLabel: "all-tab" },
                      { id: "Woman", ariaLabel: "woman-tab" },
                      { id: "Mans", ariaLabel: "man-tab" },
                      { id: "Kids", ariaLabel: "kids-tab" },
                      { id: "Accessories", ariaLabel: "accessories-tab" },
                    ].map((item: any, index: number) => (
                      <div
                        key={item.id}
                        className={`tab-pane fade ${
                          index === 0 ? "show active" : ""
                        }`}
                        id={item.id}
                        role="tabpanel"
                        aria-labelledby={item.ariaLabel}
                      >
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
                          {categoryProductData?.data?.map((prod: any) => (
                            <ProductCard
                              price={prod?.main_price}
                              imageName={prod?.thumbnail_image}
                              isPath={true}
                              tag={prod?.name}
                              link={`/products/${prod?.id}`}
                              subTag={prod?.name}
                            />
                          ))}
                        </OwlCarousel>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {exclusiveCollectionData?.length > 0 && (
              <section className="productSection py-3 py-md-4">
                <div className="container">
                  <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                    <h2 className="Playfair">Exclusive Collections</h2>
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
                      {exclusiveCollectionData?.map((item: any) => {
                        return (
                          <div key={item?.id} className="item">
                            <CategeryCard
                              imageName={item?.banner}
                              isPath={true}
                              tag={item?.name}
                              link={`/category/${item?.id}`}
                            />
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              </section>
            )}

            {lovedCollectionData?.length > 0 && (
              <section className="productSection py-3 py-md-4">
                <div className="container">
                  <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                    <h2 className="Playfair">Most Loved Collections</h2>
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
                      {lovedCollectionData?.map((item: any) => {
                        return (
                          <div className="item" key={item?.id}>
                            <CategeryCard
                              imageName={item?.banner}
                              isPath={true}
                              tag={item?.name}
                              link={`/category/${item?.id}`}
                            />
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              </section>
            )}

            {ownDesignerData?.length > 0 && (
              <section className="productSection py-3 py-md-4">
                <div className="container">
                  <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                    <h2 className="Playfair">Must Own Designers</h2>
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
                      {ownDesignerData?.map((item: any) => {
                        return (
                          <div key={item?.id} className="item">
                            <CategeryCard
                              imageName={item?.banner}
                              isPath={true}
                              tag={item?.name}
                              link={`/category/${item?.id}`}
                            />
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              </section>
            )}

            <section className="productSection py-3 py-md-4">
              <div className="container">
                <picture>
                  <a href="/">
                    <img
                      src={require("assets/images/bannerShape.avif")}
                      alt=""
                    />
                  </a>
                </picture>
              </div>
            </section>
          </div>
          {/* --------Celebrity Section */}
          <CelebritySection
            navigate={navigate}
            celebrityProductData={celebrityProductData}
          />

          <BlogSection />
          {/* <!-- product section --> */}

          <section className="productSection py-3 py-md-4">
            <div className="container">
              <div className="fullscreen fullwidth clearfix">
                <div
                  style={{ width: "25%", float: "left", position: "relative" }}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="twitter"
                    href="https://twitter.com/_VESIMI/"
                  >
                    <img
                      className="img img-responsive"
                      style={{ width: "100%" }}
                      title="twitter"
                      src={twitterBack}
                      alt="twitter"
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        right: "0",
                        top: "50%",
                        textAlign: "center",
                        background: "#00B3CE",
                        color: "#ffffff",
                        fontVariant: "small-caps",
                        transform: "translateY(-50%)",
                        padding: "10px 0",
                        opacity: ".8",
                        fontSize: "20px",
                      }}
                    >
                      Twitter
                    </div>
                  </a>
                </div>
                <div
                  style={{ width: "25%", float: "left", position: "relative" }}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="facebook"
                    href="https://www.facebook.com/VESIMI/"
                  >
                    <img
                      className="img img-responsive"
                      style={{ width: "100%" }}
                      title="facebook"
                      src={facebookBack}
                      alt="facebook"
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        right: "0",
                        top: "50%",
                        textAlign: "center",
                        background: "#0D3B6B",
                        color: "#ffffff",
                        fontVariant: "small-caps",
                        transform: "translateY(-50%)",
                        padding: "10px 0",
                        opacity: ".8",
                        fontSize: "20px",
                      }}
                    >
                      Facebook
                    </div>
                  </a>
                </div>
                <div
                  style={{ width: "25%", float: "left", position: "relative" }}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="instagram"
                    href="https://www.instagram.com/vesimi/?hl=en"
                  >
                    <img
                      className="img img-responsive"
                      style={{ width: "100%" }}
                      title="instagram"
                      src={instagramBack}
                      alt="instagram"
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        right: "0",
                        top: "50%",
                        textAlign: "center",
                        background: "#E3488C",
                        color: "#ffffff",
                        fontVariant: "small-caps",
                        transform: "translateY(-50%)",
                        padding: "10px 0",
                        opacity: ".8",
                        fontSize: "20px",
                      }}
                    >
                      Instagram
                    </div>
                  </a>
                </div>
                <div
                  style={{ width: "25%", float: "left", position: "relative" }}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="pinterest"
                    href="https://www.pinterest.com/VESIMII/"
                  >
                    <img
                      className="img img-responsive"
                      style={{ width: "100%" }}
                      title="pinterest"
                      src={pinterestBack}
                      alt="pinterest"
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        right: "0",
                        top: "50%",
                        textAlign: "center",
                        background: "#bd081c",
                        color: "#ffffff",
                        fontVariant: "small-caps",
                        transform: "translateY(-50%)",
                        padding: "10px 0",
                        opacity: ".8",
                        fontSize: "20px",
                      }}
                    >
                      Pinterest
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <ServiceSection />

          <BookAppointment />

          <ServiceInfo />
        </main>
      </section>
    </>
  );
};

export default HomeView;
