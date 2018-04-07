import React from "react";
import "./style.css";

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

{/* <div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close">&times;</span>
    
  <form>
  <input type="text"/>
  </form>

  </div>

</div> */}




  </div>
);

export default MealPrep;
