import React, {Component} from "react";
import './_header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerImgAndTxt">
                    <div className="headerImg">

                    </div>
                    <div className="headerTxt">
                        <h1 className="headerTitle">
                            <span>Cześć!</span> Nazywam się Łukasz
                        </h1>
                        <p className="headerAbout">
                            Swoją pierwszą, stronę www stworzyłem 2 lata temu.
                            W lipcu 2019 ukończyłem kurs Front-End Dev w Coders Lab.
                            Aktualnie poszukuję firmy, która pozwoli mi na rozwój w technologiach front-end w
                            luźnej atmosferze.
                            Od siebie mogę zaproponować ogromną chęć poszerzania swojej wiedzy, sumienność,
                            determinację oraz dużo poczucia humoru.
                        </p>
                    </div>
                </div>
                <div className="headerScroll">
                </div>
            </div>

        )
    }
}

export default Header;

