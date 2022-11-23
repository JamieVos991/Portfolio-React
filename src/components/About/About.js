import "./About.css";
import Logo from "../../img/PP.jpg";

const About = (props) => {
    return (
        <section className="section__about">
            <div className="content show">
                <img src={Logo} alt="Logo"></img>
                <div className="text">
                    <h1>About me</h1>
                    <h5>Developer & Designer</h5>
                    <p>
                        My name is Jamie and I am a web developer specialized in front-end applications. I started web development
                        in 2018 and acquired a strong knowledge and expertise in this field over time.
                        Web applications, building websites and building apps are subjects that i can work good with. I do my best
                        to improve myself in these fields but I also try to open my perspective to other domains.

                    </p>
                    <p>
                        What am i looking for?
                    </p>
                    <p>
                        Challenge motivates me. Even if I have mainly worked on CSS and JS applications, I crave opportunities to
                        discover new technologies and concepts.
                    </p>
                    <p>
                        I love learning. If you use programming languages or tools that I have not already mastered, I probably
                        already heard about it and I definitely am confident that I can quickly become proficient with it.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;