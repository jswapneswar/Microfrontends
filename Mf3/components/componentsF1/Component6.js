import React from "react";
import logo from "./../../assets/logo.svg";
import about from "./../../assets/about.jpeg";
import recipe_1 from "./../../assets/recipes/recipe-1.jpeg";
import recipe_2 from "./../../assets/recipes/recipe-2.jpeg";
import recipe_3 from "./../../assets/recipes/recipe-3.jpeg";
import hugeImage from "./../../assets/SampleJPGImage_30mbmb.jpg";

export default function Component1() {
  return (
    <div>
      {"{"}" "{"}"}
      <div>
        <nav classname="navbar">
          <div classname="nav-center">
            <div classname="nav-header">
              <a href="index.html" classname="nav-logo">
                <img src={logo} alt="simply recipes" />
              </a>
              <button classname="nav-btn btn">
                <i classname="fas fa-align-justify" />
              </button>
            </div>
            <div classname="nav-links">
              <a href="index.html" classname="nav-link">
                {"{"}" "{"}"}
                home{"{"}" "{"}"}
              </a>
              <a href="about.html" classname="nav-link">
                {"{"}" "{"}"}
                about{"{"}" "{"}"}
              </a>
              <a href="tags.html" classname="nav-link">
                {"{"}" "{"}"}
                tags{"{"}" "{"}"}
              </a>
              <a href="recipes.html" classname="nav-link">
                {"{"}" "{"}"}
                recipes{"{"}" "{"}"}
              </a>
              <div classname="nav-link contact-link">
                <a href="contact.html" classname="btn">
                  {"{"}" "{"}"}
                  contact{"{"}" "{"}"}
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main classname="page">
          <section classname="about-page">
            <article>
              <h2>I'm baby coloring book poke taxidermy</h2>
              <p>
                Taxidermy forage glossier letterpress heirloom before they sold
                out you probably haven't heard of them banh mi biodiesel chia.
              </p>
              <p>
                Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                retro.
              </p>
              <a href="contact.html" classname="btn">
                {"{"}" "{"}"}
                contact{"{"}" "{"}"}
              </a>
            </article>
            <img
              src="{about}"
              alt="Person Pouring Salt in Bowl"
              classname="img about-img"
            />
          </section>
          <section classname="featured-recipes">
            <h5 classname="featured-title">Look At This Awesomesouce!</h5>
            <div classname="recipes-list">
              <a href="single-recipe.html" classname="recipe">
                <img src={recipe_1} classname="img recipe-img" alt="" />
                <h5>Carne Asada</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
              <a href="single-recipe.html" classname="recipe">
                <img src={recipe_2} classname="img recipe-img" alt="" />
                <h5>Greek Ribs</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
              <a href="single-recipe.html" classname="recipe">
                <img
                  src="/assets/recipes/recipe-3.jpeg"
                  classname="img recipe-img"
                  alt=""
                />
                <h5>Vegetable Soup</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
            </div>
          </section>
        </main>
        <footer classname="page-footer">
          <p>
            © <span id="date" />
            <span classname="footer-logo">SimplyRecipes</span> Built by
            <a href="https://www.johnsmilga.com/">Coding Addict</a>
          </p>
        </footer>
      </div>
      <div classname="scp-panel" id="sce_carousel_add_18">
        <div classname="scp-widget" id="sce_gallery-edit_add_15">
          <div classname="scw-carousel" data-duration={5000}>
            <div
              classname="owl-carousel scw-carousel-wrapper owl-theme"
              data-singleitem="true"
              data-items={1}
              data-autoplay="true"
              data-duration={5000}
              data-navigation="true"
              data-pagination="true"
              data-slidespeed={200}
              data-paginationspeed={800}
              data-rewindspeed={1000}
              style={{ opacity: 1, display: "block" }}
            >
              <div
                classname="owl-wrapper-outer autoHeight"
                style={{ height: 449 }}
              >
                <div
                  classname="owl-wrapper"
                  style={{
                    width: 7854,
                    left: 0,
                    display: "block",
                    transition: "800ms",
                    transform: "translate3d(-1309px, 0px, 0px)",
                  }}
                >
                  <div classname="owl-item" style={{ width: 1309 }}>
                    <div classname="scw-carousel-slide">
                      <div classname="scwc-slide-inner">
                        <div classname="scw-box-text-table">
                          <div classname="scw-box-text-cell">
                            <div classname="scw-box-text-cell-inner" />
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.alluniformwear.com/member-schools"
                        target="_self"
                      >
                        <img
                          src="https://az777500.vo.msecnd.net/images/2746/websitebanner20.jpg"
                          alt="WEBSITEBANNER20.jpg"
                        />
                      </a>
                    </div>
                  </div>
                  <div classname="owl-item" style={{ width: 1309 }}>
                    <div classname="scw-carousel-slide">
                      <div classname="scwc-slide-inner">
                        <div classname="scw-box-text-table">
                          <div classname="scw-box-text-cell">
                            <div classname="scw-box-text-cell-inner" />
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.alluniformwear.com/dickies-balance/316463/c"
                        target="_self"
                      >
                        <img
                          src="https://az777500.vo.msecnd.net/images/2746/dickiesmedcouture814-820.jpg"
                          alt="dickiesmedcouture814-820.jpg"
                        />
                      </a>
                    </div>
                  </div>
                  <div classname="owl-item" style={{ width: 1309 }}>
                    <div classname="scw-carousel-slide">
                      <div classname="scwc-slide-inner">
                        <div classname="scw-box-text-table">
                          <div classname="scw-box-text-cell">
                            <div classname="scw-box-text-cell-inner" />
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.alluniformwear.com/barco-one/43524/c"
                        target="_self"
                      >
                        <img
                          src="https://az777500.vo.msecnd.net/images/2746/barcofreeship124359.jpg"
                          alt="BarcoFREEShip124359.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="owl-controls clickable">
                <div classname="owl-pagination">
                  <div classname="owl-page">
                    <span classname="" />
                  </div>
                  <div classname="owl-page active">
                    <span classname="" />
                  </div>
                  <div classname="owl-page">
                    <span classname="" />
                  </div>
                </div>
                <div classname="owl-buttons">
                  <div classname="owl-prev">prev</div>
                  <div classname="owl-next">next</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classname="scp-layout sce-l-s">
        <div classname="container scp-container sce-w-d">
          <div classname="row">
            <div classname="col-sm-24">
              <div classname="scp-panel" id="sce_image_add_11">
                <div classname="scp-widget">
                  <div
                    classname="scw-content"
                    id="sce_create_content_6"
                    dir="ltr"
                    style={{ display: "block" }}
                    spellCheck="false"
                  >
                    <div classname="auw-expIndustry">
                      <ul classname="list-inline">
                        <li>
                          <div classname="auw-expIndustryCont">
                            <h3>
                              <img
                                src="https://az777500.vo.msecnd.net/images/2746/exp-ind-medical-img093043.jpg"
                                alt="Scrubs Medical"
                                width={218}
                                height={254}
                              />
                            </h3>
                            <h4 classname="auw-expIndustryTitle">Medical</h4>
                            <a
                              href="https://www.alluniformwear.com/womens-scrub-tops/cc"
                              classname="auw-swMore"
                              title="Medical"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </li>
                        <li>
                          <div classname="auw-expIndustryCont">
                            <h3>
                              <img
                                src="https://az777500.vo.msecnd.net/images/2746/exp-ind-industrial-img093131.jpg"
                                alt="uniform Industrial"
                                width={218}
                                height={254}
                              />
                            </h3>
                            <h4 classname="auw-expIndustryTitle">Industrial</h4>
                            <a
                              href="https://www.alluniformwear.com/workwear"
                              classname="auw-swMore"
                              title="industrial"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </li>
                        <li>
                          <div classname="auw-expIndustryCont">
                            <h3>
                              <img
                                src="https://az777500.vo.msecnd.net/images/2746/exp-ind-school-img093205.jpg"
                                alt="uniform School"
                                width={218}
                                height={254}
                              />
                            </h3>
                            <h4 classname="auw-expIndustryTitle">School</h4>
                            <a
                              href="https://www.alluniformwear.com/school"
                              classname="auw-swMore"
                              title="school"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </li>
                        <li>
                          <div classname="auw-expIndustryCont">
                            <h3>
                              <img
                                src="https://az777500.vo.msecnd.net/images/2746/exp-ind-corporate-img093100.jpg"
                                alt="Uniform Corporate"
                                width={218}
                                height={254}
                              />
                            </h3>
                            <h4 classname="auw-expIndustryTitle">Corporate</h4>
                            <a
                              href="/corporate"
                              classname="auw-swMore"
                              title="corporate"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </li>
                        <li>
                          <div classname="auw-expIndustryCont">
                            <h3>
                              <img
                                src="https://az777500.vo.msecnd.net/images/2746/exp-ind-hospitality-img093152.jpg"
                                alt="uniform Hospitality"
                                width={218}
                                height={254}
                              />
                            </h3>
                            <h4 classname="auw-expIndustryTitle">
                              Hospitality
                            </h4>
                            <a
                              href="/hospitality/145/c"
                              classname="auw-swMore"
                              title="hospitality"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
