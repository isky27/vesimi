import React, { useEffect, useState } from 'react'
import LogoImage from "../../assets/images/VESIMI_new_logo-03.png"
import { useAppDispatch, useAppSelector } from 'store/redux.hooks';
import { getHeaderMenu } from 'store/home/home.slice';
import Loader from 'component/Loader';
import { useNavigate } from 'react-router-dom';

const Header = () => {

	const [hoveredMenu, setHoveredMenu] = useState<any>(null);

	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	const { isLoadingMenuBar, headerMenuData } = useAppSelector((state: any) => state.home)


	useEffect(() => {
		dispatch(getHeaderMenu())
	}, [dispatch])


	return (
		<header>
			<Loader isLoading={[isLoadingMenuBar]} />

			<div className="headerTopRow">
				<div className="container">
					<div className="headerTop">
						<div className="navBrand">
							<button className="MobileNavToggle bg-image d-block d-lg-none "
								style={{ backgroundPosition: "-260px -158px" }}></button>
							<img src={LogoImage} onClick={() => navigate("/")} />
							<div className="dropdown">
								<button className="btn dropdown-toggle bg-transparent border-0" type="button"
									id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									<span className="text-sm me-2">India</span><span
										className="pl-1 text-sm cursor-pointer">(₹)</span>
								</button>
								<div className="dropdown-menu countrySETWrap" aria-labelledby="countrySET">

									<div className="SearchcountryList">
										<input type="text" placeholder="Search for a region" />
										<button className="bg-image w-6 h-6 border-0 bg-transparent" style={{ backgroundPosition: "-411px -132px" }}></button>
									</div>

									<ul className="SearchedcountryList">
										<li><span>Australia</span><span>A$</span></li>
										<li><span>Canada</span><span>A$</span></li>
										<li><span>Hong Kong</span><span>A$</span></li>
										<li><span>India</span><span>A$</span></li>
										<li><span>Nepal</span><span>A$</span></li>
										<li><span>Saudi Arabia</span><span>A$</span></li>
										<li><span>SINGAPORE</span><span>A$</span></li>
										<li><span>Australia</span><span>A$</span></li>
										<li><span>Canada</span><span>A$</span></li>
										<li><span>Hong Kong</span><span>A$</span></li>
										<li><span>India</span><span>A$</span></li>
										<li><span>Nepal</span><span>A$</span></li>
										<li><span>Saudi Arabia</span><span>A$</span></li>
										<li><span>SINGAPORE</span><span>A$</span></li>
									</ul>

								</div>
							</div>
						</div>

						<div className="HeaderSearchOuter">
							<button className="headerSearchIcon bg-image" style={{ backgroundPosition: "-411px -132px" }}></button>
							<input type="text" className="" placeholder="Search for products, brand and more" />
							<div className="uploadSearchPicRight"> <span
								className="uploadSearchPic bg-image w-5 h-5 d-inline-block me-1"
								style={{ backgroundPosition: "-633px -59px" }}></span> <span>Image Search</span> </div>
						</div>

						<div className="headerRight">
							<ul>
								<li className="profile"><span className="profileIcon bg-image w-5 h-6 d-block"
									style={{ backgroundPosition: "-258px -132px" }}></span>Profile
									<ul className="ProfileDropDown">
										<li><a href="#">Login</a></li>
										<li><a href="#">Register</a></li>
									</ul>
								</li>
								<li className="wishList"><span className="profileIcon bg-image w-6 h-6 d-block"
									style={{ backgroundPosition: "-291px -132px" }}></span>Wishlist</li>
								<li className="Cart"><span className="profileIcon bg-image w-5 h-6 d-block"
									style={{ backgroundPosition: "-329px -132px" }}></span>Cart</li>
								<li className="watsap bg-image ms-3"> </li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* 
			<!-- header Nav bar --> */}

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item sub-menu">
                        <a className="nav-link" href="#">What</a>
                        <div className="sub-menu-wrapper bg-white">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                       
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li><li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </li>
                    <li className="nav-item sub-menu">
                        <a className="nav-link" href="#">What</a>
                        <div className="sub-menu-wrapper bg-white">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">hello</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">hello 2</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                       
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li><li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </li>
                    <li className="nav-item sub-menu">
                        <a className="nav-link" href="#">What</a>
                        <div className="sub-menu-wrapper bg-white">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav d-flex flex-column">
                                       
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li><li className="nav-item">
                                            <a className="nav-link" href="#">What's New</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">What's New</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

			{/* <div className="headerNav">
				<div className="container">
					<nav className="Nav-bar">
						<div className="SubNavGrid">
							<h4>Whats New</h4>
							<ul>
								<li><a href="#">Women </a></li>
								<li><a href="#">Men</a></li>
								<li><a href="#">Jewellery</a></li>
								<li><a href="#">Accessories</a></li>
								<li><a href="#">Kids</a></li>

							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>

						<div className="SubNavGrid">
							<h4>Designers</h4>
							<ul>
								<li><a href="#">Masaba</a></li>
								<li><a href="#">Vvani by Vani Vats</a></li>
								<li><a href="#">Vannikaa Malik</a></li>
								<li><a href="#">Krisha Sunny Ramani</a></li>
								<li><a href="#">Redpine Designs</a></li>
								<li><a href="#">Kudi Pataka</a></li>
								<li><a href="#"> RoohbyRidhimaa</a></li>
								<li><a href="#">Deme by Gabriella</a></li>
								<li><a href="#">Tyohar</a></li>
								<li><a href="#">Moledro</a></li>
							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>



						<div className="SubNavGrid">
							<h4>CATEGORIES</h4>
							<ul>
								<li><a href="#">Lehengas</a></li>
								<li><a href="#">Dresses</a></li>
								<li><a href="#">Gowns</a></li>
								<li><a href="#">Blouses	</a></li>
								<li><a href="#">Dupattas</a></li>
								<li><a href="#">Sarees</a></li>
								<li><a href="#">Crop Tops</a></li>
								<li><a href="#">Anarkali Set</a></li>
								<li><a href="#">Sharara Set</a></li>
								<li><a href="#">Lehenga Set</a></li>
								<br />
								<li><a href="#">Kurta Sets</a></li>
								<li><a href="#">Palazzo Set</a></li>
								<li><a href="#">Skirt Sets</a></li>
								<li><a href="#">Pant Sets</a></li>
								<li><a href="#">Blazer Set</a></li>
								<li><a href="#">Jackets</a></li>
								<li><a href="#">Jumpsuits</a></li>
								<li><a href="#">Trousers</a></li>
								<li><a href="#">Kaftans</a></li>
								<li><a href="#">Tops</a></li>
								<li><a href="#">Co-Ord Set</a></li>
							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>




						<div className="SubNavGrid">
							<h4>Designers</h4>
							<ul>
								<li><a href="#">Ahi Clothing</a></li>
								<li><a href="#">Vvani by Vani Vats</a></li>
								<li><a href="#">Vannikaa Malik</a></li>
								<li><a href="#">Krisha Sunny Ramani</a></li>
								<li><a href="#">Bhanuni by Jyoti</a></li>
								<li><a href="#">Enness Studio</a></li>
								<li><a href="#">Deme By Gabriella</a></li>
								<li><a href="#">Krisha Sunny Ramani</a></li>
								<li><a href="#">Jigar & Nikita</a></li>
								<li><a href="#">Masaba </a></li>

							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>




						<div className="SubNavGrid">
							<h4>CATEGORIES</h4>
							<ul>
								<li><a href="#">Kurta Sets</a></li>
								<li><a href="#">Kurtas</a></li>
								<li><a href="#">kurta Pyjamas</a></li>
								<li><a href="#">Sherwanis</a></li>
								<li><a href="#">Nehru Jacket & Sets</a></li>
								<li><a href="#">Bandhgalas</a></li>
								<li><a href="#">Shirts</a></li>
								<li><a href="#">Footwear</a></li>
								<li><a href="#">Bottoms</a></li>
								<li><a href="#">Jackets</a></li>
								<br />
								<li><a href="#">Tuxedo Set</a></li>
								<li><a href="#">Shorts</a></li>
								<li><a href="#">Tuxedo</a></li>
								<li><a href="#">Ethinic Wear</a></li>
								<li><a href="#">Trousers</a></li>
								<li><a href="#">Waistcoat</a></li>
								<li><a href="#">Shrug Set</a></li>
								<li><a href="#">Pashmina Shawl</a></li>
								<li><a href="#">Jodhpuris</a></li>
								<li><a href="#">Bandi Set</a></li>
							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>




						<div className="SubNavGrid">
							<h4>Designers</h4>
							<ul>
								<li><a href="#">Designers</a></li>
								<li><a href="#">Inder Clothing Studio</a></li>
								<li><a href="#">Jenjum Gadi</a></li>
								<li><a href="#">Kalista</a></li>
								<li><a href="#">Krisha Sunny Ramani</a></li>
								<li><a href="#">Masaba</a></li>
								<li><a href="#">S&N by Shantnu Nikhil</a></li>
								<li><a href="#">Jatin Malik Couture</a></li>
								<li><a href="#">Khushboo & Pankaj</a></li>
								<li><a href="#">Jigar & Nikita</a></li>
								<li><a href="#">Rey & I</a></li>

							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>



						<div className="SubNavGrid">
							<h4>Boys</h4>
							<ul>
								<li><a href="#">Shorts</a></li>
								<li><a href="#">Kurta Sets</a></li>
								<li><a href="#">Kurtas</a></li>
								<li><a href="#">Jackets</a></li>
								<li><a href="#">Sherwanis</a></li>
								<li><a href="#">Suits & Tuxedos</a></li>

							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>



						<div className="SubNavGrid">
							<h4>Girls</h4>
							<ul>
								<li><a href="#">Dresses</a></li>
								<li><a href="#">Kurta Sets</a></li>
								<li><a href="#">Pant Sets</a></li>
								<li><a href="#">Lehengas</a></li>
								<li><a href="#">Jumpsuits</a></li>
								<li><a href="#">Skirt Sets</a></li>
								<li><a href="#">Tunics & Kurtis </a></li>
								<li><a href="#">Gowns</a></li>
								<li><a href="#">Sarees</a></li>
							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>


							<h4>DESIGNER</h4>
							<ul>

								<li><a href="#">Rey&I</a></li>
								<li><a href="#">LittleCheer</a></li>
								<li><a href="#">Lil Drama</a></li>
								<li><a href="#">Fayyon Kids</a></li>
							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>





							<div className="SubNavGrid">
								<h4>CATEGORIES</h4>
								<ul>
									<li><a href="#">Bags</a></li>
									<li><a href="#">Belts</a></li>
									<li><a href="#">Gloves</a></li>
									<li><a href="#">Brooches</a></li>
									<li><a href="#">Clutch</a></li>
									<li><a href="#">Potli</a></li>
									<li><a href="#">Purse</a></li>
									<li><a href="#">Pocket Squares</a></li>
									<li><a href="#">Mens Footwear</a></li>
									<li><a href="#">Womens Footwear</a></li>
								</ul>
								<div className="viewmore"><a href="#">VIEW ALL</a></div>
							</div>

							<div className="SubNavGrid">
								<h4>DESIGNER</h4>
								<ul>
									<li><a href="#">Clutch'D</a></li>
									<li><a href="#">Devina juneja</a></li>
									<li><a href="#">Torani</a></li>
									<li><a href="#">Veruschka</a></li>
									<li><a href="#">S&N by Shantnu Nikhil</a></li>
									<li><a href="#">Jatin Malik Couture</a></li>
									<li><a href="#">Plode</a></li>
									<li><a href="#">Amrit Dawani</a></li>
									<li><a href="#">Bijoux by Priya Chandna</a></li>

								</ul>
								<div className="viewmore"><a href="#">VIEW ALL</a></div>
							</div>




							<div className="SubNavGrid">
								<h4>CATEGORIES</h4>
								<ul>
									<li><a href="#">Earrings</a></li>
									<li><a href="#">Bracelet</a></li>
									<li><a href="#">Bangle</a></li>
									<li><a href="#">Neckpiece</a></li>
									<li><a href="#">Mala</a></li>
									<li><a href="#">Kalgi</a></li>
									<li><a href="#">Rings</a></li>
									<li><a href="#">Necklaces</a></li>
									<li><a href="#">Pendants</a></li>
									<li><a href="#">Hair Accessories</a></li>
									<li><a href="#">Chains</a></li>
								</ul>
								<div className="viewmore"><a href="#">VIEW ALL</a></div>
							</div>



							<h4>DESIGNER</h4>
							<ul>
								<li><a href="#">Juwelen</a></li>
								<li><a href="#">Jatin Malik Couture</a></li>
								<li><a href="#">Mozaati</a></li>
								<li><a href="#">Tesoro by Bhavika</a></li>
								<li><a href="#">Twyla Treasures</a></li>
								<li><a href="#">Bijoux by Priya Chandna</a></li>

							</ul>
							<div className="viewmore"><a href="#">VIEW ALL</a></div>
						</div>
					</nav>
				</div>
			</div> */}
		</header>
	)
}

export default Header
