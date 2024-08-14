import LogoImage from "../../assets/images/VESIMI_new_logo-03.png";
import Loader from "component/Loader";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import "../../scss/customPopup.css";

import MasabaImg from "../../assets/images/msb23608.jpg";
import RidhimaImg from "../../assets/images/rr025-saj.png";
import Kalighata from "../../assets/images/avyanna.jpg";
import MoleradoImg from "../../assets/images/Moledro.jpg"
import WaverImg from "../../assets/images/WeaverStory.jpg";
import OneKnot from "../../assets/images/one.jpg";
import KupkImg from "../../assets/images/kupk-hans.jpg";
import MsbImg from "../../assets/images/msb23016.jpg";
import AhiiImg from "../../assets/images/ahii123013.jpg";
import Man1Img from "../../assets/images/snbs22mtr04.jpg"
import Man2Img from "../../assets/images/maaya25-2.jpg";
import Man3Img from "../../assets/images/jm-ss22.png";
import Kids1Img from "../../assets/images/fk2708-fs23.jpg";
import Kids2Img from "../../assets/images/lc-bdh.jpg";
import Kids3Img from "../../assets/images/lb3-aw-kpj.jpg";
import ToraniImg from "../../assets/images/torani0004.jpg";
import PlodImg from "../../assets/images/bucket_black.jpg";
import AmrtiImg from "../../assets/images/gdm-ad010.jpg";
import Jewellery1Img from "../../assets/images/bipc-pcbn.jpg"
import Jewellery2Img from "../../assets/images/07_3.jpg";
import Jewellery3Img from "../../assets/images/jm_ss22.png";
import CustomPopup from "component/modal/CustomPopup";
import { Button, Form } from "react-bootstrap";
import HeaderController from "./headerController";
import InputField from "component/forms/InputField";
import { removeSpaceOnly } from "utils";

