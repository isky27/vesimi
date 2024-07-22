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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=919820082317"
                >
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
                <a href="/">
                  <span>Home</span>
                </a>{" "}
              </li>
              {/* <!-- what's new  --> */}
              <li onClick={() => navigate("/category/5")}>
                <span>What's New</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate("/category/1242")}>
                            Women
                          </li>
                          <li onClick={() => navigate("/category/1342")}>
                            Men
                          </li>
                          <li onClick={() => navigate("/category/5")}>
                            Jewellery
                          </li>
                          <li onClick={() => navigate("/category/5")}>
                            Accessories
                          </li>
                          <li onClick={() => navigate("/category/5")}>
                            Kids
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>
                            <a href="/">Masaba</a>
                          </li>
                          <li>
                            <a href="/">Vvani by Vani Vats</a>
                          </li>
                          <li>
                            <a href="/">Vannikaa Malik</a>
                          </li>
                          <li>
                            <a href="/">Krisha Sunny Ramani</a>
                          </li>
                          <li>
                            <a href="/">Redpine Designs</a>
                          </li>
                          <li>
                            <a href="/">Kudi Pataka</a>
                          </li>
                          <li>
                            <a href="/">RoohbyRidhimaa</a>
                          </li>
                          <li>
                            <a href="/">Deme by Gabriella</a>
                          </li>
                          <li>
                            <a href="/">Tyohar</a>
                          </li>
                          <li>
                            <a href="/">Moledro</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/msb23608.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Masaba</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/rr025-saj.png" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Ridhimaa Gupta</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/avyanna.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">kalighata</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Designers --> */}
              <li>
                <a href="/">
                  <span>Designers</span>
                </a>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>SALE</h4>
                        <ul>
                          <li>
                            <a href="/">Kovet</a>
                          </li>
                          <li>
                            <a href="/">Khushboo & Pankaj</a>
                          </li>
                          <li>
                            <a href="/">Lil Drama</a>
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>FEATURED</h4>
                        <ul>
                          <li>
                            <a href="/">Amka India</a>
                          </li>
                          <li>
                            <a href="/">Amrit Dawani</a>
                          </li>
                          <li>
                            <a href="/">Ease</a>
                          </li>
                          <li>
                            <a href="/">Inder Clothing Studio</a>
                          </li>
                          <li>
                            <a href="/">Masumi Mewawalla</a>
                          </li>
                          <li>
                            <a href="/">Monisha Jaising</a>
                          </li>
                          <li>
                            <a href="/">Nikita Vishakha</a>
                          </li>
                          <li>
                            <a href="/">Pink City by Sarika</a>
                          </li>
                          <li>
                            <a href="/">Neeta Lulla</a>
                          </li>
                          <li>
                            <a href="/">Mala And Kinnary</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>TRENDING</h4>
                        <ul>
                          <li>
                            <a href="/">Ahi Clothing</a>
                          </li>
                          <li>
                            <a href="/">Vvani by Vani Vats</a>
                          </li>
                          <li>
                            <a href="/">Vannikaa Malik</a>
                          </li>
                          <li>
                            <a href="/">Krisha Sunny Ramani</a>
                          </li>
                          <li>
                            <a href="/">Bhanuni by Jyoti</a>
                          </li>
                          <li>
                            <a href="/">Enness Studio</a>
                          </li>
                          <li>
                            <a href="/">Deme By Gabriella</a>
                          </li>
                          <li>
                            <a href="/">Mona & Vishu</a>
                          </li>
                          <li>
                            <a href="/">Jigar & Nikita</a>
                          </li>
                          <li>
                            <a href="/">Masaba </a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/Moledro.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Moledro</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/WeaverStory.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Weaver Story</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/one.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">One Knot One</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- WOMEN --> */}
              <li>
                <a href="/">
                  <span>Woman</span>
                </a>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>
                            <a href="/">Lehengas</a>
                          </li>
                          <li>
                            <a href="/">Dresses</a>
                          </li>
                          <li>
                            <a href="/">Gowns</a>
                          </li>
                          <li>
                            <a href="/">Blouses </a>
                          </li>
                          <li>
                            <a href="/">Dupattas</a>
                          </li>
                          <li>
                            <a href="/">Sarees</a>
                          </li>
                          <li>
                            <a href="/">Crop Tops</a>
                          </li>
                          <li>
                            <a href="/">Anarkali Set</a>
                          </li>
                          <li>
                            <a href="/">Sharara Set</a>
                          </li>
                          <li>
                            <a href="/">Lehenga Set</a>
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>
                            <a href="/">Kurta Sets</a>
                          </li>
                          <li>
                            <a href="/">Palazzo Set</a>
                          </li>
                          <li>
                            <a href="/">Skirt Sets</a>
                          </li>
                          <li>
                            <a href="/">Pant Sets</a>
                          </li>
                          <li>
                            <a href="/">Blazer Set</a>
                          </li>
                          <li>
                            <a href="/">Jackets</a>
                          </li>
                          <li>
                            <a href="/">Jumpsuits</a>
                          </li>
                          <li>
                            <a href="/">Trousers</a>
                          </li>
                          <li>
                            <a href="/">Kaftans</a>
                          </li>
                          <li>
                            <a href="/">Tops</a>
                          </li>
                          <li>
                            <a href="/">Co-Ord Set</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>
                            <a href="/">Ahi Clothing</a>
                          </li>
                          <li>
                            <a href="/">Vvani by Vani Vats</a>
                          </li>
                          <li>
                            <a href="/">Vannikaa Malik</a>
                          </li>
                          <li>
                            <a href="/">Krisha Sunny Ramani</a>
                          </li>
                          <li>
                            <a href="/">Bhanuni by Jyoti</a>
                          </li>
                          <li>
                            <a href="/">Enness Studio</a>
                          </li>
                          <li>
                            <a href="/">Deme By Gabriella</a>
                          </li>
                          <li>
                            <a href="/">Moledro</a>
                          </li>
                          <li>
                            <a href="/">Jigar & Nikita</a>
                          </li>
                          <li>
                            <a href="/">Masaba </a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/ahii123013.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Ahi Clothing</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/kupk-hans.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Kudi Pataka</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/msb23016.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">Masaba</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Man --> */}
              <li>
                <a href="/">
                  <span>Man</span>
                </a>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>
                            <a href="/">Kurta Sets</a>
                          </li>
                          <li>
                            <a href="/">Kurtas</a>
                          </li>
                          <li>
                            <a href="/">kurta Pyjamas</a>
                          </li>
                          <li>
                            <a href="/">Sherwanis</a>
                          </li>
                          <li>
                            <a href="/">Nehru Jacket & Sets</a>
                          </li>
                          <li>
                            <a href="/">Bandhgalas</a>
                          </li>
                          <li>
                            <a href="/">Shirts</a>
                          </li>
                          <li>
                            <a href="/">Footwear</a>
                          </li>
                          <li>
                            <a href="/">Bottoms</a>
                          </li>
                          <li>
                            <a href="/">Jackets</a>
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>
                            <a href="/">Tuxedo Set</a>
                          </li>
                          <li>
                            <a href="/">Shorts</a>
                          </li>
                          <li>
                            <a href="/">Tuxedo</a>
                          </li>
                          <li>
                            <a href="/">Ethinic Wear</a>
                          </li>
                          <li>
                            <a href="/">Trousers</a>
                          </li>
                          <li>
                            <a href="/">Waistcoat</a>
                          </li>
                          <li>
                            <a href="/">Shrug Set</a>
                          </li>
                          <li>
                            <a href="/">Pashmina Shawl</a>
                          </li>
                          <li>
                            <a href="/">Jodhpuris</a>
                          </li>
                          <li>
                            <a href="/">Bandi Set</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>
                            <a href="/">Inder Clothing Studio</a>
                          </li>
                          <li>
                            <a href="/">Jenjum Gadi</a>
                          </li>
                          <li>
                            <a href="/">Kalista</a>
                          </li>
                          <li>
                            <a href="/">Krisha Sunny Ramani</a>
                          </li>
                          <li>
                            <a href="/">Masaba</a>
                          </li>
                          <li>
                            <a href="/">S&N by Shantnu Nikhil</a>
                          </li>
                          <li>
                            <a href="/">Jatin Malik Couture</a>
                          </li>
                          <li>
                            <a href="/">Khushboo & Pankaj</a>
                          </li>
                          <li>
                            <a href="/">Jigar & Nikita</a>
                          </li>
                          <li>
                            <a href="/">Rey & I</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/snbs22mtr04.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">
                              SHANTNU & NIKHIL
                            </strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/maaya25-2.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">
                              KRISHA SUNNY RAMANI
                            </strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/jm-ss22.png" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">
                              JATIN MALIK COUTURE
                            </strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Kids --> */}
              <li>
                <a href="/">
                  <span>Kids</span>
                </a>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>BOYS</h4>
                        <ul>
                          <li>
                            <a href="/">Shorts</a>
                          </li>
                          <li>
                            <a href="/">Kurta Sets</a>
                          </li>
                          <li>
                            <a href="/">Kurtas</a>
                          </li>
                          <li>
                            <a href="/">Jackets</a>
                          </li>
                          <li>
                            <a href="/">Sherwanis</a>
                          </li>
                          <li>
                            <a href="/">Suits & Tuxedos</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>GIRLS</h4>
                        <ul>
                          <li>
                            <a href="/">Dresses</a>
                          </li>
                          <li>
                            <a href="/">Kurta Sets</a>
                          </li>
                          <li>
                            <a href="/">Pant Sets</a>
                          </li>
                          <li>
                            <a href="/">Lehengas</a>
                          </li>
                          <li>
                            <a href="/">Jumpsuits</a>
                          </li>
                          <li>
                            <a href="/">Skirt Sets</a>
                          </li>
                          <li>
                            <a href="/">Tunics & Kurtis </a>
                          </li>
                          <li>
                            <a href="/">Gowns</a>
                          </li>
                          <li>
                            <a href="/">Sarees</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>
                            <a href="/">Rey&I</a>
                          </li>
                          <li>
                            <a href="/">LittleCheer</a>
                          </li>
                          <li>
                            <a href="/">Lil Drama</a>
                          </li>
                          <li>
                            <a href="/">Fayyon Kids</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/fk2708-fs23.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">FAYYON KIDS</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/lc-bdh.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">LITTLECHEER</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/lb3-aw-kpj.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">LIL DRAMA</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Accessories --> */}
              <li>
                <a href="/">
                  <span>Accessories</span>
                </a>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>
                            <a href="/">Bags</a>
                          </li>
                          <li>
                            <a href="/">Belts</a>
                          </li>
                          <li>
                            <a href="/">Gloves</a>
                          </li>
                          <li>
                            <a href="/">Brooches</a>
                          </li>
                          <li>
                            <a href="/">Clutch</a>
                          </li>
                          <li>
                            <a href="/">Potli</a>
                          </li>
                          <li>
                            <a href="/">Purse</a>
                          </li>
                          <li>
                            <a href="/">Pocket Squares</a>
                          </li>
                          <li>
                            <a href="/">Mens Footwear</a>
                          </li>
                          <li>
                            <a href="/">Womens Footwear</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>
                            <a href="/">Clutch'D</a>
                          </li>
                          <li>
                            <a href="/">Devina juneja</a>
                          </li>
                          <li>
                            <a href="/">Torani</a>
                          </li>
                          <li>
                            <a href="/">Veruschka</a>
                          </li>
                          <li>
                            <a href="/">S&N by Shantnu Nikhil</a>
                          </li>
                          <li>
                            <a href="/">Jatin Malik Couture</a>
                          </li>
                          <li>
                            <a href="/">Plode</a>
                          </li>
                          <li>
                            <a href="/">Amrit Dawani</a>
                          </li>
                          <li>
                            <a href="/">Bijoux by Priya Chandna</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/torani0004.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">TORANI</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/bucket_black.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">PLODE</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/gdm-ad010.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">AMRIT DAWANI</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Jewellery --> */}
              <li>
                <a href="/">
                  <span>Jewellery</span>
                </a>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li>
                            <a href="/">Earrings</a>
                          </li>
                          <li>
                            <a href="/">Bracelet</a>
                          </li>
                          <li>
                            <a href="/">Bangle</a>
                          </li>
                          <li>
                            <a href="/">Neckpiece</a>
                          </li>
                          <li>
                            <a href="/">Mala</a>
                          </li>
                          <li>
                            <a href="/">Kalgi</a>
                          </li>
                          <li>
                            <a href="/">Rings</a>
                          </li>
                          <li>
                            <a href="/">Necklaces</a>
                          </li>
                          <li>
                            <a href="/">Pendants</a>
                          </li>
                          <li>
                            <a href="/">Hair Accessories</a>
                          </li>
                          <li>
                            <a href="/">Chains</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>
                            <a href="/">Juwelen</a>
                          </li>
                          <li>
                            <a href="/">Jatin Malik Couture</a>
                          </li>
                          <li>
                            <a href="/">Mozaati</a>
                          </li>
                          <li>
                            <a href="/">Tesoro by Bhavika</a>
                          </li>
                          <li>
                            <a href="/">Twyla Treasures</a>
                          </li>
                          <li>
                            <a href="/">Bijoux by Priya Chandna</a>
                          </li>
                        </ul>
                        <div className="viewmore">
                          <a href="/">VIEW ALL</a>
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/bipc-pcbn.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">
                              BIJOUX BY PRIYA CHANDNA
                            </strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/07_3.jpg" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">JUWELEN</strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <a href="/">
                          <figure>
                            <img src="images/jm_ss22.png" />
                          </figure>
                          <figcaption className="text-center">
                            <strong className="d-block">
                              JATIN MALIK COUTURE
                            </strong>
                            <small>Shop Now</small>
                          </figcaption>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- The Vesimi Voice --> */}
              <li>
                <a href="/">
                  <span>The Vesimi Voice</span>
                </a>{" "}
              </li>
              <li>
                <a href="/">
                  <span>Gift card</span>
                </a>{" "}
              </li>
              <li>
                <a href="/" className="textred">
                  <span>Sale</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
