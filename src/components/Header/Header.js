import "./Header.css";
import Video from "./Background_Vid.mp4";

const Header = () => {

    // 🎃
    
    const Text = "Hello stranger... \n It's okay, you can \n scroll down. " 

    function Breakline() {
        return Text.replace(/\n/g, "<br />");
    }

    return (
        <>
            <header className="header container">
                <div className="fullscreen-video-wrap">
                    <video src={Video} type="video/mp4" className="video-player" autoplay="autoplay" loop muted playsinline></video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1 dangerouslySetInnerHTML={{ __html: Breakline() }}  /> 	
                </div>
            </header>
        </>

    );
}

export default Header;