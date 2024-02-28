import React, { Component } from "react";
import Navigation from "../navigation";

class company extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Navigation />
                    <div style={{paddingTop: '80px'}}>
                        company
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default company;