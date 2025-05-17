import React, { useState } from "react";
import LogoImage from "../../assets/images/VESIMI_new_logo-03.png";
import MasabaImg from "../../assets/images/msb23608.jpg";
import RidhimaImg from "../../assets/images/rr025-saj.png";
import Kalighata from "../../assets/images/avyanna.jpg";
import MoleradoImg from "../../assets/images/Moledro.jpg";
import WaverImg from "../../assets/images/WeaverStory.jpg";
import OneKnot from "../../assets/images/one.jpg";
import KupkImg from "../../assets/images/kupk-hans.jpg";
import MsbImg from "../../assets/images/msb23016.jpg";
import AhiiImg from "../../assets/images/ahii123013.jpg";
import Man1Img from "../../assets/images/snbs22mtr04.jpg";
import Man2Img from "../../assets/images/maaya25-2.jpg";
import Man3Img from "../../assets/images/jm-ss22.png";
import Kids1Img from "../../assets/images/fk2708-fs23.jpg";
import Kids2Img from "../../assets/images/lc-bdh.jpg";
import Kids3Img from "../../assets/images/lb3-aw-kpj.jpg";
import ToraniImg from "../../assets/images/torani0004.jpg";
import PlodImg from "../../assets/images/bucket_black.jpg";
import AmrtiImg from "../../assets/images/gdm-ad010.jpg";
import Jewellery1Img from "../../assets/images/bipc-pcbn.jpg";
import Jewellery2Img from "../../assets/images/07_3.jpg";
import Jewellery3Img from "../../assets/images/jm_ss22.png";
import sidebarClose from "../../assets/images/sidebarClose.png";
import CustomPopup from "../modal/CustomPopup";
import { Button, Form, Badge } from "react-bootstrap";
import HeaderController from "./headerController";
import { getCategoryUrl, removeSpaceOnly } from "../../utils";
import { Link } from "react-router-dom";
import { countryOptions } from "../../constant";
import InputField from "../forms/InputField";
import Loader from "../Loader";
import GoogleOauth from "./GoogleOauth";

