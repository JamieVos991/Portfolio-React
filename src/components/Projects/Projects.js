import "./Projects.css";
import Project from "./Project";
import React from "react";
import PokemonApp from "../../img/PokemonApp.jpg";
import PolitieZO from "../../img/PolitieZO.jpg";
import Dashboard from "../../img/Dashboard.jpg";
import SoundSensorApp from "../../img/SoundSensorApp.jpg";
import Potion from "../../img/Potion.jpg";
import Flowchart from "../../img/Flowchart.jpg";

const Projects = () => {

    return (
        <section className="projects__section">
            <div class="card-grid">
                <Project title="Pokemon App" fa1="fa-brands fa-css3" fa2="fa-brands fa-html5" fa3="fa-brands fa-react" img={PokemonApp} />
                <Project title="Politie ZO" fa1="fa-brands fa-css3" fa2="fa-brands fa-html5" fa3="fa-brands fa-js" img={PolitieZO}/>
                <Project title="Pokemon Dashboard" fa1="fa-brands fa-css3" fa2="fa-brands fa-html5" fa3="fa-brands fa-react" img={Dashboard}/>
                <Project title="Sound sensor App" fa2="fa-brands fa-c" img={SoundSensorApp}/>
                <Project title="Arcade Mechanics" fa1="fa-brands fa-unity" fa2="fa-brands fa-c" fa3="fa-brands fa-trello" img={Potion}/>
                <Project title="Collezione" fa1="fa-brands fa-react" fa2="fa-brands fa-html5" fa3="fa-brands fa-sass" img="https://i.pinimg.com/564x/ec/2f/9e/ec2f9e23a043375c8c5b735f992cf22a--michael-jordan-michael-okeefe.jpg"/>
                <Project title="Hello You" fa2="fa-brands fa-python" img={Flowchart}/>
                <Project title="Transformers community" fa1="fa-brands fa-php" fa2="fa-brands fa-css3" fa3="fa-brands fa-html5" img="https://d1fdloi71mui9q.cloudfront.net/BjJDjS8yQ6WnGSODhM1A_46t7s8wpvrliKYH8"/>
            </div>
        </section>

    );
}

export default Projects;