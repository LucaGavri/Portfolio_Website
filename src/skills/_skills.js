import React, {Component} from "react";
import "./_skills.scss"

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skillsElems">
                    <div className="skillsText">
                        <h3><span>what</span> i use</h3>
                        <ul>
                            <li><i className="fab fa-html5"></i></li>
                            <li><i className="fab fa-css3-alt"></i></li>
                            <li><i className="fab fa-sass"></i></li>
                            <li><i className="fab fa-js"></i></li>
                            <li><span>ES6</span></li>
                            <li><span>jQuery</span></li>
                            <li><span>AJAX</span></li>
                            <li><i className="fab fa-react"></i></li>
                            <li><i className="fab fa-node"></i></li>
                            <li><i className="fab fa-git-alt"></i></li>
                            <li><i className="fab fa-gulp"></i></li>
                            <li><i className="fab fa-npm"></i></li>
                            <li><i className="fab fa-github"></i></li>
                            <li><span>SCRUM</span></li>
                            <li><i className="fas fa-server"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;