const Header = () => {
  const {
    isOpenLoginPopup,
    handleOpenLoginPopup,
    isOpenSignupPopup,
    handleOpenSignupPopup,
    navigate,
    loginFormik,
    signupFormik,
    loginDetails,
    handleLogout,
    handleSearch,
    searchInput,
    handleCurrencyChange,
    setSearchInput,
    selectedCurrency,
    cartListData,
    isLoadingCartList,
    handleCart,
    handleWishList,
    isOpenResetPassEmail,
    setIsOpenResetPassEmail,
    resetPassEmailFormik,
    isOpenResetPassCode,
    confirmResetPassFormik,
    setIsOpenResetPassCode,
    isLoadingWishList,
    wishListData
  } = HeaderController();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpen((prev) => !prev);

    if (!isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  };

  const handleCloseSidebar = () => {
    document.body.classList.remove("sidebar-open"); // Remove the class from <body>
  };

  return (
    <header>
      <Loader isLoading={[isLoadingCartList, isLoadingWishList]} />
      <div className="headerTopRow">
        <div className="container">
          <div className="headerTop">
            <div className="navBrand">
              <button
                onClick={handleToggle}
                className="MobileNavToggle bg-image d-block d-lg-none "
                style={{ backgroundPosition: "-260px -158px" }}
              ></button>
              <img
                className="cursorPointer"
                src={LogoImage}
                onClick={() => navigate("/")}
              />
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle bg-transparent border-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="pl-1 text-sm cursorPointer">
                    {countryOptions[selectedCurrency]?.currency}
                  </span>
                </button>
                <div
                  className="dropdown-menu countrySETWrap"
                  aria-labelledby="countrySET"
                >
                  <ul className="SearchedcountryList">
                    {Object.values(countryOptions)
                      .filter((el: any) => el.currency !== selectedCurrency)
                      .map((element: any) => {
                        return (
                          <li
                            key={element?.currency}
                            onClick={() => handleCurrencyChange(element)}
                          >
                            <span>{element.currency}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="HeaderSearchOuter">
              <form onSubmit={handleSearch}>
                <span
                  className="headerSearchIcon bg-image"
                  style={{ backgroundPosition: "-411px -132px" }}
                ></span>
                <input
                  type="text"
                  value={searchInput}
                  className=""
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search for products, brand and more"
                />
                <button className="uploadSearchPicRight" type="submit">
                  Search
                </button>
              </form>
            </div>

            <div className="headerRight">
              <ul>
                <li className="profile">
                  <span
                    className="profileIcon bg-image w-5 h-6 d-block"
                    style={{ backgroundPosition: "-258px -132px" }}
                  ></span>
                  Profile
                  {loginDetails ? (
                    <ul className="ProfileDropDown">
                      <li>
                        <Link to={"/account"}>Your Account</Link>
                      </li>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  ) : (
                    <ul className="ProfileDropDown">
                      <li
                        onClick={() => handleOpenLoginPopup(!isOpenLoginPopup)}
                      >
                        Login
                      </li>
                      <li
                        onClick={() =>
                          handleOpenSignupPopup(!isOpenSignupPopup)
                        }
                      >
                        Register
                      </li>
                    </ul>
                  )}
                </li>
                <li className="Cart" onClick={handleWishList}>
                  <Badge className="cartCount" bg="danger" pill>
                    {wishListData?.data?.length}
                  </Badge>
                  <span
                    className="profileIcon bg-image w-6 h-6 d-block"
                    style={{ backgroundPosition: "-291px -132px" }}
                  ></span>
                  Wishlist
                </li>
                <li className="Cart" onClick={handleCart}>
                  <Badge className="cartCount" bg="danger" pill>
                    {cartListData?.data?.[0]?.cart_items?.length}
                  </Badge>
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
        <button className="sidebarClose d-lg-none" onClick={handleCloseSidebar}>
          {" "}
          <img src={sidebarClose} />
        </button>
        <div className="container">
          <nav className="Nav-bar">
            <ul>
              <li onClick={() => navigate("/")}>
                <span>Home</span>
              </li>
              {/* <!-- what's new  --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl("what's-new"))}>
                  What's New
                </span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl("women"))}>
                            Women
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("men"))}>
                            Men
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jewellery"))
                            }
                          >
                            Jewellery
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("accessories"))
                            }
                          >
                            Accessories
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("kids"))}>
                            Kids
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl("whats-new"))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4 onClick={() => navigate(getCategoryUrl("women"))}>
                          DESIGNERS
                        </h4>
                        <ul>
                          <li
                            onClick={() => navigate(getCategoryUrl("masaba"))}
                          >
                            Masaba
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("vvani-by-vani-vats"))
                            }
                          >
                            Vvani by Vani Vats
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("vannikaa-malik"))
                            }
                          >
                            Vannikaa Malik
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("krisha-sunny-ramani"))
                            }
                          >
                            Krisha Sunny Ramani
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("redpine-designs"))
                            }
                          >
                            Redpine Designs
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kudi-pataka"))
                            }
                          >
                            Kudi Pataka
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("rooh-by-ridhimaa"))
                            }
                          >
                            Rooh by Ridhimaa
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("tyohar"))}
                          >
                            Tyohar
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate("/designer")}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("masaba"))}
                      >
                        <figure>
                          <img src={MasabaImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Masaba</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() =>
                          navigate(getCategoryUrl("ridhimaa-gupta"))
                        }
                      >
                        <figure>
                          <img src={RidhimaImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Ridhimaa Gupta</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("kalighata"))}
                      >
                        <figure>
                          <img src={Kalighata} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Kalighata</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Designers --> */}
              <li>
                <span onClick={() => navigate("/designer")}>Designers</span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>SALE</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl("kovet"))}>
                            Kovet
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("khushboo--pankaj"))
                            }
                          >
                            Khushboo & Pankaj
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("lil-drama"))
                            }
                          >
                            Lil Drama
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>FEATURED</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("amka-india"))
                            }
                          >
                            Amka India
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("amrit-dawani"))
                            }
                          >
                            Amrit Dawani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("ease"))}>
                            Ease
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("inder-clothing-studio"))
                            }
                          >
                            Inder Clothing Studio
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("masumi-mewawalla"))
                            }
                          >
                            Masumi Mewawalla
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("monisha-jaising"))
                            }
                          >
                            Monisha Jaising
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("nikita-vishakha"))
                            }
                          >
                            Nikita Vishakha
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("pink-city-by-sarika"))
                            }
                          >
                            Pink City by Sarika
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("neeta-lulla"))
                            }
                          >
                            Neeta Lulla
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("mala-and-kinnary"))
                            }
                          >
                            Mala And Kinnary
                          </li>
                        </ul>
                        <div
                          className="viewmore"
                          onClick={() => navigate("/designer")}
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>TRENDING</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("ahi-clothing"))
                            }
                          >
                            Ahi Clothing
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("vvani-by-vani-vats"))
                            }
                          >
                            Vvani by Vani Vats
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("vannikaa-malik"))
                            }
                          >
                            Vannikaa Malik
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("krisha-sunny-ramani"))
                            }
                          >
                            Krisha Sunny Ramani
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("bhanuni-by-jyoti"))
                            }
                          >
                            Bhanuni by Jyoti
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("enness-studio"))
                            }
                          >
                            Enness Studio
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("mona--vishu"))
                            }
                          >
                            Mona & Vishu
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jigar--nikita"))
                            }
                          >
                            Jigar & Nikita
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("masaba"))}
                          >
                            Masaba
                          </li>
                        </ul>
                        <div
                          className="viewmore"
                          onClick={() => navigate("/designer")}
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("moledro"))}
                      >
                        <figure>
                          <img src={MoleradoImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Moledro</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("weaver-story"))}
                      >
                        <figure>
                          <img src={WaverImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Weaver Story</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("one-knot-one"))}
                      >
                        <figure>
                          <img src={OneKnot} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">One Knot One</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- WOMEN --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl("women"))}>Women</span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li
                            onClick={() => navigate(getCategoryUrl("lehengas"))}
                          >
                            Lehengas
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("dresses"))}
                          >
                            Dresses
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("gowns"))}>
                            Gowns
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("blouses"))}
                          >
                            Blouses
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("dupattas"))}
                          >
                            Dupattas
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("sarees"))}
                          >
                            Sarees
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("crop-tops"))
                            }
                          >
                            Crop Tops
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("anarkali-sets"))
                            }
                          >
                            Anarkali Set
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("sharara-sets"))
                            }
                          >
                            Sharara Set
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("lehenga-set"))
                            }
                          >
                            Lehenga Set
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kurta-sets"))
                            }
                          >
                            Kurta Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("palazzo-sets"))
                            }
                          >
                            Palazzo Set
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("skirt-sets"))
                            }
                          >
                            Skirt Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("pant-sets"))
                            }
                          >
                            Pant Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("blazer-set"))
                            }
                          >
                            Blazer Set
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("jackets"))}
                          >
                            Jackets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jumpsuits"))
                            }
                          >
                            Jumpsuits
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("trousers"))}
                          >
                            Trousers
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("kaftans"))}
                          >
                            Kaftans
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("tops"))}>
                            Tops
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("co-ord-sets"))
                            }
                          >
                            Co-Ord Set
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl("women"))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("ahi-clothing"))
                            }
                          >
                            Ahi Clothing
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("vvani-by-vani-vats"))
                            }
                          >
                            Vvani by Vani Vats
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("vannikaa-malik"))
                            }
                          >
                            Vannikaa Malik
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("krisha-sunny-ramani"))
                            }
                          >
                            Krisha Sunny Ramani
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("bhanuni-by-jyoti"))
                            }
                          >
                            Bhanuni by Jyoti
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("enness-studio"))
                            }
                          >
                            Enness Studio
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("moledro"))}
                          >
                            Moledro
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jigar--nikita"))
                            }
                          >
                            Jigar & Nikita
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("masaba"))}
                          >
                            Masaba
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate("/designer")}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("ahi-clothing"))}
                      >
                        <figure>
                          <img src={AhiiImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Ahi Clothing</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("kudi-pataka"))}
                      >
                        <figure>
                          <img src={KupkImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Kudi Pataka</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("masaba"))}
                      >
                        <figure>
                          <img src={MsbImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Masaba</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Man --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl("men"))}>Men</span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kurta-sets-31c54"))
                            }
                          >
                            Kurta Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-kurtas"))
                            }
                          >
                            Kurtas
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-kurta-pyjamas"))
                            }
                          >
                            Kurta Pyjamas
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-sherwanis"))
                            }
                          >
                            Sherwanis
                          </li>
                          <li
                            onClick={() =>
                              navigate(
                                getCategoryUrl("men-nehru-jacket-sets")
                              )
                            }
                          >
                            Nehru Jacket & Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-bandhgalas"))
                            }
                          >
                            Bandhgalas
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-shirts"))
                            }
                          >
                            Shirts
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-footwear"))
                            }
                          >
                            Footwear
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-bottoms"))
                            }
                          >
                            Bottoms
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-jackets"))
                            }
                          >
                            Jackets
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-tuxedo-set"))
                            }
                          >
                            Tuxedo Set
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-shorts"))
                            }
                          >
                            Shorts
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-tuxedo"))
                            }
                          >
                            Tuxedo
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-trousers"))
                            }
                          >
                            Trousers
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-waistcoats"))
                            }
                          >
                            Waistcoat
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-shrug-set"))
                            }
                          >
                            Shrug Set
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-pashmina-shawl"))
                            }
                          >
                            Pashmina Shawl
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-jodhpuris"))
                            }
                          >
                            Jodhpuris
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("men-bandi-set"))
                            }
                          >
                            Bandi Set
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl("men"))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("inder-clothing-studio"))
                            }
                          >
                            Inder Clothing Studio
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jenjum-gadi"))
                            }
                          >
                            Jenjum Gadi
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("kalista"))}
                          >
                            Kalista
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("krisha-sunny-ramani"))
                            }
                          >
                            Krisha Sunny Ramani
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("masaba"))}
                          >
                            Masaba
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("s--n-by-shantnu-nikhil"))
                            }
                          >
                            S&N by Shantnu Nikhil
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jatin-malik-couture"))
                            }
                          >
                            Jatin Malik Couture
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("khushboo--pankaj"))
                            }
                          >
                            Khushboo & Pankaj
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jigar--nikita"))
                            }
                          >
                            Jigar & Nikita
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("rey--i"))}
                          >
                            Rey & I
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate("/designer")}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() =>
                          navigate(getCategoryUrl("s--n-by-shantnu-nikhil"))
                        }
                      >
                        <figure>
                          <img src={Man1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">SHANTNU & NIKHIL</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() =>
                          navigate(getCategoryUrl("krisha-sunny-ramani"))
                        }
                      >
                        <figure>
                          <img src={Man2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            KRISHA SUNNY RAMANI
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() =>
                          navigate(getCategoryUrl("jatin-malik-couture"))
                        }
                      >
                        <figure>
                          <img src={Man3Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            JATIN MALIK COUTURE
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Kids --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl("kids"))}>
                  Kids
                </span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>BOYS</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-boys-shorts"))
                            }
                          >
                            Shorts
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kurta-sets-2c5ec"))
                            }
                          >
                            Kurta Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-boys-kurtas"))
                            }
                          >
                            Kurtas
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-boys-jackets"))
                            }
                          >
                            Jackets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-boys-sherwanis"))
                            }
                          >
                            Sherwanis
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-boys-suits-tuxedos"))
                            }
                          >
                            Suits & Tuxedos
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl("boys"))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>GIRLS</h4>
                        <ul>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-dresses"))
                            }
                          >
                            Dresses
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kurta-sets-8397a"))
                            }
                          >
                            Kurta Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-pant-sets"))
                            }
                          >
                            Pant Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("lehengas-dc184"))
                            }
                          >
                            Lehengas
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-jumpsuits"))
                            }
                          >
                            Jumpsuits
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-skirt-sets"))
                            }
                          >
                            Skirt Sets
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-tunics--kurtis"))
                            }
                          >
                            Tunics & Kurtis
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-gowns"))
                            }
                          >
                            Gowns
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("kids-girls-sarees"))
                            }
                          >
                            Sarees
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl("girls"))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li
                            onClick={() => navigate(getCategoryUrl("rey--i"))}
                          >
                            Rey & I
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("little-cheer"))
                            }
                          >
                            Little Cheer
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("lil-drama"))
                            }
                          >
                            Lil Drama
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("fayyon-kids"))
                            }
                          >
                            Fayyon Kids
                          </li>
                        </ul>
                        <div
                          className="viewmore"
                          onClick={() => navigate("/designer")}
                        >
                          VIEW ALL
                        </div>
                        </div>


                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("fayyon-kids"))}
                      >
                        <figure>
                          <img src={Kids1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">FAYYON KIDS</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("little-cheer"))}
                      >
                        <figure>
                          <img src={Kids2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">LITTLE CHEER</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("lil-drama"))}
                      >
                        <figure>
                          <img src={Kids3Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">LIL DRAMA</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Accessories --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl("accessories"))}>
                  Accessories
                </span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl("bags"))}>
                            Bags
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("belts"))}>
                            Belts
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("gloves"))}
                          >
                            Gloves
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("brooches"))}
                          >
                            Brooches
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("clutch"))}
                          >
                            Clutch
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("potli"))}>
                            Potli
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("purse"))}>
                            Purse
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("pocket-squares"))
                            }
                          >
                            Pocket Squares
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("footwear"))}
                          >
                            Mens Footwear
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("footwear"))}
                          >
                            Womens Footwear
                          </li>
                        </ul>
                        <div
                          className="viewmore"
                          onClick={() => navigate(getCategoryUrl("accessories"))}
                        >
                          VIEW ALL
                        </div>
                        </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li
                            onClick={() => navigate(getCategoryUrl("clutchd"))}
                          >
                            Clutch'D
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("devina-juneja"))
                            }
                          >
                            Devina Juneja
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("torani"))}
                          >
                            Torani
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("veruschka"))
                            }
                          >
                            Veruschka
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("s--n-by-shantnu-nikhil"))
                            }
                          >
                            S&N by Shantnu Nikhil
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jatin-malik-couture"))
                            }
                          >
                            Jatin Malik Couture
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("plode"))}>
                            Plode
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("amrit-dawani"))
                            }
                          >
                            Amrit Dawani
                          </li>
                          <li
                            onClick={() =>
                              navigate(
                                getCategoryUrl("bijoux-by-priya-chandna")
                              )
                            }
                          >
                            Bijoux by Priya Chandna
                          </li>
                        </ul>
                        <div
                          className="viewmore"
                          onClick={() => navigate("/designer")}
                        >
                          VIEW ALL
                        </div>
                        </div>


                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("torani"))}
                      >
                        <figure>
                          <img src={ToraniImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">TORANI</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("plode"))}
                      >
                        <figure>
                          <img src={PlodImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">PLODE</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("amrit-dawani"))}
                      >
                        <figure>
                          <img src={AmrtiImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">AMRIT DAWANI</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Jewellery --> */}
              <li>
                <span onClick={() => navigate(getCategoryUrl("jewellery"))}>
                  Jewellery
                </span>
                <div className="subNavPart" onClick={handleCloseSidebar}>
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li
                            onClick={() => navigate(getCategoryUrl("earrings"))}
                          >
                            Earrings
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("bracelet"))}
                          >
                            Bracelet
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("bangle"))}
                          >
                            Bangle
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("neckpiece"))
                            }
                          >
                            Neckpiece
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("mala"))}>
                            Mala
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("kalgi"))}>
                            Kalgi
                          </li>
                          <li onClick={() => navigate(getCategoryUrl("rings"))}>
                            Rings
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("necklaces"))
                            }
                          >
                            Necklaces
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("pendants"))}
                          >
                            Pendants
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("hair-accessories"))
                            }
                          >
                            Hair Accessories
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("chains"))}
                          >
                            Chains
                          </li>
                        </ul>
                        <div
                          className="viewmore"
                          onClick={() => navigate(getCategoryUrl("jewellery"))}
                        >
                          VIEW ALL
                        </div>
                        </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li
                            onClick={() => navigate(getCategoryUrl("juwelen"))}
                          >
                            Juwelen
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("jatin-malik-couture"))
                            }
                          >
                            Jatin Malik Couture
                          </li>
                          <li
                            onClick={() => navigate(getCategoryUrl("mozaati"))}
                          >
                            Mozaati
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("tesoro-by-bhavika"))
                            }
                          >
                            Tesoro by Bhavika
                          </li>
                          <li
                            onClick={() =>
                              navigate(getCategoryUrl("twyla-treasures"))
                            }
                          >
                            Twyla Treasures
                          </li>
                          <li
                            onClick={() =>
                              navigate(
                                getCategoryUrl("bijoux-by-priya-chandna")
                              )
                            }
                          >
                            Bijoux by Priya Chandna
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl("jewellery"))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() =>
                          navigate(getCategoryUrl("bijoux-by-priya-chandna"))
                        }
                      >
                        <figure>
                          <img src={Jewellery1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            BIJOUX BY PRIYA CHANDNA
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl("juwelen"))}
                      >
                        <figure>
                          <img src={Jewellery2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">JUWELEN</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() =>
                          navigate(getCategoryUrl("jatin-malik-couture"))
                        }
                      >
                        <figure>
                          <img src={Jewellery3Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">
                            JATIN MALIK COUTURE
                          </strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- The Vesimi Voice --> */}
              <li
                onClick={() => {
                  handleCloseSidebar();
                  navigate("/blog");
                }}
              >
                <span>The Vesimi Voice</span>
              </li>
              <li
                onClick={() => {
                  handleCloseSidebar();
                  navigate(getCategoryUrl("gift-card"));
                }}
              >
                <span>Gift card</span>
              </li>
              <li
                onClick={() => {
                  handleCloseSidebar();
                  navigate(`${getCategoryUrl(4)}?sale=1`);
                }}
                className="textred"
              >
                <span>Sale</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <CustomPopup
        modalClass="loginModal"
        show={isOpenLoginPopup}
        handleClose={() => {
          handleOpenLoginPopup(false);
          setIsOpenResetPassEmail(false);
          setIsOpenResetPassCode(false);
        }}
        modalHeader={
          isOpenResetPassCode || isOpenResetPassEmail
            ? "Forget Password"
            : "Login"
        }
      >
        {isOpenResetPassCode ? (
          <Form onSubmit={confirmResetPassFormik?.handleSubmit}>
            <InputField
              label={"Verification Code"}
              onChange={confirmResetPassFormik.handleChange}
              value={confirmResetPassFormik.values.code}
              name="code"
              type="text"
              placeholder="Enter verification code"
              required={true}
              onKeyDown={removeSpaceOnly}
              touched={confirmResetPassFormik.touched.code}
              errors={confirmResetPassFormik.errors.code}
            />
            <InputField
              label={"Password"}
              onChange={confirmResetPassFormik.handleChange}
              value={confirmResetPassFormik.values.reset_password}
              name="reset_password"
              type="password"
              placeholder="Enter password"
              required={true}
              onKeyDown={removeSpaceOnly}
              touched={confirmResetPassFormik.touched.reset_password}
              errors={confirmResetPassFormik.errors.reset_password}
            />
            <InputField
              label={"Confirm Password"}
              onChange={confirmResetPassFormik.handleChange}
              value={confirmResetPassFormik.values.passowrd_confirmation}
              name="passowrd_confirmation"
              type="passowrd"
              placeholder="Enter confirm password"
              required={true}
              onKeyDown={removeSpaceOnly}
              touched={confirmResetPassFormik.touched.passowrd_confirmation}
              errors={confirmResetPassFormik.errors.passowrd_confirmation}
            />
            <div className="d-flex justify-content-end gap-2 mt-3">
              <Button
                className="font-14 w-100 themeCancelBtn"
                onClick={() => {
                  handleOpenLoginPopup(false);
                  setIsOpenResetPassEmail(false);
                }}
              >
                Cancel
              </Button>
              <Button className="font-14 w-100 themePrimaryBtn" type="submit">
                Send Code
              </Button>
            </div>
          </Form>
        ) : isOpenResetPassEmail ? (
          <Form onSubmit={resetPassEmailFormik?.handleSubmit}>
            <InputField
              label={"Email"}
              onChange={resetPassEmailFormik.handleChange}
              value={resetPassEmailFormik.values.email}
              name="email"
              type="text"
              placeholder="Enter email"
              required={true}
              onKeyDown={removeSpaceOnly}
              touched={resetPassEmailFormik.touched.email}
              errors={resetPassEmailFormik.errors.email}
            />
            <div className="d-flex justify-content-end gap-2 mt-3">
              <Button
                className="font-14 w-100 themeCancelBtn"
                onClick={() => {
                  handleOpenLoginPopup(false);
                  setIsOpenResetPassEmail(false);
                }}
              >
                Cancel
              </Button>
              <Button className="font-14 w-100 themePrimaryBtn" type="submit">
                Send Code
              </Button>
            </div>
          </Form>
        ) : (
          <Form onSubmit={loginFormik?.handleSubmit}>
            <InputField
              label={"Email"}
              onChange={loginFormik.handleChange}
              value={loginFormik.values.email}
              name="email"
              type="name"
              placeholder="Enter email or phone number"
              required={true}
              onKeyDown={removeSpaceOnly}
              touched={loginFormik.touched.email}
              errors={loginFormik.errors.email}
            />
            <InputField
              label={"Password"}
              onChange={loginFormik.handleChange}
              value={loginFormik.values.password}
              name="password"
              type="password"
              placeholder="Enter password"
              required={true}
              onKeyDown={removeSpaceOnly}
              touched={loginFormik.touched.password}
              errors={loginFormik.errors.password}
            />
            <div className="mt-3 d-flex justify-content-between forgot-remember">
              <Button
                variant="link"
                onClick={() => {
                  setIsOpenResetPassEmail(true);
                }}
              >
                Forgot password?
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  handleOpenLoginPopup(false);
                  handleOpenSignupPopup(true);
                }}
              >
                Create an account
              </Button>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-3">
              <Button
                className="font-14 w-100 themeCancelBtn"
                onClick={() => handleOpenLoginPopup(false)}
              >
                Cancel
              </Button>
              <Button className="font-14 w-100 themePrimaryBtn" type="submit">
                Login
              </Button>
            </div>
            <GoogleOauth />
          </Form>
        )}
      </CustomPopup>
      <CustomPopup
        modalClass="loginModal"
        show={isOpenSignupPopup}
        modalHeader="Create an Account"
        handleClose={() => handleOpenSignupPopup(false)}
      >
        <Form onSubmit={signupFormik.handleSubmit}>
          <InputField
            label={"Name"}
            onChange={signupFormik.handleChange}
            value={signupFormik.values.name}
            name="name"
            type="text"
            placeholder="Enter name"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={signupFormik.touched.name}
            errors={signupFormik.errors.name}
          />
          <InputField
            label={"Email"}
            onChange={signupFormik.handleChange}
            value={signupFormik.values.email_or_phone}
            name="email_or_phone"
            type="text"
            placeholder="Enter email or Contact number"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={signupFormik.touched.email_or_phone}
            errors={signupFormik.errors.email_or_phone}
          />
          <InputField
            label={"Password"}
            onChange={signupFormik.handleChange}
            value={signupFormik.values.password}
            name="password"
            type="password"
            placeholder="Enter password"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={signupFormik.touched.password}
            errors={signupFormik.errors.password}
          />
          <InputField
            label={"Confirm Password"}
            onChange={signupFormik.handleChange}
            value={signupFormik.values.passowrd_confirmation}
            name="passowrd_confirmation"
            type="passowrd"
            placeholder="Enter confirm password"
            required={true}
            onKeyDown={removeSpaceOnly}
            touched={signupFormik.touched.passowrd_confirmation}
            errors={signupFormik.errors.passowrd_confirmation}
          />

          <div className="mt-3 d-flex justify-content-center">
            <Button
              className="ps-0 d-block text-center text-dark"
              variant="link"
              onClick={() => {
                handleOpenLoginPopup(true);
                handleOpenSignupPopup(false);
              }}
            >
              Already have an account
            </Button>
          </div>
          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button
              className="font-14 w-100 themeCancelBtn"
              onClick={() => handleOpenSignupPopup(false)}
            >
              Cancel
            </Button>
            <Button className="font-14 w-100 themePrimaryBtn" type="submit">
              SignUp
            </Button>
          </div>
        </Form>
        <GoogleOauth />
      </CustomPopup>
    </header>
  );
};

export default Header;