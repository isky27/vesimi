import React from "react";
import { Link } from "react-router-dom";
import { getCategoryUrl } from "utils";

const DesignerView = () => {
  return (
    <main className="pageMain">
      <div className="container">
        <div className="pageHead">
          <nav aria-label="breadcrumb" className=" ">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Designers
              </li>
            </ol>
          </nav>
          <h1 className="innerPageTitle Playfair">Featured</h1>
        </div>

        <div className="categoeryLink">
          <Link to={getCategoryUrl(401)}>Angry Owl</Link>
          <Link to={getCategoryUrl(201)}>Diya Rajvvir</Link>
          <Link to={getCategoryUrl(622)}>Jatin Malik Couture</Link>
          <Link to={getCategoryUrl(2549)}>Kudi Pataka</Link>
          <Link to={getCategoryUrl(2448)}>Lil Drama</Link>
          <Link to={getCategoryUrl(212)}>Masaba</Link>
          <Link to={getCategoryUrl(653)}>Merge Design</Link>
          <Link to={getCategoryUrl(2905)}>ORIGANI</Link>
          <Link to={getCategoryUrl(1454)}>Pallavi Jaipur</Link>
          <Link to={getCategoryUrl(2287)}>Rey&I</Link>
         </div>

        <div className="categoerySidebarMain">
          <div className="categoerySidebar">
            <ul className="Playfair">
              <li>
                <Link to={"/"}>All Designers</Link>
              </li>
              <li>
                <Link to={"/"}>Clothing Designers</Link>
              </li>
              <li>
                <Link to={"/"}>Accessories Designers </Link>
              </li>
              <li>
                <Link to={"/"}>Jewellery Designers</Link>
              </li>
              <li>
                <Link to={"/"}>Popular Designers</Link>
              </li>
            </ul>
          </div>

          <div className="categoeryRightBar">
            <h2 className="Playfair">Designers</h2>
            <div className="TabRedirec">
              <a href="#AFor">A</a>
              <a href="#bFor">b</a>
              <a href="#cFor">c</a>
              <a href="#dFor">d</a>
              <a href="#eFor">e</a>
              <a href="#fFor">f</a>
              <a href="#gFor">g</a>
              <a href="#hFor">h</a>
              <a href="#iFor">i</a>
              <a href="#jFor">j</a>
              <a href="#kFor">k</a>
              <a href="#lFor">l</a>
              <a href="#mFor">m</a>
              <a href="#nFor">n</a>
              <a href="#oFor">o</a>
              <a href="#pFor">p</a>
              <a href="#qFor">q</a>
              <a href="#rFor">r</a>
              <a href="#sFor">s</a>
              <a href="#tFor">t</a>
              <a href="#uFor">u</a>
              <a href="#vFor">v</a>
              <a href="#wFor">w</a>
              <a href="#xFor">x</a>
              <a href="#yFor">y</a>
              <a href="#zFor">z</a>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item" id="AFor">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    A
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(401)}>Angry Owl</Link>
                      <Link to={getCategoryUrl(616)}>Anvita Jain</Link>
                      <Link to={getCategoryUrl(1683)}>Amka India</Link>
                      <Link to={getCategoryUrl(1780)}>Amrit Dawani</Link>
                      <Link to={getCategoryUrl(2511)}>Ahi Clothing</Link>
                      <Link to={getCategoryUrl(2578)}>Aham-Vayam</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="bFor">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    B
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(2650)}>Baidehi</Link>
                      <Link to={getCategoryUrl(608)}>Brime</Link>
                      <Link to={getCategoryUrl(2358)}>Bijoux by Priya Chandna</Link>
                      <Link to={getCategoryUrl(1649)}>Bhanuni by Jyoti</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="cFor">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    C
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(488)}>Clutch'D</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="dFor">
                <h2 className="accordion-header" id="accordion0">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian3"
                    aria-expanded="false"
                    aria-controls="faccordian3"
                  >
                    D
                  </button>
                </h2>
                <div
                  id="faccordian3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(2129)}>Daatri by MK</Link>
                      <Link to={getCategoryUrl(201)}>Diya Rajvvir</Link>
                      <Link to={getCategoryUrl(405)}>Devina Juneja</Link>
                      <Link to={getCategoryUrl(2272)}>Deme by Gabriella</Link>
                      <Link to={getCategoryUrl(2400)}>Diermeiss by the Dragon Lady</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="eFor">
                <h2 className="accordion-header" id="accordion">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian4"
                    aria-expanded="false"
                    aria-controls="faccordian4"
                  >
                    E
                  </button>
                </h2>
                <div
                  id="faccordian4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1302)}>Ease</Link>
                      <Link to={getCategoryUrl(412)}>Echo</Link>
                      <Link to={getCategoryUrl(1801)}>Enness Studio</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="fFor">
                <h2 className="accordion-header" id="accordion2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian5"
                    aria-expanded="false"
                    aria-controls="faccordian5"
                  >
                    F
                  </button>
                </h2>
                <div
                  id="faccordian5"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(2527)}>Fayyon Kids</Link>
                      <Link to={getCategoryUrl(2988)}>Flamingo The Label</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="gFor">
                <h2 className="accordion-header" id="accordion3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian6"
                    aria-expanded="false"
                    aria-controls="faccordian6"
                  >
                    G
                  </button>
                </h2>
                <div
                  id="faccordian6"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="hFor">
                <h2 className="accordion-header" id="accordion4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian7"
                    aria-expanded="false"
                    aria-controls="faccordian7"
                  >
                    H
                  </button>
                </h2>
                <div
                  id="faccordian7"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1512)}>Harsha Khatry</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="iFor">
                <h2 className="accordion-header" id="accordion5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian8"
                    aria-expanded="false"
                    aria-controls="faccordian8"
                  >
                    I
                  </button>
                </h2>
                <div
                  id="faccordian8"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian1"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(594)}>Inder Clothing Studio</Link>
                      <Link to={getCategoryUrl(1704)}>Isha Mittal</Link>
                      <Link to={getCategoryUrl(2861)}>Itrh</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item" id="jFor">
                <h2 className="accordion-header" id="accordion6">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian9"
                    aria-expanded="false"
                    aria-controls="faccordian9"
                  >
                    J
                  </button>
                </h2>
                <div
                  id="faccordian9"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(622)}>Jatin Malik Couture</Link>
                      <Link to={getCategoryUrl(404)}>Jenjum Gadi</Link>
                      <Link to={getCategoryUrl(2053)}>Jigar & Nikita</Link>
                      <Link to={getCategoryUrl(581)}>Juwelen</Link>
					</div>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="kFor">
                <h2 className="accordion-header" id="accordion7">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian10"
                    aria-expanded="false"
                    aria-controls="faccordian10"
                  >
                    K
                  </button>
                </h2>
                <div
                  id="faccordian10"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(539)}>Kacha Tanka</Link>
                      <Link to={getCategoryUrl(612)}>Kalista</Link>
                      <Link to={getCategoryUrl(1693)}>Kalighata</Link>
                      <Link to={getCategoryUrl(2089)}>Kiran Gupta Label</Link>
                      <Link to={getCategoryUrl(2296)}>Komal Kothari</Link>
                      <Link to={getCategoryUrl(587)}>Krisha Sunny Ramani</Link>
                      <Link to={getCategoryUrl(1980)}>Khushboo & Pankaj</Link>
                      <Link to={getCategoryUrl(2549)}>Kudi Pataka</Link>
                      <Link to={getCategoryUrl(2928)}>Kay Kay by Kkhushi Sahaii</Link>
					  <Link to={getCategoryUrl(601)}>Kovet</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    L
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(2001)}>Label Deepika Nagpal</Link>
                      <Link to={getCategoryUrl(2334)}>LittleCheer</Link>
                      <Link to={getCategoryUrl(2448)}>Lil Drama</Link>
                      <Link to={getCategoryUrl(2888)}>Lacquer Embassy</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    M
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1469)}>Mahek Rohra</Link>
                      <Link to={getCategoryUrl(212)}>Masaba</Link>
                      <Link to={getCategoryUrl(2098)}>Mavish</Link>
                      <Link to={getCategoryUrl(1500)}>Mayori</Link>
                      <Link to={getCategoryUrl(373)}>Masumi Mewawalla</Link>
					  <Link to={getCategoryUrl(2351)}>Menero</Link>
                      <Link to={getCategoryUrl(1674)}>Mozaati</Link>
                      <Link to={getCategoryUrl(2505)}>Modaesta</Link>
                      <Link to={getCategoryUrl(2315)}>Mirroir</Link>
                      <Link to={getCategoryUrl(443)}>Mala and Kinnary</Link>
					  <Link to={getCategoryUrl(653)}>Merge Design</Link>
                      <Link to={getCategoryUrl(489)}>Monisha Jaising</Link>
                      <Link to={getCategoryUrl(1486)}>Moledro</Link>
                      <Link to={getCategoryUrl(1666)}>Mona & Vishu</Link>
                      <Link to={getCategoryUrl(2572)}>Mulmul</Link>
					  <Link to={getCategoryUrl(2724)}>Majestic by Japnah</Link>
                      <Link to={getCategoryUrl(2731)}>Musal</Link>
                      <Link to={getCategoryUrl(2818)}>MiniMe Organics</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    N
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(492)}>Nikita Vishakha</Link>
                      <Link to={getCategoryUrl(2460)}>Nidhika Shekhar</Link>
                      <Link to={getCategoryUrl(501)}>Neeta Lulla</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    O
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1637)}>Ohaila Khan</Link>
                      <Link to={getCategoryUrl(1757)}>One Knot One</Link>
                      <Link to={getCategoryUrl(2905)}>ORIGANI</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    P
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1454)}>Pallavi Jaipur</Link>
                      <Link to={getCategoryUrl(2224)}>Parshya</Link>
                      <Link to={getCategoryUrl(2489)}>Papa Don't Preach by Shubhika</Link>
                      <Link to={getCategoryUrl(561)}>Pink City by Sarika</Link>
                      <Link to={getCategoryUrl(1541)}>Plode</Link>
					  <Link to={getCategoryUrl(631)}>Priti Sahni</Link>
                      <Link to={getCategoryUrl(1952)}>Pooja Shroff</Link>
					  <Link to={getCategoryUrl(2260)}>Poppi Luxe</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    Q
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                       <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    R
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1411)}>Redpine Designs</Link>
                      <Link to={getCategoryUrl(2287)}>Rey&I</Link>
                      <Link to={getCategoryUrl(1554)}>Rimi Nayak</Link>
                      <Link to={getCategoryUrl(2753)}>Ridhimaa Gupta</Link>
                      <Link to={getCategoryUrl(2775)}>Rooh by Ridhimaa</Link>
					  <Link to={getCategoryUrl(2893)}>Raaga Reddy</Link>
                      <Link to={getCategoryUrl(2938)}>Rirasa</Link>
                      <Link to={getCategoryUrl(2965)}>Ranian</Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    S
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(2116)}>Sangeeta Swati</Link>
                      <Link to={getCategoryUrl(1975)}>Seven</Link>
                      <Link to={getCategoryUrl(485)}>Sheetal Batra</Link>
                      <Link to={getCategoryUrl(2408)}>Shreeka</Link>
                      <Link to={getCategoryUrl(1822)}>Sidhaarth and Disha</Link>
					  <Link to={getCategoryUrl(1993)}>Sil-Sila</Link>
                      <Link to={getCategoryUrl(2476)}>Sims Studio</Link>
                      <Link to={getCategoryUrl(522)}>S&N by Shantnu Nikhil</Link>
                      <Link to={getCategoryUrl(2627)}>Sshilpa Samriya</Link>
                      <Link to={getCategoryUrl(1744)}>Studio Shikha Malik</Link>
					  <Link to={getCategoryUrl(2586)}>Style Junkiie</Link>
                      <Link to={getCategoryUrl(1400)}>Soha by Harleen and Sona</Link>
                      <Link to={getCategoryUrl(2192)}>Sunanta Madaan</Link>
                      <Link to={getCategoryUrl(2472)}>Shruti S</Link>
                      <Link to={getCategoryUrl(2782)}>17:17 by Simmi Saboo</Link>
					  <Link to={getCategoryUrl(2848)}>Suhag Emporium</Link>
					  <Link to={getCategoryUrl(2918)}>Studiio KM</Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    T
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(1810)}>Tamaraa by Tahani</Link>
                      <Link to={getCategoryUrl(657)}>The Aarya</Link>
                      <Link to={getCategoryUrl(1813)}>The Dramebaaz Co</Link>
                      <Link to={getCategoryUrl(1773)}>Tesoro by Bhavika</Link>
                      <Link to={getCategoryUrl(866)}>Tisa Studio</Link>
					  <Link to={getCategoryUrl(402)}>Torani</Link>
                      <Link to={getCategoryUrl(1843)}>Twyla Treasures</Link>
                      <Link to={getCategoryUrl(2678)}>Tyohar</Link>
                      <Link to={getCategoryUrl(2974)}>Tanu Malhotra</Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    U
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    V
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={getCategoryUrl(2702)}>Vannikaa Malik</Link>
                      <Link to={getCategoryUrl(421)}>Vvani by Vani Vats</Link>
                      <Link to={getCategoryUrl(610)}>Veruschka</Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    W
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                       <Link to={getCategoryUrl(570)}>Weaver Story</Link>
                      <Link to={getCategoryUrl(2609)}>White by Dinaaz</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    X
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    Y
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                    </div>
                  </div>
                </div>
              </div>
			  <div className="accordion-item" id="lFor">
                <h2 className="accordion-header" id="accordion8">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faccordian12"
                    aria-expanded="false"
                    aria-controls="faccordian12"
                  >
                    Z
                  </button>
                </h2>
                <div
                  id="faccordian12"
                  className="accordion-collapse collapse"
                  aria-labelledby="faccordian11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="categoeryLink">
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                      <Link to={"/"}></Link>
                    </div>
                  </div>
                </div>
              </div>
			  
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesignerView;
