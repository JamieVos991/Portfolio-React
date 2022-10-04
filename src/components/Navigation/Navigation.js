import "./Navigation.css";

const Navigation = () => {

    let overlay = document.querySelector(".menu_overlay");
    let open = document.querySelector(".fa-bars");
    let close = document.querySelector(".fa-times");

    console.log(overlay, open, close);

    open.addEventListener("click", () => {
        overlay.style.transform = "translateY(0)";
    });

    close.addEventListener("click", () => {
        overlay.style.transform = "translateY(-110%)";
    });

    return (
        <>
            <input type="checkbox" name="" id="menuBtn"></input>
            <div class="menu_overlay">
                <label for="menuBtn">
                    <i class="fas fa-times"></i>
                </label>
                <ul class="list">
                    <li onclick="location.href='index.html';"><a>Home</a></li>
                    <li onclick="location.href='skills.html';"><a>Skills</a></li>
                    <li onclick="location.href='blog.html';"><a>Blog</a></li>
                    <li onclick="location.href='contact.html';"><a>Contact</a></li>
                </ul>
            </div>
            <div class="landing_page">
                <div class="menu">
                    <label for="menuBtn">
                        <i class="fas fa-bars"></i>
                    </label>
                </div>
            </div>
        </>

    );
}

export default Navigation;