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
          <Link to={getCategoryUrl(389)}>Aariyana Couture</Link>
          <Link to={"/"}>A Clutch Story</Link>
          <Link to={"/"}>Anaar</Link>
          <Link to={"/"}>Anshika Tak Label</Link>
          <Link to={"/"}>Anu Pellakuru</Link>
          <Link to={"/"}>Contrast By Parth</Link>
          <Link to={"/"}>Hirika Dhruti</Link>
          <Link to={"/"}>Kalakaari By Sagarika</Link>
          <Link to={"/"}>Kavya Singh Kundu</Link>
          <Link to={"/"}>NR BY NIDHI RATHI</Link>
          <Link to={"/"}>OROH</Link>
          <Link to={"/"}>Pankaj Nidhi</Link>
          <Link to={"/"}>PARUL GANDHI</Link>
          <Link to={"/"}>Pasha India</Link>
          <Link to={"/"}>Pinki Sinha</Link>
          <Link to={"/"}>Plode</Link>
          <Link to={"/"}>Redpine Designs</Link>
          <Link to={"/"}>Sabyasachi</Link>
          <Link to={"/"}>Seesa</Link>
          <Link to={"/"}>Spring Break</Link>
          <Link to={"/"}>Surabhi Arya</Link>
          <Link to={"/"}>SWATI WADHWANI COUTURE</Link>
          <Link to={"/"}>Taroob</Link>
          <Link to={"/"}>Tasuvure</Link>
          <Link to={getCategoryUrl(389)}>Vaani Beswal</Link>
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
                      <Link to={"/"}>Dariyana Couture</Link>
                      <Link to={"/"}>D Clutch Story</Link>
                      <Link to={"/"}>Dnaar</Link>
                      <Link to={"/"}>Dnshika Tak Label</Link>
                      <Link to={"/"}>Dnu Pellakuru</Link>
                      <Link to={"/"}>Dontrast By Parth</Link>
                      <Link to={"/"}>Dirika Dhruti</Link>
                      <Link to={"/"}>Dalakaari By Sagarika</Link>
                      <Link to={"/"}>Davya Singh Kundu</Link>
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
                      <Link to={"/"}>Dariyana Couture</Link>
                      <Link to={"/"}>D Clutch Story</Link>
                      <Link to={"/"}>Dnaar</Link>
                      <Link to={"/"}>Dnshika Tak Label</Link>
                      <Link to={"/"}>Dnu Pellakuru</Link>
                      <Link to={"/"}>Dontrast By Parth</Link>
                      <Link to={"/"}>Dirika Dhruti</Link>
                      <Link to={"/"}>Dalakaari By Sagarika</Link>
                      <Link to={"/"}>Davya Singh Kundu</Link>
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
                      <Link to={"/"}>Dariyana Couture</Link>
                      <Link to={"/"}>D Clutch Story</Link>
                      <Link to={"/"}>Dnaar</Link>
                      <Link to={"/"}>Dnshika Tak Label</Link>
                      <Link to={"/"}>Dnu Pellakuru</Link>
                      <Link to={"/"}>Dontrast By Parth</Link>
                      <Link to={"/"}>Dirika Dhruti</Link>
                      <Link to={"/"}>Dalakaari By Sagarika</Link>
                      <Link to={"/"}>Davya Singh Kundu</Link>
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
                      <Link to={"/"}>Eariyana Couture</Link>
                      <Link to={"/"}>E Clutch Story</Link>
                      <Link to={"/"}>Enaar</Link>
                      <Link to={"/"}>Enshika Tak Label</Link>
                      <Link to={"/"}>Enu Pellakuru</Link>
                      <Link to={"/"}>Eontrast By Parth</Link>
                      <Link to={"/"}>Eirika Dhruti</Link>
                      <Link to={"/"}>Ealakaari By Sagarika</Link>
                      <Link to={"/"}>Eavya Singh Kundu</Link>
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
                      <Link to={"/"}>Eariyana Couture</Link>
                      <Link to={"/"}>E Clutch Story</Link>
                      <Link to={"/"}>Enaar</Link>
                      <Link to={"/"}>Enshika Tak Label</Link>
                      <Link to={"/"}>Enu Pellakuru</Link>
                      <Link to={"/"}>Eontrast By Parth</Link>
                      <Link to={"/"}>Eirika Dhruti</Link>
                      <Link to={"/"}>Ealakaari By Sagarika</Link>
                      <Link to={"/"}>Eavya Singh Kundu</Link>
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
                      <Link to={"/"}>Fariyana Couture</Link>
                      <Link to={"/"}>F Clutch Story</Link>
                      <Link to={"/"}>Fnaar</Link>
                      <Link to={"/"}>Fnshika Tak Label</Link>
                      <Link to={"/"}>Fnu Pellakuru</Link>
                      <Link to={"/"}>Fontrast By Parth</Link>
                      <Link to={"/"}>Firika Dhruti</Link>
                      <Link to={"/"}>Falakaari By Sagarika</Link>
                      <Link to={"/"}>Favya Singh Kundu</Link>
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
                      <Link to={"/"}>Gariyana Couture</Link>
                      <Link to={"/"}>G Clutch Story</Link>
                      <Link to={"/"}>Gnaar</Link>
                      <Link to={"/"}>Gnshika Tak Label</Link>
                      <Link to={"/"}>Gnu Pellakuru</Link>
                      <Link to={"/"}>Gontrast By Parth</Link>
                      <Link to={"/"}>Girika Dhruti</Link>
                      <Link to={"/"}>Galakaari By Sagarika</Link>
                      <Link to={"/"}>Gavya Singh Kundu</Link>
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
                      <Link to={"/"}>Hariyana Couture</Link>
                      <Link to={"/"}>H Clutch Story</Link>
                      <Link to={"/"}>Hnaar</Link>
                      <Link to={"/"}>Hnshika Tak Label</Link>
                      <Link to={"/"}>Hnu Pellakuru</Link>
                      <Link to={"/"}>Hontrast By Parth</Link>
                      <Link to={"/"}>Hirika Dhruti</Link>
                      <Link to={"/"}>Halakaari By Sagarika</Link>
                      <Link to={"/"}>Havya Singh Kundu</Link>
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
                      <Link to={"/"}>Iariyana Couture</Link>
                      <Link to={"/"}>I Clutch Story</Link>
                      <Link to={"/"}>Inaar</Link>
                      <Link to={"/"}>Inshika Tak Label</Link>
                      <Link to={"/"}>Inu Pellakuru</Link>
                      <Link to={"/"}>Iontrast By Parth</Link>
                      <Link to={"/"}>Iirika Dhruti</Link>
                      <Link to={"/"}>Ialakaari By Sagarika</Link>
                      <Link to={"/"}>Iavya Singh Kundu</Link>
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
                      <Link to={"/"}>Jariyana Couture</Link>
                      <Link to={"/"}>J Clutch Story</Link>
                      <Link to={"/"}>Jnaar</Link>
                      <Link to={"/"}>Jnshika Tak Label</Link>
                      <Link to={"/"}>Jnu Pellakuru</Link>
                      <Link to={"/"}>Jontrast By Parth</Link>
                      <Link to={"/"}>Jirika Dhruti</Link>
                      <Link to={"/"}>Jalakaari By Sagarika</Link>
                      <Link to={"/"}>Javya Singh Kundu</Link>
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
                      <Link to={"/"}>Kariyana Couture</Link>
                      <Link to={"/"}>K Clutch Story</Link>
                      <Link to={"/"}>Knaar</Link>
                      <Link to={"/"}>Knshika Tak Label</Link>
                      <Link to={"/"}>Knu Pellakuru</Link>
                      <Link to={"/"}>Kontrast By Parth</Link>
                      <Link to={"/"}>Kirika Dhruti</Link>
                      <Link to={"/"}>Kalakaari By Sagarika</Link>
                      <Link to={"/"}>Kavya Singh Kundu</Link>
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
                      <Link to={"/"}>Lariyana Couture</Link>
                      <Link to={"/"}>L Clutch Story</Link>
                      <Link to={"/"}>Lnaar</Link>
                      <Link to={"/"}>Lnshika Tak Label</Link>
                      <Link to={"/"}>Lnu Pellakuru</Link>
                      <Link to={"/"}>Lontrast By Parth</Link>
                      <Link to={"/"}>Lirika Dhruti</Link>
                      <Link to={"/"}>Lalakaari By Sagarika</Link>
                      <Link to={"/"}>Lavya Singh Kundu</Link>
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
