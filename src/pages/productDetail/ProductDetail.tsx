import ProductDetailController from './productDetailController'
import Loader from 'component/Loader'
import ProductCard from 'component/ProductCard';
import ProductCarousal from 'component/ProductCarousal';
import { getPrice } from 'utils';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


const ProductDetail = () => {

  const {
    isLoadingProductDetail,
    productDetailData,
    isLoadingRelatedProducts,
    relatedProductsData,
    selectedImage,
    setSelectedImage,
    selectedSize, setSelectedSize } = ProductDetailController()

  return (
    <section className="pageMain">
      <Loader isLoading={[isLoadingProductDetail, isLoadingRelatedProducts]} />

      <div className="container">

        <div className="pageHead">
          <nav aria-label="breadcrumb" className=" ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Designer Menswear</li>
            </ol>
          </nav>
        </div>

        {/* <!-- DETAIL PAGE CONTENT --> */}

        <div className="row">
          <div className="col-lg-6">
            <div className="imageContainer pe-0 pe-xl-5">
              <div className="row">
                {/* Left Side (Thumbnails) */}
                <div className="col-3">
                  <div className="thumbnail-wrapper">
                    {productDetailData?.data[0]?.photos?.map((image: any, index: number) => (
                      <img
                        key={index}
                        src={image?.path}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${selectedImage === image.path ? 'selected' : ''}`}
                        onClick={() => setSelectedImage(image.path)}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side (Main Image) */}
                <div className="col-9">
                  <div className="main-image-wrapper">
                    <InnerImageZoom src={selectedImage} zoomSrc={selectedImage} zoomScale={2.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detailPageContent">
              <div className="d-flex flex-wrap align-items-center">
                <h1 className="innerPageTitle" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>{productDetailData?.data[0]?.designer}</h1>
              </div>
              <h2 className="textBigLight">{productDetailData?.data[0]?.name}</h2>
              <button className="my-2"
                style={{ backgroundColor: "#f5f5f5", padding: "8px 10px", borderRadius: "4px", fontSize: "12px", border: "none" }}>Contains:
                {productDetailData?.data[0]?.name}<span className="ps-1"><i className="fas fa-question-circle"></i></span></button>

              <div className="detailPrice">
                <p className="d-flex align-items-baseline space-x-[6px]">
                  <span
                    className="leading-none tracking-tighter text-azaBlackShade3 fs-lg fs-lg-2xl fw-bold">{getPrice(productDetailData?.data?.[0]?.main_price)}</span>

                  <span className="text-sm text-lg-base text-azaGreen_5">({getPrice(productDetailData?.data[0]?.discount)}OFF)</span>
                </p>
                <p className="textSmallLight">(inclusive of all taxes)</p>
              </div>

              <div className="sizePart">
                <div className="sizeGuide">
                  <h4>SELECT SIZE </h4><button>Size Guide</button>
                </div>
                <div className="sizePartTabs d-flex flex-wrap gap-3">
                  {productDetailData?.data[0]?.choice_options[0]?.options?.map((elem: string) => {
                    return <button className={`sizeBtn ${selectedSize === elem ? "selected" : ""}`} onClick={() => setSelectedSize(elem)} key={elem}>{elem}</button>
                  })}
                </div>
              </div>

              <div className="ButtonTabsAction">
                <button className="addToCart" style={{ backgroundColor: "#bb3d1f", borderRadius: "6px", fontSize: "16px", color: "#fff", border: "none", marginRight: "10px", padding: "12px 20px" }}>
                  <i className="" style={{ backgroundPosition: "-181px -158px", width: "1.25rem", height: "1.25rem" }}></i>ADD TO CART
                </button>
                <button
                  style={{ backgroundColor: "#fff", border: "1px solid #cccccc", borderRadius: "6px", fontSize: "16px", color: "#333333", padding: "12px 20px" }}><i
                    className=""
                    style={{ backgroundPosition: "-181px -158px", width: "1.25rem", height: "1.25rem" }}></i>WISHLIST</button>
              </div>

              <div className="AboutDetail">
                <div id="profile-description">
                  <div className="">
                    <h4>ABOUT</h4>
                    <p dangerouslySetInnerHTML={{ __html: productDetailData?.data[0]?.description }}></p>
                    {productDetailData?.data[0]?.other_attribute && Object.entries(productDetailData?.data[0]?.other_attribute)?.map((atr: any) => {
                      return <p className='d-flex gap-1 align-items-top' key={atr[0]}><p dangerouslySetInnerHTML={{ __html: atr[0] }}></p><p> : </p><p dangerouslySetInnerHTML={{ __html: atr[1] }}></p></p>
                    })}
                  </div>
                  {/* <div className="show-more">Show More</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>


        {relatedProductsData?.data.length > 0 && <div className="relatedTabs">
          <h4>RELATED PRODUCTS</h4>

          <div className="productSliderWrap">
            <ProductCarousal>
              {relatedProductsData?.data?.map((prod: any) => (
                <ProductCard
                  key={prod.id}
                  price={getPrice(prod?.main_price)}
                  imageName={prod?.thumbnail_image}
                  isPath={true}
                  tag={prod?.designer}
                  link={`/products/${prod?.id}`}
                  subTag={prod?.name}
                />
              ))}
            </ProductCarousal>;
          </div>
        </div>}

        <div className="relatedTabs support">
          <h4>CUSTOMER SUPPORT </h4>
          <a href="/" className="" style={{ textDecoration: "none" }}><i className="bg-image"
            style={{ backgroundPosition: "-375px -199px", width: "24px", height: "24px" }}></i>Chat With
            Us</a>
          <a href="/" className="" style={{ textDecoration: "none" }}><i className="bg-image"
            style={{ backgroundPosition: "-342px -199px", width: "24px", height: "24px" }}></i>022-42792123</a>
          <a href="/" className="" style={{ textDecoration: "none" }}><i className="bg-image"
            style={{ backgroundPosition: "-407px -199px", width: "24px", height: "24px" }}></i>Mail us</a>
        </div>


        <div className=" socialTabs">
          <h4>SHARE</h4>
          <div className="d-flex pt-2">
            <a href="/" className="" style={{ textDecoration: "none" }}><i className="fab fa-whatsapp"></i></a>
            <a href="/" className="" style={{ textDecoration: "none" }}><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="" style={{ textDecoration: "none" }}><i className="fab fa-twitter"></i></a>
            <a href="/" className="" style={{ textDecoration: "none" }}><i
              className="far fa-envelope-open"></i></a>
            <a href="/" className="" style={{ textDecoration: "none" }}><i className="fab fa-pinterest"></i></a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductDetail