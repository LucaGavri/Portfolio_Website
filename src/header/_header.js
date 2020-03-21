import React, {Component} from "react";
import './_header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerImgAndTxt">
                    <div className="headerTxt">
                        <h1 className="headerTitle">
                            <span>Hello,</span> I'm Łukasz
                        </h1>
                        <p className="headerAbout">
                            <span>Jr Front-end Dev</span> with passion for coding.
                            <br/>
                            I am currently <span>looking for</span> individual clients or companies that want to
                            <span> cooperate</span>.

                        </p>
                    </div>
                    <div className="headerImg">
                    </div>
                </div>
                <div className="headerScroll">
                </div>
            </div>

        )
    }
}

export default Header;

