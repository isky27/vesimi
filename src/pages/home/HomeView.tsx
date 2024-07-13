import CategeryCard from 'component/CategeryCard';
import Carousel from 'component/carousel';
import ServiceInfo from './ServiceInfo';
import HomeController from './homeController';
import OwlCarousel from 'react-owl-carousel';
import ProductCard from 'component/ProductCard';
import ShopNowCard from 'component/ShopNowCard';
import Loader from 'component/Loader';
import Header from 'component/headerLayout';
import CelebritySection from 'component/CelebritySection';
import BlogSection from 'component/BlogSection';


const HomeView = () => {

  const {
    isLoadingMainSlider,
    mainSliderData,
    isLoadingTopCategory,
    topCategoryData,
    isLoadingFeatureCategory,
    featureCategoryData,
    isLoadingBestSellerProduct,
    bestSellerProductData
  } = HomeController()

  return (
    <>
    <Header/>
    <section>
      <Loader isLoading={[isLoadingMainSlider, isLoadingTopCategory, isLoadingFeatureCategory, isLoadingBestSellerProduct]} />

      <main className="pageMain">
        {/*slider main banner */}
        <div className="Mainslider">

          {/* Carousal */}
          <div className="container mainSlider">
            <Carousel images={mainSliderData?.map((item: any) => item?.photo)} isPath={true} />
          </div>

          {/* categoery section */}
          <section className="CTGCols mt-4">
            <div className="container">
              <div className="row">
                {topCategoryData?.map((item: any, index: number) =>
                  <div key={item?.icon} className="col-sm-6 col-lg-3">
                    <CategeryCard imageName={item?.icon} isPath={true} tag={item?.name} link={`/category/${item?.id}`} />
                  </div>
                )}
              </div>
            </div>
          </section>
          {/* END categoery section */}

          {/* <!-- product section --> */}
          {featureCategoryData?.length > 0 && <section className="productSection py-3 py-md-5">
            <div className="container">
              <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                <h2 className="Playfair">New Drops</h2>
              </div>
              <div className="productSliderWrap">
                <OwlCarousel className="owl-theme productSlider"
                  loop
                  margin={10}
                  nav
                  responsive={{
                    0: {
                      items: 1
                    },
                    600: {
                      items: 3
                    },
                    1000: {
                      items: 4
                    }
                  }}>
                  {featureCategoryData?.map((item: any) => {
                    return <div key={item?.icon} className="item">
                      <CategeryCard imageName={item?.icon} isPath={true} tag={item?.name} link={`/category/${item?.id}`} />
                    </div>
                  })}
                </OwlCarousel>

              </div>
            </div>
          </section>}


          <section className="productSection py-3">
            <div className="container">
              <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                <h2 className="Playfair">Popular Styles </h2>
                <a href="#" className="text-uparcase">VIEW ALL</a>
              </div>

              <div className="productSliderWrap">
                <ul className="nav nav-tabs themeTabsStyle mb-3 mb-md-4" id="myTab" role="tablist">
                  <li className="nav-item">
                    <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#All"
                      type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" id="woman-tab" data-bs-toggle="tab" data-bs-target="#Woman"
                      type="button" role="tab" aria-controls="woman"
                      aria-selected="false">Woman</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" id="man-tab" data-bs-toggle="tab" data-bs-target="#Mans"
                      type="button" role="tab" aria-controls="man" aria-selected="false">Man</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" id="kids-tab" data-bs-toggle="tab" data-bs-target="#Kids"
                      type="button" role="tab" aria-controls="kids" aria-selected="false">Kids</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" id="accessories-tab" data-bs-toggle="tab"
                      data-bs-target="#Accessories" type="button" role="tab" aria-controls="accessories"
                      aria-selected="false">Accessories</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {[{ id: "All", ariaLabel: "all-tab", img: "Drops1.avif" },
                  { id: "Woman", ariaLabel: "woman-tab", img: "Drops2.avif" },
                  { id: "Mans", ariaLabel: "man-tab", img: "Drops3.avif" },
                  { id: "Kids", ariaLabel: "kids-tab", img: "Drops4.avif" },
                  { id: "Accessories", ariaLabel: "accessories-tab", img: "Drops1.avif" }
                  ].map((item: any, index: number) =>
                    <div key={item.id} className={`tab-pane fade ${index === 0 ? "show active" : ""}`} id={item.id} role="tabpanel" aria-labelledby={item.ariaLabel}>
                      <OwlCarousel className="owl-theme productSlider"
                        loop
                        margin={10}
                        nav
                        responsive={{
                          0: {
                            items: 1
                          },
                          600: {
                            items: 3
                          },
                          1000: {
                            items: 4
                          }
                        }}>
                        <ProductCard price={"22,400"} imageName={item.img} isPath={false} tag={"the cocktail bar'24"} subTag={"Sequin Embroidered Lehenga Set"} />
                        <ProductCard price={"22,400"} imageName={item.img} isPath={false} tag={"the cocktail bar'24"} subTag={"Sequin Embroidered Lehenga Set"} />

                        <ProductCard price={"22,400"} imageName={item.img} isPath={false} tag={"the cocktail bar'24"} subTag={"Sequin Embroidered Lehenga Set"} />

                        <ProductCard price={"22,400"} imageName={item.img} isPath={false} tag={"the cocktail bar'24"} subTag={"Sequin Embroidered Lehenga Set"} />

                        <ProductCard price={"22,400"} imageName={item.img} isPath={false} tag={"the cocktail bar'24"} subTag={"Sequin Embroidered Lehenga Set"} />

                        <ProductCard price={"22,400"} imageName={item.img} isPath={false} tag={"the cocktail bar'24"} subTag={"Sequin Embroidered Lehenga Set"} />

                      </OwlCarousel>
                    </div>)}

                </div>
              </div>
            </div>
          </section>

          {bestSellerProductData?.length > 0 &&
            <section className="productSection py-3 py-md-4">
              <div className="container">
                <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                  <h2 className="Playfair">Most Loved Collections</h2>
                </div>
                <div className="productSliderWrap">
                  <OwlCarousel className="owl-theme productSlider"
                    loop
                    margin={10}
                    nav
                    responsive={{
                      0: {
                        items: 1
                      },
                      600: {
                        items: 3
                      },
                      1000: {
                        items: 4
                      }
                    }}>
                    {bestSellerProductData?.map((item: any) => {
                      return <div className="item" key={item?.id}>
                        <CategeryCard imageName={item?.thumbnail_image} isPath={true} tag={item?.name} link={`/products/${item?.id}`} />
                      </div>
                    })}
                  </OwlCarousel>

                </div>
              </div>
            </section>
          }

          <section className="productSection py-3 py-md-4">
            <div className="container">
              <div className="productHead d-flex align-items-center justify-content-between mb-3 mb-md-4">
                <h2 className="Playfair">Must Own Designers</h2>
              </div>

              <div className="productSliderWrap">
                <OwlCarousel className="owl-theme productSlider"
                  loop
                  margin={10}
                  nav
                  responsive={{
                    0: {
                      items: 1
                    },
                    600: {
                      items: 3
                    },
                    1000: {
                      items: 4
                    }
                  }}>
                  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>
                  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>  <div className="item">
                    <CategeryCard imageName="Drops4.avif" isPath={false} tag={"Be chic"} bottomText={true} />
                  </div>
                </OwlCarousel>

              </div>
            </div>
          </section>

          <section className="productSection py-3 py-md-4">
            <div className="container">
              <picture><a href="#"><img src={require("assets/images/bannerShape.avif")} alt="" /></a></picture>
            </div>
          </section>

        </div>
{/* --------Celebrity Section */}
<CelebritySection/>

<BlogSection/>

        {/* <!-- product section --> */}
        <ServiceInfo />
      </main>
    </section>
    </>

  );
}

export default HomeView
