import React, { useEffect } from "react";
import LogoImage from "../../assets/images/VESIMI_new_logo-03.png";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import { getHeaderMenu } from "store/home/home.slice";
import Loader from "component/Loader";
import Drops from "../../assets/images/Drops1.avif";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoadingMenuBar, headerMenuData } = useAppSelector(
    (state: any) => state.home
  );

  useEffect(() => {
    dispatch(getHeaderMenu());
  }, [dispatch]);

  return (
    <header>
      <Loader isLoading={[isLoadingMenuBar]} />

      <div className="headerTopRow">
        <div className="container">
          <div className="headerTop">
            <div className="navBrand">
              <button
                className="MobileNavToggle bg-image d-block d-lg-none "
                style={{ backgroundPosition: "-260px -158px" }}
              ></button>
              <img src={LogoImage} onClick={() => navigate("/")} />
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle bg-transparent border-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-sm me-2">India</span>
                  <span className="pl-1 text-sm cursor-pointer">(₹)</span>
                </button>
                <div
                  className="dropdown-menu countrySETWrap"
                  aria-labelledby="countrySET"
                >
                  <div className="SearchcountryList">
                    <input type="text" placeholder="Search for a region" />
                    <button
                      className="bg-image w-6 h-6 border-0 bg-transparent"
                      style={{ backgroundPosition: "-411px -132px" }}
                    ></button>
                  </div>

                  <ul className="SearchedcountryList">
                    <li>
                      <span>Australia</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Canada</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Hong Kong</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>India</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Nepal</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Saudi Arabia</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>SINGAPORE</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Australia</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Canada</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Hong Kong</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>India</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Nepal</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>Saudi Arabia</span>
                      <span>A$</span>
                    </li>
                    <li>
                      <span>SINGAPORE</span>
                      <span>A$</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="HeaderSearchOuter">
              <button
                className="headerSearchIcon bg-image"
                style={{ backgroundPosition: "-411px -132px" }}
              ></button>
              <input
                type="text"
                className=""
                placeholder="Search for products, brand and more"
              />
              <div className="uploadSearchPicRight">
                {" "}
                <span
                  className="uploadSearchPic bg-image w-5 h-5 d-inline-block me-1"
                  style={{ backgroundPosition: "-633px -59px" }}
                ></span>{" "}
                <span>Search</span>{" "}
              </div>
            </div>

            <div className="headerRight">
              <ul>
                <li className="profile">
                  <span
                    className="profileIcon bg-image w-5 h-6 d-block"
                    style={{ backgroundPosition: "-258px -132px" }}
                  ></span>
                  Profile
                  <ul className="ProfileDropDown">
                    <li> Login </li>
                    <li> Register </li>
                  </ul>
                </li>
                <li className="wishList">
                  <span
                    className="profileIcon bg-image w-6 h-6 d-block"
                    style={{ backgroundPosition: "-291px -132px" }}
                  ></span>
                  Wishlist
                </li>
                <li className="Cart">
                  <span
                    className="profileIcon bg-image w-5 h-6 d-block"
                    style={{ backgroundPosition: "-329px -132px" }}
                  ></span>
                  Cart
                </li>
                <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=919820082317">
                  <li className="watsap bg-image ms-3" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 
			<!-- header Nav bar --> */}

      <div className="headerNav">
        <div className="container">
          <nav className="Nav-bar">
            <ul>
              <li>
                <span>Home</span>{" "}
              </li>
              {/* <!-- what's new  --> */}
              <li>
                <span>What's New</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>What's New</h4>
                        <ul>
                          <li>Women</li>
                          <li>Men</li>
                          <li>Jewellery</li>
                          <li>Accessories</li>
                          <li>Kids</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4 onClick={() => navigate("/category/6")}>
                          Designers
                        </h4>
                        <ul>
                          <li>Masaba</li>
                          <li>Vvani by Vani Vats</li>
                          <li>Vannikaa Malik</li>
                          <li>Krisha Sunny Ramani</li>
                          <li>Redpine Designs</li>
                          <li>Kudi Pataka</li>
                          <li>RoohbyRidhimaa</li>
                          <li>Deme by Gabriella</li>
                          <li>Tyohar</li>
                          <li>Moledro</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Designers --> */}
              <li>
                <span onClick={() => navigate("/category/6")}>Designers</span>
              </li>
              {/* <!-- WOMEN --> */}
              <li>
                <span>Woman</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Lehengas</li>
                          <li>Dresses</li>
                          <li>Gowns</li>
                          <li>Blouses</li>
                          <li>Dupattas</li>
                          <li>Sarees</li>
                          <li>Crop Tops</li>
                          <li>Anarkali Set</li>
                          <li>Sharara Set</li>
                          <li>Lehenga Set</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Kurta Sets</li>
                          <li>Palazzo Set</li>
                          <li>Skirt Sets</li>
                          <li>Pant Sets</li>
                          <li>Blazer Set</li>
                          <li>Jackets</li>
                          <li>Jumpsuits</li>
                          <li>Trousers</li>
                          <li>Kaftans</li>
                          <li>Tops</li>
                          <li>Co-Ord Set</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>Designers</h4>
                        <ul>
                          <li>Ahi Clothing</li>
                          <li>Vvani by Vani Vats</li>
                          <li>Vannikaa Malik</li>
                          <li>Krisha Sunny Ramani</li>
                          <li>Bhanuni by Jyoti</li>
                          <li>Enness Studio</li>
                          <li>Deme By Gabriella</li>
                          <li>Krisha Sunny Ramani</li>
                          <li>Jigar & Nikita</li>
                          <li>Masaba</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo1.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Man --> */}
              <li>
                <span>Man</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Kurta Sets</li>
                          <li>Kurtas</li>
                          <li>kurta Pyjamas</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jacket & Sets</li>
                          <li>Bandhgalas</li>
                          <li>Shirts</li>
                          <li>Footwear</li>
                          <li>Bottoms</li>
                          <li>Jackets</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Tuxedo Set</li>
                          <li>Shorts</li>
                          <li>Tuxedo</li>
                          <li>Ethinic Wear</li>
                          <li>Trousers</li>
                          <li>Waistcoat</li>
                          <li>Shrug Set</li>
                          <li>Pashmina Shawl</li>
                          <li>Jodhpuris</li>
                          <li>Bandi Set</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>Designers</li>
                          <li>Inder Clothing Studio</li>
                          <li>Jenjum Gadi</li>
                          <li>Kalista</li>
                          <li>Krisha Sunny Ramani</li>
                          <li>Masaba</li>
                          <li>S&N by Shantnu Nikhil</li>
                          <li>Jatin Malik Couture</li>
                          <li>Khushboo & Pankaj</li>
                          <li>Jigar & Nikita</li>
                          <li>Rey & I</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo1.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Kids --> */}
              <li>
                <span>Kids</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>Boys</h4>
                        <ul>
                          <li>Shorts</li>
                          <li>Kurta Sets</li>
                          <li>Kurtas</li>
                          <li>Jackets</li>
                          <li>Sherwanis</li>
                          <li>Suits & Tuxedos</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>Girls</h4>
                        <ul>
                          <li>Dresses</li>
                          <li>Kurta Sets</li>
                          <li>Pant Sets</li>
                          <li>Lehengas</li>
                          <li>Jumpsuits</li>
                          <li>Skirt Sets</li>
                          <li>Tunics & Kurtis</li>
                          <li>Gowns</li>
                          <li>Sarees</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>Rey&I</li>
                          <li>LittleCheer</li>
                          <li>Lil Drama</li>
                          <li>Fayyon Kids</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo1.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Accessories --> */}
              <li>
                <span>Accessories</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Bags</li>
                          <li>Belts</li>
                          <li>Gloves</li>
                          <li>Brooches</li>
                          <li>Clutch</li>
                          <li>Potli</li>
                          <li>Purse</li>
                          <li>Pocket Squares</li>
                          <li>Mens Footwear</li>
                          <li>Womens Footwear</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNER</h4>
                        <ul>
                          <li>Clutch'D</li>
                          <li>Devina juneja</li>
                          <li>Torani</li>
                          <li>Veruschka</li>
                          <li>S&N by Shantnu Nikhil</li>
                          <li>Jatin Malik Couture</li>
                          <li>Plode</li>
                          <li>Amrit Dawani</li>
                          <li>Bijoux by Priya Chandna</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo1.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Jewellery --> */}
              <li>
                <span>Jewellery</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>Earrings</li>
                          <li>Bracelet</li>
                          <li>Bangle</li>
                          <li>Neckpiece</li>
                          <li>Mala</li>
                          <li>Kalgi</li>
                          <li>Rings</li>
                          <li>Necklaces</li>
                          <li>Pendants</li>
                          <li>Hair Accessories</li>
                          <li>Chains</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNER</h4>
                        <ul>
                          <li>Juwelen</li>
                          <li>Jatin Malik Couture</li>
                          <li>Mozaati</li>
                          <li>Tesoro by Bhavika</li>
                          <li>Twyla Treasures</li>
                          <li>Bijoux by Priya Chandna</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo1.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo1.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo2.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src="images/demo3.avif" />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Niti Bothra</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- The Vesimi Voice --> */}
              <li>
                <span>The Vesimi Voice</span>{" "}
              </li>
              <li>
                <span>Gift card</span>{" "}
              </li>
              <li>
                <span className="textred">Sale</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
