import React, { useState } from "react";
import { getPrice } from "utils";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/redux.hooks";

const ProductCard = React.memo(({ item, ...alt }: any) => {
  const [imageSrc, setImageSrc] = useState(item?.thumbnail_image);

  const { selectedCurrency } = useAppSelector((state: any) => state.auth);

  const handleMouseEnter = () => {
    if (item?.second_photo) {
      setImageSrc(item?.second_photo);
    }
  };

  const handleMouseLeave = () => {
    setImageSrc(item?.thumbnail_image);
  };

  return (
    <div {...alt} className="col-6 col-lg-4">
      <div className="productCols position-relative mb-2 mb-md-3">
        <Link
          to={`/products/${item?.id}`}
          className="text-dark text-decoration-none"
        >
          <div className="position-relative">
            <picture>
              <img
                src={imageSrc}
                alt="Product Thumbnail"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
            <div className="QuickView">
              {item?.is_price_hide ? (
                <div className="AddProductAction">
                  <button style={{ color: "#bb3d1f" }}>View Details</button>
                </div>
              ) : item?.out_of_stock ? (
                <div className="AddProductAction">
                  <button disabled={true} style={{ color: "#bb3d1f" }}>Out of stock</button>
                </div>
              ) : (
                <div className="AddProductAction">
                  <button style={{ color: "#bb3d1f" }}>ADD TO CART</button>
                  <button style={{ color: "#eab308" }} className="border-0">
                    BUY NOW
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="py-2">
            <h3 className="text-uppercase">{item?.designer}</h3>
            <p className="text-gray">{item?.name}</p>
            {(item?.is_price_hide || item?.out_of_stock) ? (
              ""
            ) : (
              <small className="font-semibold">
                {getPrice(item?.main_price, selectedCurrency)}
              </small>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
});

export default ProductCard;