const Header = () => {

  const {
    isOpenLoginPopup,
    setIsOpenLoginPopup,
    isOpenSignupPopup,
    setIsOpenSignupPopup,
    isLoadingMenuBar,
    navigate,
    loginFormik,
  } = HeaderController();

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
                    <li onClick={() => setIsOpenLoginPopup(!isOpenLoginPopup)}>
                      Login
                    </li>
                    <li
                      onClick={() => setIsOpenSignupPopup(!isOpenSignupPopup)}
                    >
                      Register
                    </li>
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
              <li onClick={() => navigate("/")}>
                <span>Home</span>
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
                          <li onClick={() => navigate("/category/1424")}>
                            Jewellery
                          </li>
                          <li onClick={() => navigate("/category/1407")}>
                            Accessories
                          </li>
                          <li onClick={() => navigate("/category/1389")}>
                            Kids
                          </li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4 onClick={() => navigate("/category/1389")}>
                          DESIGNERS
                        </h4>
                        <ul>
                          <li onClick={() => navigate("/category/1389")}>
                            Masaba
                          </li>
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
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={MasabaImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Masaba</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={RidhimaImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Ridhimaa Gupta</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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
              <li onClick={() => navigate("/category/6")}>
                <span>Designers</span>
                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>SALE</h4>
                        <ul>
                          <li>Kovet</li>
                          <li>Khushboo & Pankaj</li>
                          <li>Lil Drama</li>
                        </ul>
                      </div>

                      <div className="SubNavGrid">
                        <h4>FEATURED</h4>
                        <ul>
                          <li>Amka India</li>
                          <li>Amrit Dawani</li>
                          <li>Ease</li>
                          <li>Inder Clothing Studio</li>
                          <li>Masumi Mewawalla</li>
                          <li>Monisha Jaising</li>
                          <li>Nikita Vishakha</li>
                          <li>Pink City by Sarika</li>
                          <li>Neeta Lulla</li>
                          <li>Mala And Kinnary</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>TRENDING</h4>
                        <ul>
                          <li>Ahi Clothing</li>
                          <li>Vvani by Vani Vats</li>
                          <li>Vannikaa Malik</li>
                          <li>Krisha Sunny Ramani</li>
                          <li>Bhanuni by Jyoti</li>
                          <li>Enness Studio</li>
                          <li>Deme By Gabriella</li>
                          <li>Mona & Vishu</li>
                          <li>Jigar & Nikita</li>
                          <li>Masaba</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={MoleradoImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Moledro</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={WaverImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Weaver Story</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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
                        <h4>DESIGNERS</h4>
                        <ul>
                          <li>Ahi Clothing</li>
                          <li>Vvani by Vani Vats</li>
                          <li>Vannikaa Malik</li>
                          <li>Krisha Sunny Ramani</li>
                          <li>Bhanuni by Jyoti</li>
                          <li>Enness Studio</li>
                          <li>Deme By Gabriella</li>
                          <li>Moledro</li>
                          <li>Jigar & Nikita</li>
                          <li>Masaba</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={AhiiImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Ahi Clothing</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={KupkImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">Kudi Pataka</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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
                          <img src={Man1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">SHANTNU & NIKHIL</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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

                      <div className="SubNavGrid ProductDemoGrid">
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
                <span>Kids</span>

                <div className="subNavPart">
                  <div className="container">
                    <div className="SubNavRow">
                      <div className="SubNavGrid">
                        <h4>BOYS</h4>
                        <ul>
                          <li>Shorts</li>
                          <li>Kurta Sets</li>
                          <li>Kurtas</li>
                          <li>Jackets</li>
                          <li>Sherwanis</li>
                          <li>Suits & Tuxedos</li>
                        </ul>
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>GIRLS</h4>
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
                          <img src={Kids1Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">FAYYON KIDS</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Kids2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">LITTLECHEER</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
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

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={ToraniImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">TORANI</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={PlodImg} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">PLODE</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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
                        <div className="viewmore">VIEW ALL</div>
                      </div>

                      <div className="SubNavGrid">
                        <h4>DESIGNERS</h4>
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

                      <div className="SubNavGrid ProductDemoGrid"></div>

                      <div className="SubNavGrid ProductDemoGrid">
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

                      <div className="SubNavGrid ProductDemoGrid">
                        <figure>
                          <img src={Jewellery2Img} />
                        </figure>
                        <figcaption className="text-center">
                          <strong className="d-block">JUWELEN</strong>
                          <small>Shop Now</small>
                        </figcaption>
                      </div>

                      <div className="SubNavGrid ProductDemoGrid">
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
        handleClose={() => setIsOpenLoginPopup(false)}
        modalHeader="Login"
      >
        <Form onSubmit={loginFormik?.handleSubmit}>
          <InputField
            label={"Email address"}
            onChange={loginFormik.handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <InputField
            label={"Password"}
            onChange={loginFormik.handleChange}
            name="password"
            type="password"
            placeholder="Enter password"
            required={true}
            onKeyDown={removeSpaceOnly}
          />
          <div className="mt-3 d-flex justify-content-between">
            <Button variant="link" onClick={() => {}}>
              Forgot password?
            </Button>
            <Button
              variant="link"
              onClick={() => {
                setIsOpenLoginPopup(false);
                setIsOpenSignupPopup(true);
              }}
            >
              Create an account
            </Button>
          </div>
          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button
              className="font-14 w-100"
              onClick={() => setIsOpenLoginPopup(false)}
            >
              cancel
            </Button>
            <Button className="font-14 w-100" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </CustomPopup>
      <CustomPopup
        primaryButtonText="Register"
        secondaryButtonText="Cancel"
        show={isOpenSignupPopup}
        handleClose={() => setIsOpenSignupPopup(false)}
        modalHeader="Create an Account"
        secondaryButtonClick={() => setIsOpenSignupPopup(false)}
      >
        <Form onSubmit={() => {}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <div className="mt-3">
            <a href="#">Forgot password?</a>
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
