import React from "react";
import "./style.css";


const Home = () => (
  <div class="container">
    <div class="row">
    <div class="col-md-8">
    <h1>Meal prep of the week</h1>
    <p>
      April 9th - April 13th
    </p>
    <img src={require ("./Curried-Chickpea-Meal-Prep-Bowls-4.jpg")} id="vegan" class="w3-circle" alt="food"/>
    </div>
    <div class="col-md-4">
    <br/>
    <br/>
    <h3>Curried Chickpea Bowls with Garlicky Spinach</h3>
    <ul>
      <li>Garlicky Spinach</li>
      <li>Curried Chickpeas</li>
      <li>White Rice</li>

      </ul>
    <button className="buttons"><a href="https://www.eatingbirdfood.com/curried-chickpea-bowls/" target="_blank">Click here to know more</a></button>
    
   
    </div>
    </div>
    </div>
  
);



export default Home;
