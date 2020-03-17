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
                                <a href="https://lucagavri.github.io/WytworniaBlasku_Project/" className="detailingDemo" target="_blank">
                                    <i className="fas fa-play"></i>
                                </a>
                                <a href="https://github.com/LucaGavri/WytworniaBlasku_Project" className="detailingGitHub" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioFlower">
                        <div className="portfolioFlowerImg">
                        </div>
                        <div className="portfolioFlowerClicker">
                            <div className="portfolioFlowerClickerBtns">
                                <a href="https://lucagavri.github.io/Flower_Shop_Project/" className="flowerDemo" target="_blank">
                                    <i className="fas fa-play"></i>
                                </a>
                                <a href="https://github.com/LucaGavri/Flower_Shop_Project" className="flowerGitHub" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioGame">
                        <div className="portfolioGameImg">
                        </div>
                        <div className="portfolioGameClicker">
                            <div className="portfolioGameClickerBtns">
                                <a href="https://lucagavri.github.io/Clicker_Evolution_Game/" className="gameDemo" target="_blank">
                                    <i className="fas fa-play"></i>
                                </a>
                                <a href="https://github.com/LucaGavri/Clicker_Evolution_Game" className="gameGitHub" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioFx">
                        <div className="portfolioFxImg">
                        </div>
                        <div className="portfolioFxClicker">
                            <div className="portfolioFxClickerBtns">
                                <a href="https://lucagavri.github.io/FX_Site_Project/" className="fxDemo" target="_blank">
                                    <i className="fas fa-play"></i>
                                </a>
                                <a href="https://github.com/LucaGavri/FX_Site_Project" className="fxGitHub" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Portfolio;

