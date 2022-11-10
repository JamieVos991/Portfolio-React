import React from 'react'

const Project = (props) => {

    return (
        <div class="card">
            <div class="card__background" style={{ backgroundImage: `url(${props.img})` }}>
                <div class="card-info">
                    <i class={props.fa1} ></i>
                    <i class={props.fa2} ></i>
                    <i class={props.fa3} ></i>
                </div>
            </div>
        </div>
    )
 }

export default Project;