import React, {Component} from "react";
import './_navigation.scss';


class Nav extends Component {
    componentDidMount() {
        //animacja i rozwijanie menu burgera
        const navBurger = document.querySelector('.navBurger');

        navBurger.addEventListener('click', function (e) {
            e.preventDefault();
            navBurger.classList.toggle('activeNavBurger');

            // if (burger.classList.contains('activeBurger')) {
            //     navMobile.style.top = "50px";
            // } else {
            //     navMobile.style.top = "100vh";
            // }
        });
    }

    render() {
        return (
            <div className="navigation">
                <div className="navMain">
                    <div className="navBurger ">
                        <div className="burger1"></div>
                        <div className="burger2"></div>
                        <div className="burger3"></div>
                    </div>
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
                        <a href="https://www.facebook.com/LucaGavri13" target="_blank">
                            <i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/lucagavri/" target="_blank">
                            <i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;

