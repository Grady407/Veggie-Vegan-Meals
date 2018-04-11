import React from "react";
import "./style.css";
import API from "../../utils/API";

const MealPrep = () => (
  <div>
    <h1>Meal Prep</h1>
    <p>
   This part is for the meal prep
    </p>
        
  <form >
    Username <input type="text"/>
    <br/>
    YouTube Link <input type="text"/>
    <br/>
    Recipe <input type="text" className="recipie"/>
  <br/>
    
  </form>
<button id="myBtn">Add Your Recipie</button>






  </div>
);

export default MealPrep;
