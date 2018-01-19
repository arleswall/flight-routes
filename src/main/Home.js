import React from "react";
import {Link} from "react-router-dom";


function Home(){
    return(
        <div>
            <Link to="/usa">USA</Link>
            <br/>
            <Link to="/brazil">Brazil</Link>
            <br/>
            <Link to="/europe">Europe</Link>
            <br/>
            <Link to="/asia">Asia</Link>
            <br/>
            <Link to="/australia">Australia</Link>            
        </div>
    )
}
export default Home;