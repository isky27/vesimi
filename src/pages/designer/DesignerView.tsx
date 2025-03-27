import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryUrl } from "../../utils";
const designers:any = require("./designerOption.json")

const DesignerView = () => {

  const [selectDesigner, setSelectDesigner] = useState<string>("all");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
              {[
                { name: "All Designers", path: "all" },
                { name: "Clothing Designers", path: "clothing" },
                { name: "Accessories Designers", path: "accessories" },
                { name: "Jewellery Designers", path: "jewellery" },
                { name: "Popular Designers", path: "popular" },
              ].map((el: any) => (
                <li
                  key={el.path}
                  className={el.path === selectDesigner ? "selected" : ""}
                  onClick={() => setSelectDesigner(el.path)}
                >
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="categoeryRightBar">
            <h2 className="Playfair">Designers</h2>
            <div className="TabRedirec">
              {alphabet.map((letter) => (
                <a key={letter} href={`#${letter}For`}>
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${letter}`}
                    aria-expanded="false"
                  >
                    {letter}
                  </span>
                </a>
              ))}
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {alphabet.map((letter: string, index: number) => (
                <div
                  className="accordion-item"
                  id={`${letter}For`}
                  key={letter}
                >
                  <h2
                    className="accordion-header"
                    id={`flush-heading-${letter}`}
                  >
                    <button
                      className={`accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${letter}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`flush-collapse-${letter}`}
                    >
                      {letter}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${letter}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`flush-heading-${letter}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="categoeryLink">
                        {designers[selectDesigner][letter] &&
                        designers[selectDesigner][letter].length > 0 ? (
                          designers[selectDesigner][letter].map(
                            (designer: any) => (
                              <Link
                                key={designer.id}
                                to={getCategoryUrl(designer.id)}
                              >
                                {designer.designer}
                              </Link>
                            )
                          )
                        ) : (
                          <p>No designers available</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesignerView;
