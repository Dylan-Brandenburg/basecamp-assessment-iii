import React, { Component } from 'react';
import './App.css';

class Third extends Component {
    render() {
        return (
        <div classname= "section" id="third">
         <h1>This is my third element</h1>
         <p>This is my third element on screen.<br></br> My third element is a simple list of things pugs love. </p>
         <ul classname="whatPugsLove" id="whatPugsLove">
                <li>RawHide!</li>
                <li>Tennis Balls!</li>
                <li>Treats!</li>
                <li>Food!</li>
                <li>Chew Toys!</li>
                <li>Walks!</li>
            </ul> 
         </div>
        );
  
    }
}

export default Third;






