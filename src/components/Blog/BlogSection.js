import React from 'react'
import Blogs from './Blogs'
import "./Blog.css";

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
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
    </section>
    </>
  )
}

export default Blog