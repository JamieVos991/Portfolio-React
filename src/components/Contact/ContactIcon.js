import React from 'react'
import "./Contact.css";

function ContactIcon(props) {
  return (
    <a class="ss__a" target="_blank" rel="relation_name" href={props.link}>
        <article><span><i class={props.icon}></i></span></article>
    </a>
  )
}

export default ContactIcon