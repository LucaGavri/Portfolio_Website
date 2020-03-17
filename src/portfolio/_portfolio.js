import React, {Component} from "react";
import './_portfolio.scss';


class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="portfolioMain">
                    <div className="portfolioDetailing">
                        <div className="portfolioDetailingImg">
                        </div>
                        <div className="portfolioDetailingClicker">
                            <div className="portfolioDetailingClickerBtns">
                                <a href="#" className="detailingDemo" alt="detailingDemo">
                                    <i className="fas fa-play"></i>
                                </a>
                                <a href="#" className="detailingGitHub" alt="githubToDetailing">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioFlower">
                        <div className="portfolioFlowerImg">
                        </div>
                        <div className="portfolioFlowerClicker">
                            <a href="#" className="flowerDemo" alt="flowerDemo">
                                <i className="fas fa-play"></i>
                            </a>
                            <a href="#" className="flowerGitHub" alt="githubToFlower">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="portfolioGame">
                        <div className="portfolioGameImg">
                        </div>
                        <div className="portfolioGameClicker">
                            <a href="#" className="gameDemo" alt="gameDemo">
                                <i className="fas fa-play"></i>
                            </a>
                            <a href="#" className="gameGitHub" alt="githubToGame">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="portfolioFx">
                        <div className="portfolioFxImg">
                        </div>
                        <div className="portfolioFxClicker">
                            <a href="#" className="fxDemo" alt="fxDemo">
                                <i className="fas fa-play"></i>
                            </a>
                            <a href="#" className="fxGitHub" alt="githubToFx">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Portfolio;

