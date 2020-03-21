import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Header from "./header/_header";
import Nav from "./navigation/_navigation";
import Skills from "./skills/_skills";
import Portfolio from "./portfolio/_portfolio";
import ContactCopy from "./contact&copyright/_contact";
import Welcome from "./welcome/_welcome";


class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="app">
                <div className="welcome">
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
