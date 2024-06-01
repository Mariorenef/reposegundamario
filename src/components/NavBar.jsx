import { Link } from "react-router-dom";
import { Cartwidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <nav>
            <h2>
                <Link to="/">Placeholder</Link>
            </h2>
            <div>
                <button>Camperas</button>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Buzos</button>
                <button>Capuchas</button>
                <button>Gorras</button>
                <button>Medias</button>
            </div>
            <Cartwidget />
        </nav>
    );
};