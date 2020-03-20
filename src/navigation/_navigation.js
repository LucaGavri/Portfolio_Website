import React, {Component} from "react";
import './_navigation.scss';


class Nav extends Component {
    componentDidMount() {
        //animacja i rozwijanie menu burgera
        const navBurger = document.querySelector('.navBurger');
        const navMobile = document.querySelector('.nav');
        const headerToCloseNav = document.querySelector('.header');
        const skillsToCloseNav = document.querySelector('.skills');
        // const portfolioToCloseNav = document.querySelector('.portfolio');
        // const contactToCloseNav = document.querySelector('.contactAndCopyright');



        navBurger.addEventListener('click', function (e) {
            e.preventDefault();
            navBurger.classList.toggle('activeNavBurger');

            if (navBurger.classList.contains('activeNavBurger')) {
                navMobile.style.left = "0";
            } else {
                navMobile.style.left = "-50vw";
            }
        });

        function closeNav(){
            navBurger.classList.remove('activeNavBurger');
            navMobile.style.left = "-50vw";
        }

        headerToCloseNav.addEventListener('click', function (e) {
            e.preventDefault();
            closeNav()
        });

        skillsToCloseNav.addEventListener('click', function (e) {
            e.preventDefault();
            closeNav()
        });

        // portfolioToCloseNav.addEventListener('click', function (e) {
        //     e.preventDefault();
        //     closeNav()
        // });

        // contactToCloseNav.addEventListener('click', function (e) {
        //     e.preventDefault();
        //     closeNav()
        // });
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
                        <a href="https://www.facebook.com/LucaGavri13" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/lucagavri/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;

