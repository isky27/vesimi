import { Col, Row } from "reactstrap";
import WishListController from "./wishListController";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader";
import { getPrice } from "../../utils";

const WishlistView = () => {
  const {
    isLoadingWishList,
    wishListData,
    selectedCurrency,
    handleRemoveWishList
  } = WishListController();
  
  return (
    <div>
      <Loader isLoading={[isLoadingWishList]} />
      <div className="productListinfWrap wishListSection py-4">
        <div className="container">
          <Row>
            {!isLoadingWishList &&
              wishListData?.data?.length > 0 &&
              wishListData?.data?.map((item: any) => {
                return (
                  <Col sm={6} lg={3} key={item?.product?.id}>
                    <div className="productCols position-relative mb-2 mb-md-3">
                      <Link
                        to={`/products/${item?.product?.slug}`}
                        className="text-dark text-decoration-none"
                      >
                        <div className="position-relative">
                          <picture>
                            <img
                              src={item?.product?.thumbnail_image}
                              alt={item?.product?.name}
                            />
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 1024 1024"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                            </svg>
                          </picture>
                          <button
                            className="wishListCloseIcon"
                            onClick={(e) =>{
                               e.preventDefault();
                               e.stopPropagation();
                              handleRemoveWishList(item?.product?.id)
                            }}
                          >
                            <img src="images/closeWhiteIcon.png" alt="close" />
                          </button>
                        </div>
                        <div className="py-2">
                          <h3 className="text-uparcase">{item?.product?.designer}</h3>
                          <p className="text-gray ">{item?.product?.name}</p>
                          <small className="font-semibold">
                            {getPrice(item?.product?.base_price, selectedCurrency)}
                          </small>
                        </div>
                      </Link>
                    </div>
                  </Col>
                );
              })}
            {!isLoadingWishList && !(wishListData?.data?.length > 0) && (
              <div className="text-center">No products in wishlist.</div>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WishlistView;
