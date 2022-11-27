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
                <Project 
                    title="Pokemon App" 
                    type="School assignment"
                    time="1 week"
                    skill="React"
                    skill2="HTML"
                    skill3="CSS" 
                    link="https://github.com/JamieVos991/Pokemon-React"
                    desc="asasd" 
                    fa1="fa-brands fa-css3" 
                    fa2="fa-brands fa-html5" 
                    fa3="fa-brands fa-react" 
                    img={PokemonApp} />

                <Project 
                    title="Politie ZO" 
                    type="Home assignment"
                    time="5 weken"
                    skill="HTML"
                    skill2="CSS"
                    skill3="JS"
                    link="https://github.com/JamieVos991/MadeByMA"
                    desc="lorem"
                    fa1="fa-brands fa-css3" 
                    fa2="fa-brands fa-html5" 
                    fa3="fa-brands fa-js" 
                    img="https://live.staticflickr.com/65535/48868462088_5edc95413b_b.jpg"/>

                <Project 
                    title="Pokemon Dashboard"
                    type="School assignment" 
                    time="1 week"
                    skill="React"
                    skill2="HTML"
                    skill3="CSS" 
                    link="https://github.com/JamieVos991/Dashboard-React"
                    desc="lorem"
                    fa1="fa-brands fa-css3" 
                    fa2="fa-brands fa-html5" 
                    fa3="fa-brands fa-react" 
                    img={Dashboard}/>

                <Project 
                    title="Sound sensor App" 
                    type="School assignment"
                    time="8 weken"
                    skill="C++"
                    skill2="Scrum"
                    skill3="Git" 
                    link="https://github.com/JamieVos991/Input-Output-M7"
                    desc="lorem"
                    fa2="fa-brands fa-c" 
                    img={SoundSensorApp}/>

                <Project 
                    title="Arcade Mechanics" 
                    type="Home assignment"
                    time="8 weken"
                    skill="Unity"
                    skill2="C#"
                    skill3="Git" 
                    link="https://github.com/JamieVos991/Arcade-Mechanics-M3"
                    desc="lorem"
                    fa1="fa-brands fa-unity" 
                    fa2="fa-brands fa-c" 
                    fa3="fa-brands fa-trello" 
                    img={Potion}/>

                <Project 
                    title="Collezione" 
                    type="School assignment"
                    time="12 weken"
                    skill="React"
                    skill2="HTML"
                    skill3="SCSS"
                    link="https://github.com/JamieVos991/Collezione-React" 
                    desc="lorem"
                    fa1="fa-brands fa-react" 
                    fa2="fa-brands fa-html5" 
                    fa3="fa-brands fa-sass" 
                    img="https://i.pinimg.com/564x/ec/2f/9e/ec2f9e23a043375c8c5b735f992cf22a--michael-jordan-michael-okeefe.jpg"/>

                <Project 
                    title="Hello You" 
                    type="School assignment"
                    time="2 weken"
                    skill="Python"
                    skill2="Git"
                    skill3="Scrum"
                    link="https://github.com/JamieVos991/Hello-You-M1"
                    desc="lorem"
                    fa2="fa-brands fa-python" 
                    img={Flowchart}/>

                <Project 
                    title="Transformers community" 
                    type="School assignment"
                    time="8 weken"
                    skill="Laravel"
                    skill2="Php"
                    skill3="Git"
                    link="https://github.com/JamieVos991/PROG-Team-M5"
                    desc="lorem"
                    fa1="fa-brands fa-php" 
                    fa2="fa-brands fa-css3" 
                    fa3="fa-brands fa-html5" 
                    img="https://d1fdloi71mui9q.cloudfront.net/BjJDjS8yQ6WnGSODhM1A_46t7s8wpvrliKYH8"/>
                    
            </div>
        </section>

    );
}

export default Projects;