import CategeryCard from "component/CategeryCard";
import Carousel from "component/carousel";
import ServiceInfo from "./ServiceInfo";
import HomeController from "./homeController";
import OwlCarousel from "react-owl-carousel";
import Loader from "component/Loader";
import CelebritySection from "component/CelebritySection";
import BlogSection from "component/BlogSection";
import ServiceSection from "component/ServiceSection";
import twitterBack from '../../assets/images/twitterBack.png';
import facebookBack from '../../assets/images/facebookBack.png'
import instagramBack from '../../assets/images/instagramBack.png';
import pinterestBack from '../../assets/images/pinterestBack.png'
import BookAppointment from "component/BookAppointment";
import ProductCard from "component/ProductCard";
import ProductCarousal from "component/ProductCarousal";
import { getCategoryUrl, getPrice } from "utils";
import { useAppSelector } from "store/redux.hooks";

const HomeView = () => {
  const {
    isLoadingMainSlider,
      mainSliderData,
      isLoadingTopCategory,
      topCategoryData,
      isLoadingFeatureCategory,
      featureCategoryData,
      isLoadingBestSellerProduct,
      ownDesignerData,
      lovedCollectionData,
      exclusiveCollectionData,
      isLoadingCelebrityProduct,
      navigate,
      activeTab, setActiveTab,
      featureProductData,
      isLoadingTabProduct,
      tabProductData,
      isLoadingBlogs,
      blogsData
  } = HomeController();

  const {selectedCurrency} = useAppSelector((state:any)=>state.auth)

  return (
      <section>
        <Loader
          isLoading={[
            isLoadingMainSlider,
            isLoadingTopCategory,
            isLoadingFeatureCategory,
            isLoadingBestSellerProduct,
            isLoadingCelebrityProduct,
            isLoadingTabProduct,
            isLoadingBlogs
          ]}
        />
        <main className="pageMain">
          {/*slider main banner */}
          <div className="Mainslider">
            {/* Carousal */}
            {mainSliderData?.length > 0 && (
              <div className="container mainSlider blogSection">
                <Carousel
                  data={mainSliderData?.map((item: any) => ({image:item?.photo, link: item?.link}))}
                  isPath={true}
                />
              </div>
            )}

            {/* categoery section */}
            {topCategoryData?.length > 0 && (
              <section className="CTGCols mt-4">
                <div className="container">
                  <div className="row">
                    {topCategoryData?.map((item: any) => (
                      <div key={item?.icon} className="col-6 col-lg-3">
                        <CategeryCard
                          bottomText={true}
                          imageName={item?.icon}
                          isPath={true}
                          tag={item?.name}
                          link={getCategoryUrl(item?.id)}
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
                              bottomText={true}
                              imageName={item?.icon}
                              isPath={true}
                              tag={item?.name}
                              link={getCategoryUrl(item?.id)}
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
                  {/* <Link
                    to={`/category/${selectedPopularStyle}`}
                    className="text-uparcase"
                  >
                    VIEW ALL
                  </Link> */}
                </div>

              <div className="productSliderWrap">
                <ul className="nav nav-tabs themeTabsStyle" id="myTab" role="tablist">
                  {tabProductData &&
                    Object.keys(tabProductData).map((category: string, index: number) => (
                      <li className="nav-item" key={category}>
                        <button
                          className={`nav-link ${activeTab === category ? "active" : ""}`}
                          id={category}
                          type="button"
                          role="tab"
                          aria-controls={category}
                          aria-selected={activeTab === category}
                          onClick={() => setActiveTab(category)} // Handle tab switching with React state
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                </ul>

                <div className="tab-content" id="myTabContent">
                  {tabProductData &&
                    Object.keys(tabProductData).map((category: string) => {
                      const dataArray = tabProductData[category]?.data;
                      return (
                        <div
                          key={category}
                          className={`tab-pane fade ${activeTab === category ? "show active" : ""}`}
                          id={category}
                          role="tabpanel"
                          aria-labelledby={category}
                        >
                          <div className="relatedTabs">
                            {dataArray?.length > 0 && (
                              <ProductCarousal>
                                {dataArray.map((prod: any) => (
                                  <ProductCard
                                    key={prod.id}
                                    price={getPrice(prod?.main_price, selectedCurrency)}
                                    imageName={prod?.thumbnail_image}
                                    isPath={true}
                                    tag={prod?.designer}
                                    link={`/products/${prod?.id}`}
                                    subTag={prod?.name}
                                  />
                                ))}
                              </ProductCarousal>
                            )}
                          </div>
                        </div>
                      );
                    })}
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
                              bottomText={true}
                              imageName={item?.banner}
                              isPath={true}
                              tag={item?.name}
                              link={getCategoryUrl(item?.id)}
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
                              bottomText={true}
                              imageName={item?.banner}
                              isPath={true}
                              tag={item?.name}
                              link={getCategoryUrl(item?.id)}
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
                              bottomText={true}
                              imageName={item?.banner}
                              isPath={true}
                              tag={item?.name}
                              link={getCategoryUrl(item?.id)}
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
                    <img style={{width:"100%"}}
                      src={require("assets/images/bannerShape1.jpeg")}
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
            productData={featureProductData}
          />

          <BlogSection data={blogsData}/>
          {/* <!-- product section --> */}

          <section className="productSection py-3 py-md-4">
            <div className="container">
              <div className="fullscreen fullwidth clearfix SocialSharing">
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
  );
};

export default HomeView;
