import React, {Component} from "react";
import './_navigation.scss';


class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                            }
                        )
                        }}>
                            o mnie
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            document.querySelector('.skills').scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            });
                        }}>
                            co potrafię
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            document.querySelector('.portfolio').scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            });
                        }}>
                            portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#"onClick={(event) => {
                            event.preventDefault();
                            document.querySelector('.contact-copyright').scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            });
                        }}>
                           kontakt
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;

