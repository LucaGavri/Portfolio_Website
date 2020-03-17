import React, {Component} from "react";
import './_navigation.scss';


class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navMain">

                    <ul className="nav">
                        <li>
                            <a href="#" onClick={(event) => {
                                event.preventDefault();
                                window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    }
                                )
                            }}>
                                about me
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
                                skills
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
                            <a href="#" onClick={(event) => {
                                event.preventDefault();
                                document.querySelector('.contactAndCopyright').scrollIntoView({
                                    block: "start",
                                    inline: "nearest",
                                    behavior: "smooth"
                                });
                            }}>
                                contact
                            </a>
                        </li>
                    </ul>
                    <div className="navSocial">
                        <a href="https://www.facebook.com" target="_blank">
                            <i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com" target="_blank">
                            <i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;

