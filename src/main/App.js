import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home"
import Europe from "./Europe";
import Australia from "./Australia";

class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/europe" component={Europe}/>
                    <Route path="/australia" component={Australia}/>
                </Switch>
            </div>
        )
    }
}

export default App;