import React from 'react'
import Blogs from './Blogs'
import "./Blog.css";
import Footer from '../Footer/Footer';
import PortfolioImg from "../../img/Blog_Portfolio.jpg";
import PolitieZO from "../../img/PolitieZO.jpg";

function Blog() {
  return (
    <>
    <section class="home" id="home">
        <div class="home-text contianer"> 
            <h2 class="home-title">Jamie's Blog</h2>
            <span class="home-subtitle">Your source of great content</span>
        </div>
    </section>

    <div class="post-filter container">
        <span class="filter-item active-filter" data-filter='all'>All</span>
        <span class="filter-item" data-filter='design'>Design</span>
        <span class="filter-item" data-filter='tech'>Tech</span>
        <span class="filter-item" data-filter='mobile'>Mobile</span>
    </div>

    <section class="post container">
        <Blogs 
          title="return stage;"
          date="New"
          img="https://i0.wp.com/larissa.landstede.media/wp-content/uploads/sites/25/2018/01/daria-shevtsova-411553.jpg?resize=640%2C361"
          />

        <Blogs 
          title="Laracast"
          date="8 JUL 2022"
          img="https://assets.laracasts.com/images/wallpapers/inspire-me.png"
          />

        <Blogs 
          title="Business development"
          date="8 JUL 2022"
          img="https://terrigen-cdn-dev.marvel.com/content/prod/1x/bullseyecard2.jpg"
          />

        <Blogs 
          title="Portofolio of portfolio?"
          date="8 JUL 2022"
          img={PortfolioImg}
          />

        <Blogs 
          title="Face detection"
          date="8 JUL 2022"
          img="https://developers.google.com/static/ml-kit/vision/face-detection/images/face_detection2x.png"
          />
          
        <Blogs 
          title="Politie ZO"
          date="8 JUL 2022"
          img={PolitieZO}
          />
    </section>
    <Footer />
    </>
  )
}

export default Blog