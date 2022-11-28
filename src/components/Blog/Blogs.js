import React from 'react'
import Logo from "../../img/PP.jpg"

function Blogs() {
  return (
        <div class="post-box mobile">
            <img src="../Foto's/cs.jpg" alt="" class="post-img" />
            <h2 class="category">Mobile</h2>
            <a href="/#" class="post-title">
                Business development
            </a>
            <span class="post-date">8 JUL 2022</span>
            <p class="post-description">Mijn 4e examen voor school gaat in, en daarvoor moet ik een businessplan schrijven. Mijn idee is dat</p>

            <div class="profile">
                <img src={Logo} alt="" class="profile-img" />
                <span class="profile-name">Jamie Vos</span>
            </div>
        </div>
  )
}

export default Blogs