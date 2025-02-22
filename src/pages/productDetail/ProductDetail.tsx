import ProductDetailController from './productDetailController'
import Loader from 'component/Loader'
import ProductCard from 'component/ProductCard';
import ProductCarousal from 'component/ProductCarousal';
import { getOrignalPrice, getPrice, sortSizes } from 'utils';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import CustomPopup from 'component/modal/CustomPopup';
import { useAppSelector } from 'store/redux.hooks';

const ProductDetail = () => {

  const {
    isLoadingProductDetail,
    productDetailData,
    isLoadingRelatedProducts,
    relatedProductsData,
    selectedImage,
    setSelectedImage,
    selectedSize,
    setSelectedSize,
    handleAddToCart,
    selectedDesigner,
    setSelectedDesigner,
    isLoadingAddToCart,
    isOpenSizeChart,
    setIsOpenSizeChart,
    addToWishList,
    isLoadingWishList,
    selectedPrice,
    setSelectedPrice,
  } = ProductDetailController();

  const { selectedCurrency } = useAppSelector((state: any) => state.auth)
  const productDetails = productDetailData?.data[0];
  const productLink = `${process.env.REACT_APP_FRONTEND_URL}/products/${productDetails?.id}`;

  return (
    <section className="pageMain">
      <Loader
        isLoading={[
          isLoadingProductDetail,
          isLoadingRelatedProducts,
          isLoadingAddToCart,
          isLoadingWishList,
        ]}
      />

      <div className="container mt-4">
        {/* <!-- DETAIL PAGE CONTENT --> */}

        <div className="row">
          <div className="col-md-6">
            <div className="imageContainer detailPageContainer pe-0">
              <div className="detailImgThumbrow">
                {/* Left Side (Thumbnails) */}
                <div className="detailImgThumb">
                  <div className="thumbnail-wrapper">
                    {productDetails?.photos?.map(
                      (image: any, index: number) => (
                        <img
                          key={index}
                          src={image?.path}
                          alt={`Thumbnail ${index + 1}`}
                          className={`thumbnail ${
                            selectedImage === image.path ? "selected" : ""
                          }`}
                          onClick={() => setSelectedImage(image.path)}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Right Side (Main Image) */}
                <div className="detailMainImage">
                  <div className="main-image-wrapper">
                    <InnerImageZoom
                      src={selectedImage}
                      zoomSrc={selectedImage}
                      zoomScale={2.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detailPageContent">
              <div className="d-flex flex-wrap align-items-center">
                <h1
                  className="innerPageTitle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {productDetails?.designer}
                </h1>
              </div>
              <h2 className="textBigLight">{productDetails?.name}</h2>
              {productDetails?.is_price_hide || productDetails?.out_of_stock ? (
                ""
              ) : (
                <div className="detailPrice">
                  <p className="d-flex align-items-baseline space-x-[6px]">
                    <span className="leading-none tracking-tighter text-azaBlackShade3 fs-lg fs-lg-2xl fw-bold">
                      {getPrice(selectedPrice, selectedCurrency)}
                    </span>
                    {productDetails?.has_discount ? (
                      <span className="text-sm text-lg-base text-azaGreen_5">
                        ({productDetails?.discount} OFF)
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  {productDetails?.has_discount ? (
                  <s>
                    {getOrignalPrice(selectedPrice, productDetails?.discount, selectedCurrency)}
                  </s>) : ""}
                  <p className="textSmallLight">(inclusive of all taxes)</p>
                </div>
              )}

              {productDetails?.choice_options?.find(
                (el: any) => el.title === "Size"
              )?.options && (
                <div className="sizePart">
                  <div className="sizeGuide">
                    <h4>
                      {!productDetails?.is_price_hide ? "SELECT" : ""} SIZE{" "}
                    </h4>
                    <button onClick={() => setIsOpenSizeChart(true)}>
                      Size Guide
                    </button>
                  </div>
                  <div className="sizePartTabs d-flex flex-wrap gap-1 gap-md-3">
                    {sortSizes(
                      productDetails?.choice_options?.find(
                        (el: any) => el.title === "Size"
                      )?.options
                    )?.map((elem: string) => {
                      return (
                        <button
                          className={`sizeBtn ${
                            selectedSize === elem ? "selected" : ""
                          }`}
                          onClick={() => {
                            setSelectedSize(elem);
                            // setSelectedPrice()
                          }}
                          key={elem}
                        >
                          {elem}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {productDetails?.choice_options?.find(
                (el: any) => el.title === "Designer"
              )?.options && (
                <div className="mb-3">
                  <div className="sizeGuide">
                    <h4>DESIGNER </h4>
                  </div>
                  <div className="sizePartTabs d-flex flex-wrap gap-1 gap-md-3">
                    {productDetails?.choice_options
                      ?.find((el: any) => el.title === "Designer")
                      ?.options?.map((elem: string) => {
                        return (
                          <button
                            className={`designerBtn ${
                              selectedDesigner === elem ? "selected" : ""
                            }`}
                            onClick={() => setSelectedDesigner(elem)}
                            key={elem}
                          >
                            {elem}
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}

              <div className="ButtonTabsAction">
                {productDetails?.is_price_hide ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=919820082317&text=Hello%20I%20need%20assistance"
                    className="text-decoration-none"
                  >
                    <button
                      style={{
                        display: "flex",
                        gap: "4px",
                        backgroundColor: "#fff",
                        border: "1px solid #cccccc",
                        borderRadius: "6px",
                        fontSize: "16px",
                        color: "#333333",
                        padding: "12px 20px",
                        marginRight: "10px",
                      }}
                    >
                      <i className="watsap bg-image ms-3"></i>Request for price
                    </button>
                  </a>
                ) : productDetails?.out_of_stock ? (
                  <button
                    disabled={true}
                    style={{
                      display: "flex",
                      gap: "4px",
                      backgroundColor: "#fff",
                      border: "1px solid #cccccc",
                      borderRadius: "6px",
                      fontSize: "16px",
                      color: "#333333",
                      padding: "12px 20px",
                      marginRight: "10px",
                    }}
                  >
                    Out of stock
                  </button>
                ) : (
                  <button
                    disabled={
                      productDetails?.choice_options?.find(
                        (el: any) => el.title === "Size"
                      )?.options && !selectedSize
                    }
                    className="addToCart"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                )}
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #cccccc",
                    borderRadius: "6px",
                    fontSize: "16px",
                    color: "#333333",
                    padding: "12px 20px",
                  }}
                  onClick={() => addToWishList(productDetails?.id)}
                >
                  WISHLIST
                </button>
              </div>

              <div className="socialTabs my-3">
                <h4>SHARE</h4>
                {/* <ShareButtons productDetails={productDetails} />/ */}
                <div className="d-flex pt-2">
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20${productLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>

                  {/* Facebook Messenger */}
                  <a
                    // href="https://www.messenger.com/share?link=https://example.com?message=Hello%20there!%20Check%20this%20out!"
                    // href={`https://www.messenger.com/share?link=${productLink}`}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      productLink + "?message=Check%20this%20out!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-facebook-messenger"></i>
                  </a>

                  {/* Telegram */}
                  <a
                    href={`https://t.me/share/url?url=${productLink}&text=Check%20this%20out!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                  {/* Twitter */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check%20this%20out! ${productLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  {/* Email */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&su=Check%20this%20out!&body=Hey,%20I%20found%20this%20amazing%20link:%20${productLink}`}
                    // href={`mailto:?subject=Check%20this%20out!&body=Hey,%20I%20found%20this%20amazing%20link:%2020${productLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="AboutDetail">
                <div id="profile-description">
                  <div className="">
                    <h4>ABOUT</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: productDetails?.description,
                      }}
                    ></p>
                    {productDetails?.other_attribute &&
                      Object.entries(productDetails?.other_attribute)?.map(
                        (atr: any) => {
                          return (
                            atr[1] && (
                              <div className="d-flex gap-1" key={atr[0]}>
                                <p>{atr[0]}</p>
                                <p>:</p>
                                <p>{atr[1]}</p>
                              </div>
                            )
                          );
                        }
                      )}
                  </div>
                  {/* <div className="show-more">Show More</div> */}
                </div>
              </div>
              <div className="relatedTabs support">
                <h4>CUSTOMER SUPPORT </h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=919820082317"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bg-image"
                    style={{
                      backgroundPosition: "-375px -199px",
                      width: "24px",
                      height: "24px",
                    }}
                  ></i>
                  Chat With Us
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="tel:+919820082317"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bg-image"
                    style={{
                      backgroundPosition: "-342px -199px",
                      width: "24px",
                      height: "24px",
                    }}
                  ></i>
                  India +91-9820082317
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="tel:+971526929312"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bg-image"
                    style={{
                      backgroundPosition: "-342px -199px",
                      width: "24px",
                      height: "24px",
                    }}
                  ></i>
                  International +971-526929312
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:info@vesimi.com"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bg-image"
                    style={{
                      backgroundPosition: "-407px -199px",
                      width: "24px",
                      height: "24px",
                    }}
                  ></i>
                  Mail us
                </a>
              </div>
            </div>
          </div>
        </div>

        {relatedProductsData?.data.length > 0 && (
          <div className="relatedTabs">
            <h4>RELATED PRODUCTS</h4>

            <div className="productSliderWrap">
              <ProductCarousal>
                {relatedProductsData?.data?.map((prod: any) => (
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
            </div>
          </div>
        )}
      </div>
      <CustomPopup
        modalClass="sizeModal"
        show={isOpenSizeChart}
        handleClose={() => setIsOpenSizeChart(!isOpenSizeChart)}
        modalHeader="Size Chart"
        secondaryButtonText="Ok"
        secondaryButtonClick={() => {
          setIsOpenSizeChart(!isOpenSizeChart);
        }}
      >
        <img style={{ width: "60vw" }} src={productDetails?.size_chart} />
      </CustomPopup>
    </section>
  );
}

export default ProductDetail