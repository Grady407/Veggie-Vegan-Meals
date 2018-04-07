import React from "react";
import "./style.css";
import { Link } from "react-router-dom";




const Navigation = props => (
    <div>
        <div>
	<nav class="navbar navbar-inverse">
	<div class="container-fluid">

    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
    
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/MealPrep" ? "active" : ""}>
      <Link to="/MealPrep">MealPrep</Link>
    </li>
    {/* <li className={window.location.pathname === "/Articles" ? "active" : ""}>
      <Link to="/Articles">Articles</Link>
    </li> */}
    <li className={window.location.pathname === "/DidYouKnow" ? "active" : ""}>
      <Link to="/DidYouKnow">DidYouKnow</Link>
    </li>
    <li className={window.location.pathname === "/FoodFight" ? "active" : ""}>
      <Link to="/FoodFight">FoodFight</Link>
    </li>
    <li className={window.location.pathname === "/About" ? "active" : ""}>
      <Link to="/About">About</Link>
    </li>
  </ul>


	 <ul class="nav navbar-nav navbar-right">
        <li><span>Join</span></li>
		<li><Link to="/signin">Log-in</Link></li>
		<li><span className="logOutText" onClick={props.handleLogout}>Log-out</span></li>
	</ul>
    </div>
  </div>
</nav>
	<div class="container">
		<div class="row">
			<div class="col-md-8">

	  <h1>Veggie Vegan Meals</h1>
	  <p>This app is for the people, by the people. Find recipes and posts from others who are trying to transition to a more healthy lifestyle.</p>
	</div>
	<div class="col-md-4">
  <h3>Eat right. Live good. Stay healthy. Live long.</h3>
  </div>
	</div>
	</div>
	</div>
  
  </div>
  
);

export default Navigation;
