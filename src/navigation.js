import React, { Component } from "react";
import './css/navigation.css';
import { Link } from 'react-router-dom';

class navigation extends Component {
    render() {
        return (
            <header>
                <div className="navigation">
                    <Link to='/home'><img src="images/logo.png" alt="img" height="30px" width="auto" style={{ marginRight: '100px' }} /></Link>

                    <div className="nav-cont">
                        <Link to="/home" className="nav-link">Home</Link>


                        <div className="hoverable">
                            <div to="/work" className="nav-link">Work</div>
                            <div className="nav-hover">
                                <div style={{ padding: '10px' }}><Link to="/work" className="hover-link">Work</Link></div>
                                <div style={{ padding: '10px' }}><Link to="/work" className="hover-link">Product</Link></div>
                                <div style={{ padding: '10px' }}><Link to="/work" className="hover-link">Technology</Link></div>
                            </div>
                        </div>

                        <Link to="/team" className="nav-link">Team</Link>

                        <div className="hoverable">
                            <div to="/work" className="nav-link">Careers</div>
                            <div className="nav-hover">
                                <div style={{ padding: '10px' }}><Link to="/careers" className="hover-link">Careers</Link></div>
                                <div style={{ padding: '10px' }}><Link to="/careers" className="hover-link">Jobs</Link></div>
                            </div>
                        </div>

                        <div className="hoverable">
                            <div to="/work" className="nav-link">Company</div>
                            <div className="nav-hover">
                                <div style={{ padding: '10px' }}><Link to="/careers" className="hover-link">Careers</Link></div>
                                <div style={{ padding: '10px' }}><Link to="/careers" className="hover-link">Jobs</Link></div>
                            </div>
                        </div>

                        <div className="hoverable">
                            <div to="/work" className="nav-link">Contact</div>
                            <div className="nav-hover">
                                <div style={{ padding: '10px' }}><Link to="/careers" className="hover-link hover-color-sub">Careers</Link></div>
                                <div style={{ padding: '10px' }}><Link to="/careers" className="hover-link hover-color-sub">Jobs</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default navigation;