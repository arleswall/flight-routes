import React from "react";
import {Link} from "react-router-dom";


function Home(){
    return(
        <div className="homeBox">
            <div className="homeButtonsBox">
                <Link to="/usa" className="homeButtons">USA</Link>
            </div>
            <div className="homeButtonsBox">
                <Link to="/south" className="homeButtons">So. America</Link>
            </div>
            <div className="homeButtonsBox">
                <Link to="/caribbean" className="homeButtons">Caribbean</Link>
            </div>
            <div className="homeButtonsBox">
                <Link to="/europe" className="homeButtons">Europe</Link>
            </div>
            <div className="homeButtonsBox">
                <Link to="/asia" className="homeButtons">Asia</Link>
            </div>
            <div className="homeButtonsBox">
                <Link to="/australia" className="homeButtons">Australia</Link>
            </div>            
            <div className="homeButtonsBox">
                <Link to="/others" className="homeButtons">Others</Link>
            </div>            
        </div>
    )
}
export default Home;