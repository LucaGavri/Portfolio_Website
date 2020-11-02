import React, {Component} from "react";
import "./_welcome.scss";

class Welcome extends Component {
    componentDidMount() {

        const welcomeTxt = document.querySelector('.welcomeTxt');
        const welcomeGetIn = document.querySelector('.welcomeGetIn');
        const welcomePage = document.querySelector('.welcome');
        const mainPage = document.querySelector('.page');


        //timeout do klika w welcome
        setTimeout(function(){
            welcomeTxt.style.display = 'none';
            welcomeGetIn.style.display = 'flex';
        },1000);

        //klick do startu strony
        welcomeGetIn.addEventListener('click', function (e) {
            e.preventDefault();
            welcomePage.style.display = 'none';
            mainPage.style.display = 'block';
        })
    }

    render() {
        return (
            <div className="welcome">
                <div className="outside">
                </div>
                <div className="welcomeMain">
                </div>
                <div className="inside">
                    <div className="welcomeTxt">
                        <span>welcome</span>
                    </div>
                    <div className="welcomeGetIn">
                        <span>get in</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;

