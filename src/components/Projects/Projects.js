import "./Projects.css";
import Project from "./Project";
import React from "react";

const Projects = () => {

    return (
        <section className="projects__section">
            <div class="card-grid">
                <Project fa1="fa-brands fa-html5" fa2="fa-brands fa-css3" fa3="fa-brands fa-js" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000" />
                <Project fa1="fa-brands fa-css3" fa2="fa-brands fa-js" fa3="fa-brands fa-react" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
                <Project fa1="fa-brands fa-css3" fa2="fa-brands fa-js" fa3="fa-brands fa-react" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
                <Project fa1="fa-brands fa-css3" fa2="fa-brands fa-js" fa3="fa-brands fa-react" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
                <Project fa1="fa-brands fa-unity" fa2="fa-brands fa-c" fa3="fa-brands fa-trello" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
                <Project fa1="fa-brands fa-git" fa2="fa-brands fa-html5" fa3="fa-brands fa-sass" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
                <Project fa1="fa-brands fa-js" fa2="fa-brands fa-html5" fa3="fa-brands fa-sass" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
                <Project fa2="fa-brands fa-python" img="https://img.freepik.com/vrije-photo/groothoekopname-van-een-enkele-boom-die-groeit-onder-een-bewolkte-hemel-tijdens-een-zonsondergang-omgeven-door-gras_181624-22807.jpg?w=2000"/>
            </div>
        </section>

    );
}

export default Projects;