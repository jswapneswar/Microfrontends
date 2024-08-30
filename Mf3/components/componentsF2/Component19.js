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
      {" "}
      <div>
        <nav class="navbar">
          <div class="nav-center">
            <div class="nav-header">
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
              src={
                "https://images.pexels.com/photos/27662521/pexels-photo-27662521/free-photo-of-a-man-sitting-on-a-bench-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="Person Pouring Salt in Bowl"
              class="img about-img"
            />
          </section>
          <section class="featured-recipes">
            <h5 class="featured-title">Look At This Awesomesouce!</h5>
            <div class="recipes-list">
              <a href="single-recipe.html" class="recipe">
                <img
                  src={
                    "https://images.pexels.com/photos/27684595/pexels-photo-27684595/free-photo-of-sai-gon-after-rain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  class="img recipe-img"
                  alt=""
                />
                <h5>Carne Asada</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
              <a href="single-recipe.html" class="recipe">
                <img
                  src={
                    "https://images.pexels.com/photos/27650418/pexels-photo-27650418/free-photo-of-a-woman-taking-a-picture-of-herself-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  class="img recipe-img"
                  alt=""
                />
                <h5>Greek Ribs</h5>
                <p>Prep : 15min | Cook : 5min</p>
              </a>
              <a href="single-recipe.html" class="recipe">
                <img
                  // src="/assets/recipes/recipe-3.jpeg"
                  src={
                    "https://images.pexels.com/photos/27659128/pexels-photo-27659128/free-photo-of-two-people-sitting-outside-a-cafe-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
