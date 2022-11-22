import React from 'react'
import "./Contact.css";
import ContactIcon from './ContactIcon';

function ContactIcons() {
  return (
    <>
    <section class="ss-icon">

        <ContactIcon link="https://github.com/JamieVos991" icon="fa-brands fa-github"/>
        <ContactIcon link="https://www.youtube.com/channel/UCGcCCIBv7Gchg-hgh_8_l7A" icon="fa-brands fa-youtube"/>
        <ContactIcon link="https://nl.linkedin.com/in/jamie-vos-0a0b4a18a?trk=people-guest_people_search-card" icon="fa-brands fa-linkedin"/>
        <ContactIcon link="" icon="fa-brands fa-twitter"/>
        <ContactIcon link="" icon="fa-brands fa-instagram"/>
        <ContactIcon link="" icon="fa-sharp fa-solid fa-envelope"/>
        <ContactIcon link="" icon="fa-brands fa-pinterest"/>
        <ContactIcon link="" icon="fa-brands fa-whatsapp"/>
        <ContactIcon link="" icon="fa-brands fa-quora"/>
        <ContactIcon link="" icon="fa-brands fa-reddit"/>
        <ContactIcon link="" icon="fa-brands fa-blogger"/>
        <ContactIcon link="" icon="fa-brands fa-vimeo"/>

    </section>
    </>
  )
}

export default ContactIcons