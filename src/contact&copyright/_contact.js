import React, {Component} from "react";
import './_contact.scss';


class ContactCopy extends Component {
    render() {
        return (
            <div className="contactAndCopyright">
                <div className="contact">
                    <h3><span>contact </span>me</h3>
                    <p>Phone: <a href="tel:+48513900293">513-900-293</a>
                    </p>
                    <p>E-mail: <a href="mailto:lukaszgawrys13@gmail.com">lukaszgawrys13@gmail.com</a>
                    </p>
                    <p>Location: Warsaw <i className="fas fa-map-marker-alt"></i></p>
                </div>
                <div className="copyright">
                    <p> <span>&copy;</span> 2020 Łukasz Gawryś, Made by LucaGavri</p>
                </div>
            </div>

        )
    }
}

export default ContactCopy;

