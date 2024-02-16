import { Jumbotron } from "./Components/Jumbotron";
import { Carrousel } from "./Components/Carrousel";
import './Styles/Fondo.css'
import { Footer } from "./Components/Footer";

export function Home () {
    return (
        <div className="Home">
            <Jumbotron />
            <Carrousel />
            <Footer />
        </div>
    )
}