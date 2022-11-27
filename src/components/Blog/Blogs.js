import React from 'react'
import Logo from "../../img/PP.jpg"
import "./Blog.css";

function Blogs(props) {
  return (
        <div class="post-box mobile">
            <img src={props.img} alt="" class="post-img" />
            <h2 class="category">Mobile</h2>
            <a href="#" class="post-title">
                {props.title}
            </a>
            <span class="post-date">{props.date}</span>
            <p class="post-description">Mijn 4e examen voor school gaat in, en daarvoor moet ik een businessplan schrijven. Mijn idee is dat</p>

            <div class="profile">
                <img src={Logo} alt="" class="profile-img" />
                <span class="profile-name">Jamie Vos</span>
            </div>
        </div>
  )
}

export default Blogs