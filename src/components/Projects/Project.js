import React from 'react'

function Project(props) {

  return (
    <a class="card" onclick="/#">
        <div class="card__background" style={{ backgroundImage: `url(${props.img})` }}>
            <div class="card-info">
                <i class={props.fa1} ></i>
                <i class={props.fa2} ></i>
                <i class={props.fa3} ></i>
            </div>
        </div>
        <div class="card__content"></div>
    </a>
  )
}

export default Project