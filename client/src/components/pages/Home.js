import React from "react";
import "./style.css";


const Home = () => (
  <div class="container">
    <div class="row">
    <div class="col-md-8">
    <h1>Meal prep of the week</h1>
    <p>
    Meal prep of the week images go here......
    </p>
    <img src={require ("./veganimage.jpg")} id="vegan" class="w3-circle" alt="food"/>
    </div>
    <div class="col-md-4">
    <button className="buttons">Click on the link below to know more</button>
    
   
    </div>
    </div>
    </div>
  
);



export default Home;
