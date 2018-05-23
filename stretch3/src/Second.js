import React, { Component } from 'react';
import './App.css';

class Second extends Component {
    render() {
        return(
            <div  classname= "section" id="second">
            <h1>This is my second element</h1>
                <p>This is my second element on screen. Here i've added an image to the screen so that it appers inside of the second div. </p>
                    <img src={"/img/dog.png"} className="App-logo" alt="pug"/>
  
                    </div>


        );
    }
}

export default Second;



