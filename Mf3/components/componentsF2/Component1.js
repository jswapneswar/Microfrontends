import React from "react";
// import logo from "./../../assets/logo.svg";
// import about from "./../../assets/about.jpeg";
// import recipe_1 from "./../../assets/recipes/recipe-1.jpeg";
// import recipe_2 from "./../../assets/recipes/recipe-2.jpeg";
// import recipe_3 from "./../../assets/recipes/recipe-3.jpeg";
// import hugeImage from "./../../assets/SampleJPGImage_30mbmb.jpg";
import Image from "next/image";
// console.log(recipe_1);
import { useSelector, useDispatch } from "react-redux";

export default function Component1() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      {" "}
      <div>
        <nav class="navbar">
          <div class="nav-center">
            <div class="nav-header">
              <a href="index.html" class="nav-logo">
                <img
                  src={`${process?.env?.NEXT_PUBLIC_SHOP_BASE_URL}about.jpeg`}
                  alt="simply recipes"
                  height={100}
                  width={100}
                />
              </a>
              <button class="nav-btn btn">
                <i class="fas fa-align-justify"></i>
              </button>
            </div>
            <div class="nav-links">
              <a href="index.html" class="nav-link">
                {" "}
                home{" "}
              </a>
              <a href="about.html" class="nav-link">
                {" "}
                about{" "}
              </a>
              <a href="tags.html" class="nav-link">
                {" "}
                tags{" "}
              </a>
              <a href="recipes.html" class="nav-link">
                {" "}
                recipes{" "}
              </a>

              <div class="nav-link contact-link">
                <a href="contact.html" class="btn">
                  {" "}
                  contact{" "}
                </a>
              </div>
              {count}
            </div>
          </div>
        </nav>
        <main class="page">
          <section class="about-page">
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
              <a href="contact.html" class="btn">
                {" "}
                contact{" "}
              </a>
            </article>
            <img
              // src={
              //   "https://images.pexels.com/photos/18668693/pexels-photo-18668693/free-photo-of-a-bag-and-a-hat-lying-on-a-blanket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              // }
              src="http://localhost:3002/assets/recipes/recipe-1.jpeg"
              alt="Person Pouring Salt in Bowl"
              class="img about-img"
              width={200}
              height={200}
            />
          </section>
          <section class="featured-recipes">
            <h5 class="featured-title">Look At This Awesomesouce!</h5>
            <div class="recipes-list">
              <a href="single-recipe.html" class="recipe">
                <img
                  width={200}
                  height={200}
                  src={
                    "https://images.pexels.com/photos/18964530/pexels-photo-18964530/free-photo-of-table-and-two-chairs-standing-on-a-balcony-in-saigon-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  class="img recipe-img"
                  alt=""
                />
                <h5>Carne Asada</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
              <a href="single-recipe.html" class="recipe">
                <img
                  width={200}
                  height={200}
                  src={
                    "https://images.pexels.com/photos/27245727/pexels-photo-27245727/free-photo-of-a-mountain-road-with-a-path-leading-up-to-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  class="img recipe-img"
                  alt=""
                />
                <h5>Greek Ribs</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
              <a href="single-recipe.html" class="recipe">
                <img
                  width={200}
                  height={200}
                  // src="/assets/recipes/recipe-3.jpeg"
                  src={
                    "https://images.pexels.com/photos/27573933/pexels-photo-27573933/free-photo-of-a-woman-standing-on-a-wooden-walkway-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  class="img recipe-img"
                  alt=""
                />
                <h5>Vegetable Soup</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
            </div>
          </section>
        </main>
        <footer class="page-footer">
          <p>
            &copy; <span id="date"></span>
            <span class="footer-logo">SimplyRecipes</span> Built by
            <a href="https://www.johnsmilga.com/">Coding Addict</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
