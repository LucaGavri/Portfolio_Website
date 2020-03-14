import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Welcome from "./welcome/_welcome";
import Header from "./header/_header";
import Nav from "./navigation/_navigation";
import Skills from "./skills/_skills";
import Portfolio from "./portfolio/_portfolio";
import ContactCopy from "./contact&copyright/_contact";


class App extends Component {
    componentDidMount() {
        //    btn w welcome page
        let getInBtn = document.querySelector(".get-in");
        getInBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(".welcome-app").style.display = "none";
            document.querySelector(".page").style.display = "block";
        });

    }

    render() {
        return (
            <div className="app">
                <div className="welcome-app">
                    <Welcome/>
                </div>
                <div className="page">
                    <Nav/>
                    <Header/>
                    <Skills/>
                    <Portfolio/>
                    <ContactCopy/>
                </div>
            </div>
        )
    }
}

export default App;
