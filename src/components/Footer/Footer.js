import "./Footer.css";

const Footer = () => {
    return(
        <section className="section__footer">
            <div className="footer__upper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.65162740376!2d4.833921041898723!3d52.35474979518866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1snl!2snl!4v1669216343362!5m2!1snl!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width={400} height={400}></iframe>
            </div>        
            <div className="footer__lower">
                <p>
                    © All Rights Reserved Jamie Vos
                </p>
                <div className="footer__lower--p">
                    <p>Privacy policy</p>
                    <p>Terms & condition</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;