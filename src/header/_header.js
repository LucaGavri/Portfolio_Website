import React, {Component} from "react";
import './_header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-text">
                    <h1 className="header-title">
                        Cześć! Nazywam się Łukasz
                    </h1>
                    <p className="header-about">
                        Swoją pierwszą, stronę www stworzyłem 2 lata temu.
                        W lipcu 2019 ukończyłem kurs Front-End Dev w Coders Lab.
                        Aktualnie poszukuję firmy, która pozwoli mi na rozwój w technologiach front-end w
                        luźnej atmosferze.
                        Od siebie mogę zaproponować ogromną chęć poszerzania swojej wiedzy, sumienność,
                        determinację oraz dużo poczucia humoru.
                    </p>
                </div>
                <div className="scroll">

                </div>
            </div>

        )
    }
}

export default Header;

