import React from 'react'
import ProductDetailController from './productDetailController'
import Loader from 'component/Loader'
import Header from 'component/headerLayout'

const ProductDetail = () => {

  const {
    isLoadingProductDetail, 
    productDetailData } = ProductDetailController()

  return (
    <>
    <Header/>
    <section className="pageMain">
			<Loader isLoading={[isLoadingProductDetail]} />

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
          <div className="col-lg-5">
            <div className="imageContainer pe-0 pe-xl-5">{productDetailData?.data[0]?.photos?.map((image:any, index:number)=>{
              return <img key={index} src={image?.path} className="w-100"
              alt="slider1" />
            })}</div>
          </div>
          <div className="col-lg-7">
            <div className="detailPageContent">
              <div className="d-flex flex-wrap align-items-center">
                <h1 className="innerPageTitle" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>{productDetailData?.data[0]?.name}<span className="ms-2"
                    style={{ color: "#bc3d19", fontSize: "16px", margin: "0 15px", verticalAlign: "middle", display: "inline-block" }}><i
                      className="fas fa-chevron-right"></i></span></h1>
                <a href="/"  style={{ marginLeft: "20px", display: "inline-block", border: "1px solid #bc3d19", padding: "8px 15px", borderRadius: "6px", color: "#bc3d19", textDecoration: "none" }}><i
                    className="fas fa-user-plus"></i>Follow</a>
              </div>
              <button className="my-2"
                style={{ backgroundColor: "#f5f5f5", padding: "8px 10px", borderRadius: "4px", fontSize: "12px", border: "none" }}>Contains:
                {productDetailData?.data[0]?.name}<span className="ps-1"><i className="fas fa-question-circle"></i></span></button>

              <div className="detailPrice">
                <p className="d-flex align-items-baseline space-x-[6px]">
                  <span
                    className="leading-none tracking-tighter text-azaBlackShade3 fs-lg fs-lg-2xl fw-bold">{productDetailData?.data[0]?.main_price}</span>
                  {/* <span
                    className="text-sm fw-normal line-through lg:text-base text-azaBlackShade4">{productDetailData?.data[0]?.currency_symbol}33,990</span> */}
                  <span className="text-sm text-lg-base text-azaGreen_5">{productDetailData?.data[0]?.discount}%OFF</span>
                </p>
                <p className="textSmallLight">(inclusive of all taxes)</p>
              </div>

              <div className="sizePart">
                <div className="d-flex">
                  <h4>SELECT SIZE </h4><button>Size Guide </button>
                </div>
                <div className="sizePartTabs">
                  <ul>
                    {productDetailData?.data[0]?.choice_options[0]?.options?.map((elem: string)=>{
                    return(<li key={elem}>
                      <div>
                        <i className="bg-image"
                          style={{ backgroundPosition: "-267px -184px", width: "8px", height: "13px" }}></i>{elem}
                      </div>

                    </li>)
                    })}
                  </ul>
                  <strong style={{ backgroundPosition: "-276px -184px", width: "14px", height: "14px" }}
                    className="bg-image"></strong>

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
                <div className="AboutDetail">
                  <div id="profile-description">
                    <div className="text show-more-height">
                      <h4>ABOUT</h4>
                      <p dangerouslySetInnerHTML={{ __html: productDetailData?.data[0]?.description  }}></p>
                      <ul>
                        <li>No of Components: 2 </li>
                        <li>Components: Anarkali, Dupatta</li>
                        <li>Pattern: Embroidery </li>
                        <li>Type of Work: Floral, Beads, Dabka</li>
                      </ul>

                      <br /><br />
                      <div>
                        <ul>
                          <li>Neckline: Notched Round</li>
                          <li>Sleeve Type: Gathered Sleeves</li>
                          <li>Fabric: Organza, Chanderi Silk</li>
                          <li>Color: Pink</li>
                          <li>Other Details:</li>
                          <li>Model height: 5ft 8inches, wearing size S</li>
                          <li>Occasion: Sangeet</li>
                        </ul>
                        <p>Care: Dry clean only </p>
                        <p>Fit: Relaxed </p>
                        <p>Disclaimer: Colour of the actual product may vary from the image. These are
                          made to
                          order designer styles,
                          hence expect a slight variation from the image displayed</p>
                        <a href="/">View Supplier Information</a>
                      </div>
                    </div>
                  </div>
                  <div className="show-more">Show More</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="relatedTabs">
        <h4>RELATED LINKS</h4>
        <button
          style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#3333330d", color: "#333", marginRight: "10px", borderRadius: "6px", border: "none" }}>NAZM
          collection</button>
        <button
          style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#3333330d", color: "#333", marginRight: "10px", borderRadius: "6px", border: "none" }}>Similar
          items shipping today</button>
        <button
          style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#3333330d", color: "#333", marginRight: "10px", borderRadius: "6px", border: "none" }}>Similar
          aza-exclusive products</button>
        <button
          style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#3333330d", color: "#333", marginRight: "10px", borderRadius: "6px", border: "none" }}>Co-ordinated
          outfits</button>
        <button
          style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#3333330d", color: "#333", marginRight: "10px", borderRadius: "6px", border: "none" }}>Best
          paired with</button>
        <button
          style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#3333330d", color: "#333", marginRight: "10px", borderRadius: "6px", border: "none" }}>View
          Neha Khullar</button>

      </div>

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
    </section>
    </>
  )
}

export default ProductDetail