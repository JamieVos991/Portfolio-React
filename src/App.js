import Homepage from "./Pages/Homepage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Blog from "./Pages/Blog";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
            </Routes>
        </>
    );
}

export default App;