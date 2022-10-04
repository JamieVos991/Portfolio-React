import "./Projects.css";

const Projects = () => {

    function on() {

        document.getElementById("overlay").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";
    }
    function off() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    function on2() {

        document.getElementById("overlay-2").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";


    }
    function off2() {
        document.getElementById("overlay-2").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";


    }

    function on3() {

        document.getElementById("overlay-3").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";


    }
    function off3() {
        document.getElementById("overlay-3").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    function on4() {

        document.getElementById("overlay-4").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";

    }
    function off4() {
        document.getElementById("overlay-4").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    function on5() {

        document.getElementById("overlay-5").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";


    }
    function off5() {
        document.getElementById("overlay-5").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    function on6() {

        document.getElementById("overlay-6").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";


    }
    function off6() {
        document.getElementById("overlay-6").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    function on7() {

        document.getElementById("overlay-7").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";


    }
    function off7() {
        document.getElementById("overlay-7").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    function on8() {

        document.getElementById("overlay-8").style.display = "flex";
        document.getElementById("body_function").style.overflow = "hidden";


    }
    function off8() {
        document.getElementById("overlay-8").style.display = "none";
        document.getElementById("body_function").style.overflow = "auto";

    }

    return (
        <>
            <section class="card-section">
                <a class="card" onclick={on}>
                    <div class="card__background" style="background-image: url('../Foto\'s/Drill.jpg');">
                        <div class="card-info">
                            <i class="fa-brands fa-html5" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-css3" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-js" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">

                    </div>
                </a>

                <a class="card" onclick="on2()">
                    <div class="card__background" style="background-image: url('../Foto\'s/Untitled-2.jpg');">
                        <div class="card-info">
                            <i class="fa-brands fa-css3" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-solid fa-c" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-js" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>

                <a class="card" onclick="on3()">
                    <div class="card__background" style="background-image: url('../Foto\'s/b.jpg');">
                        <div class="card-info">
                            <i class="fa-brands fa-php" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-js" style="font-size: 25px; padding-right: 45px;"></i>
                            <i class="fa-brands fa-laravel" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>

                <a class="card" onclick="on4()">
                    <div class="card__background" style="background-image: url('../Foto\'s/b.jpg');">
                        <div class="card-info">
                            <i class="fa-brands fa-html5" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-css3" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-js" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>

                <a class="card" onclick="on5()">
                    <div class="card__background" style="background-image: url('../Foto\'s/spaceship.png');">
                        <div class="card-info">
                            <i class="fa-brands fa-unity" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-solid fa-c" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-git-alt" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>

                <a class="card" onclick="on6()">
                    <div class="card__background" style="background-image: url('../Foto\'s/Untitled-2.jpg');">
                        <div class="card-info">
                            <i class="fa-brands fa-react" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-css3" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-js" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>

                <a class="card" onclick="on7()">
                    <div class="card__background" style="background-image: url('../Foto\'s/95.png');">
                        <div class="card-info">
                            <i class="fa-brands fa-python" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>

                <a class="card" onclick="on8()">
                    <div class="card__background" style="background-image: url('../Foto\'s/Design Kamer 1.png');">
                        <div class="card-info">
                            <i class="fa-brands fa-html5" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-js" style="padding-right: 45px; font-size: 25px;"></i>
                            <i class="fa-brands fa-sass" style="font-size: 25px;"></i>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </a>
            </section>

        </>
    );
}

export default Projects;