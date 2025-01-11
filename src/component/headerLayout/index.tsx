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
import CustomPopup from "component/modal/CustomPopup";
import { Button, Form, Badge } from "react-bootstrap";
import HeaderController from "./headerController";
import InputField from "component/forms/InputField";
import { getCategoryUrl, removeSpaceOnly } from "utils";
import { Link } from "react-router-dom";
import { countryOptions } from "constant";
import Loader from "component/Loader";

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
    isOpenResetPassEmail,
    setIsOpenResetPassEmail,
    resetPassEmailFormik,
    isOpenResetPassCode,
    confirmResetPassFormik,
    setIsOpenResetPassCode,
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
      <Loader isLoading={[isLoadingCartList]} />
      <div className="headerTopRow">
        <div className="container">
          <div className="headerTop">
            <div className="navBrand">
              <button
                onClick={handleToggle}
                className="MobileNavToggle bg-image d-block d-lg-none "
                style={{ backgroundPosition: "-260px -158px" }}
              ></button>
              <img className="cursorPointer" src={LogoImage} onClick={() => navigate("/")} />
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle bg-transparent border-0"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-sm me-2">
                    {countryOptions[selectedCurrency]?.country}
                  </span>
                  <span className="pl-1 text-sm cursorPointer">
                    ({countryOptions[selectedCurrency]?.currency})
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
                            <span>{element.country}</span>
                            <span>({element.currency})</span>
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
                <li className="wishList">
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
                <span onClick={() => navigate(getCategoryUrl(3))}>
                  What's New
                </span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(6))}>
                            Women
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(20))}>
                            Men
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(366))}>
                            Jewellery
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(121))}>
                            Accessories
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2285))}>
                            Kids
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(3))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4 onClick={() => navigate(getCategoryUrl(6))}>
                          DESIGNERS
                        </h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(212))}>
                            Masaba
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(421))}>
                            Vvani by Vani Vats
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2702))}>
                            Vannikaa Malik
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(587))}>
                            Krisha Sunny Ramani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1411))}>
                            Redpine Designs
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2549))}>
                            Kudi Pataka
                          </li>

                          <li onClick={() => navigate(getCategoryUrl(2775))}>
                            Rooh by Ridhimaa
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2272))}>
                            Deme by Gabriella
                          </li>

                          <li onClick={() => navigate(getCategoryUrl(2678))}>
                            Tyohar
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(4))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl(212))}
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
                        onClick={() => navigate(getCategoryUrl(2753))}
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
                        onClick={() => navigate(getCategoryUrl(1693))}
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
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>SALE</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(601))}>
                            Kovet
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1980))}>
                            Khushboo & Pankaj
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2448))}>
                            Lil Drama
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>FEATURED</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(1683))}>
                            Amka India
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1780))}>
                            Amrit Dawani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1302))}>
                            Ease
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(594))}>
                            Inder Clothing Studio
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(373))}>
                            Masumi Mewawalla
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(489))}>
                            Monisha Jaising
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(492))}>
                            Nikita Vishakha
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(561))}>
                            Pink City by Sarika
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(501))}>
                            Neeta Lulla
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(443))}>
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
                          <li onClick={() => navigate(getCategoryUrl(2511))}>
                            Ahi Clothing
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(421))}>
                            Vvani by Vani Vats
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2702))}>
                            Vannikaa Malik
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(587))}>
                            Krisha Sunny Ramani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1649))}>
                            Bhanuni by Jyoti
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1801))}>
                            Enness Studio
                          </li>

                          <li onClick={() => navigate(getCategoryUrl(2272))}>
                            Deme By Gabriella
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1666))}>
                            Mona & Vishu
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2053))}>
                            Jigar & Nikita
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(212))}>
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
                        onClick={() => navigate(getCategoryUrl(1486))}
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
                        onClick={() => navigate(getCategoryUrl(570))}
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
                        onClick={() => navigate(getCategoryUrl(1757))}
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
                <span onClick={() => navigate(getCategoryUrl(6))}>Woman</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(134))}>
                            Lehengas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(128))}>
                            Dresses
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(129))}>
                            Gowns
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(126))}>
                            Blouses
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(127))}>
                            Dupattas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(136))}>
                            Sarees
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1882))}>
                            Crop Tops
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1838))}>
                            Anarkali Set
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1837))}>
                            Sharara Set
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(400))}>
                            Lehenga Set
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(394))}>
                            Kurta Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1841))}>
                            Palazzo Set
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(398))}>
                            Skirt Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(420))}>
                            Pant Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(606))}>
                            Blazer Set
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(130))}>
                            Jackets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(131))}>
                            Jumpsuits
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(600))}>
                            Trousers
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(132))}>
                            Kaftans
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(140))}>
                            Tops
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(480))}>
                            Co-Ord Set
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(6))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(2512))}>
                            Ahi Clothing
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(901))}>
                            Vvani by Vani Vats
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2703))}>
                            Vannikaa Malik
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(952))}>
                            Krisha Sunny Ramani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1650))}>
                            Bhanuni by Jyoti
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1802))}>
                            Enness Studio
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2273))}>
                            Deme By Gabriella
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1488))}>
                            Moledro
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2055))}>
                            Jigar & Nikita
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(967))}>
                            Masaba
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(6))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl(2512))}
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
                        onClick={() => navigate(getCategoryUrl(2550))}
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
                        onClick={() => navigate(getCategoryUrl(967))}
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
                <span onClick={() => navigate(getCategoryUrl(20))}>Man</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(446))}>
                            Kurta Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(409))}>
                            Kurtas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(144))}>
                            Kurta Pyjamas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(145))}>
                            Sherwanis
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2156))}>
                            Nehru Jacket & Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(141))}>
                            Bandhgalas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(146))}>
                            Shirts
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(633))}>
                            Footwear
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1040))}>
                            Bottoms
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(408))}>
                            Jackets
                          </li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(1788))}>
                            Tuxedo Set
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1433))}>
                            Shorts
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(626))}>
                            Tuxedo
                          </li>
                          {/* <li onClick={() => navigate(getCategoryUrl(1325))}>Ethnic Wear</li> */}
                          <li onClick={() => navigate(getCategoryUrl(557))}>
                            Trousers
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(524))}>
                            Waistcoat
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(624))}>
                            Shrug Set
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(628))}>
                            Pashmina Shawl
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1796))}>
                            Jodhpuris
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1634))}>
                            Bandi Set
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(20))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(925))}>
                            Inder Clothing Studio
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(936))}>
                            Jenjum Gadi
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(945))}>
                            Kalista
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(951))}>
                            Krisha Sunny Ramani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(966))}>
                            Masaba
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(923))}>
                            S&N by Shantnu Nikhil
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1086))}>
                            Jatin Malik Couture
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1981))}>
                            Khushboo & Pankaj
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2054))}>
                            Jigar & Nikita
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2292))}>
                            Rey & I
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(20))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl(923))}
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
                        onClick={() => navigate(getCategoryUrl(951))}
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
                        onClick={() => navigate(getCategoryUrl(1086))}
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
                <span onClick={() => navigate(getCategoryUrl(2285))}>Kids</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>BOYS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(2286))}>
                            Shorts
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2338))}>
                            Kurta Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2340))}>
                            Kurtas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2341))}>
                            Jackets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2546))}>
                            Sherwanis
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2547))}>
                            Suits & Tuxedos
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(2290))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>GIRLS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(2336))}>
                            Dresses
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2337))}>
                            Kurta Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2456))}>
                            Pant Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2458))}>
                            Lehengas
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2459))}>
                            Jumpsuits
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2543))}>
                            Skirt Sets
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2544))}>
                            Tunics & Kurtis
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2545))}>
                            Gowns
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2548))}>
                            Sarees
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(2335))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(2288))}>
                            Rey&I
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2342))}>
                            LittleCheer
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2457))}>
                            Lil Drama
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2528))}>
                            Fayyon Kids
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl(2528))}
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
                        onClick={() => navigate(getCategoryUrl(2342))}
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
                        onClick={() => navigate(getCategoryUrl(2457))}
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
                <span onClick={() => navigate(getCategoryUrl(121))}>
                  Accessories
                </span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(154))}>
                            Bags
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(155))}>
                            Belts
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(537))}>
                            Gloves
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(580))}>
                            Brooches
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(158))}>
                            Clutch
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(160))}>
                            Potli
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(431))}>
                            Purse
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(149))}>
                            Pocket Squares
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(633))}>
                            Mens Footwear
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(156))}>
                            Womens Footwear
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(896))}>
                            Clutch'D
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2209))}>
                            Devina juneja
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(915))}>
                            Torani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(905))}>
                            Veruschka
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(929))}>
                            S&N by Shantnu Nikhil
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(933))}>
                            Jatin Malik Couture
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1542))}>
                            Plode
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1784))}>
                            Amrit Dawani
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2360))}>
                            Bijoux by Priya Chandna
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl(915))}
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
                        onClick={() => navigate(getCategoryUrl(1542))}
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
                        onClick={() => navigate(getCategoryUrl(1784))}
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
                <span onClick={() => navigate(getCategoryUrl(366))}>
                  Jewellery
                </span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>CATEGORIES</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(582))}>
                            Earrings
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(583))}>
                            Bracelet
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(584))}>
                            Bangle
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(585))}>
                            Neckpiece
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(629))}>
                            Mala
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(630))}>
                            Kalgi
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1681))}>
                            Rings
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1682))}>
                            Necklaces
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1779))}>
                            Pendants
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1851))}>
                            Hair Accessories
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1852))}>
                            Chains
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li onClick={() => navigate(getCategoryUrl(941))}>
                            Juwelen
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1088))}>
                            Jatin Malik Couture
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1674))}>
                            Mozaati
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1774))}>
                            Tesoro by Bhavika
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(1844))}>
                            Twyla Treasures
                          </li>
                          <li onClick={() => navigate(getCategoryUrl(2367))}>
                            Bijoux by Priya Chandna
                          </li>
                        </ul>
                        <div
                          onClick={() => navigate(getCategoryUrl(366))}
                          className="viewmore"
                        >
                          VIEW ALL
                        </div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div
                        className="SubNavGrid ProductDemoGrid"
                        onClick={() => navigate(getCategoryUrl(2367))}
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
                        onClick={() => navigate(getCategoryUrl(941))}
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
                        onClick={() => navigate(getCategoryUrl(1088))}
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
              <li>
                <span>The Vesimi Voice</span>{" "}
              </li>
              <li>
                <span>Gift card</span>
              </li>
              <li className="textred">
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
        <div className="mt-4 text-center">
          {/* <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={()=>{}}
              onError={()=>{}}
            />
          </GoogleOAuthProvider> */}
        </div>
      </CustomPopup>
    </header>
  );
};

export default Header;
