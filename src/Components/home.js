import React, { Component } from "react";
import '../css/home.css';
import Navigation from "../navigation";

class home extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Navigation />
                    <div className="container home-bg">
                        <div className="over-text">
                            <div className="text1">Bridging the complexity of
                                <div className="text1-high">SaaS Cloud</div>
                                Simplifying the digital transformation journey
                            </div>
                        </div>
                        <div className="landing-img-cont">
                            <img src="images/home/automation.gif" alt="img" width='100%' height='auto' />
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default home;