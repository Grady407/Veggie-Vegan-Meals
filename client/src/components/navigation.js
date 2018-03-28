import React from "react";
import { Link } from "react-router-dom";



const Navigation = props => (
    <div>
        <div>
	<nav class="navbar navbar-inverse">
	<div class="container-fluid">

    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
    {/* <li
      onClick={() => props.handlePageChange("Home")}
      className={props.currentPage === "Home" ? "active" : ""}
    >
      <a>Home</a>
    </li>

     <li
      onClick={() => props.handlePageChange("MealPrep")}
      className={props.currentPage === "MealPrep" ? "active" : ""}
    >
      <a>Meal Prep</a>
    </li>

    <li
      onClick={() => props.handlePageChange("Articles")}
      className={props.currentPage === "Articles" ? "active" : ""}
    >
      <a>Articles</a>
    </li>
    <li
      onClick={() => props.handlePageChange("DidYouKnow")}
      className={props.currentPage === "DidYouKnow" ? "active" : ""}
    >
      <a>Did You Know?</a>
    </li>

       <li
      onClick={() => props.handlePageChange("FoodFight")}
      className={props.currentPage === "FoodFight" ? "active" : ""}
    >
      <a>Food Fight</a>
    </li>
    <li
      onClick={() => props.handlePageChange("About")}
      className={props.currentPage === "About" ? "active" : ""}
    >
      <a>About</a>
    </li> */}



     {/* <ul className="nav nav-tabs"> */}
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/MealPrep" ? "active" : ""}>
      <Link to="/MealPrep">MealPrep</Link>
    </li>
    <li className={window.location.pathname === "/Articles" ? "active" : ""}>
      <Link to="/Articles">Articles</Link>
    </li>
    <li className={window.location.pathname === "/DidYouKnow" ? "active" : ""}>
      <Link to="/DidYouKnow">DidYouKnow</Link>
    </li>
    <li className={window.location.pathname === "/FoodFight" ? "active" : ""}>
      <Link to="/FoodFight">FoodFight</Link>
    </li>
    <li className={window.location.pathname === "/About" ? "active" : ""}>
      <Link to="/About">About</Link>
    </li>
    {/* <li className={window.location.pathname === "/contact/learn" ? "active" : ""}>
      <Link to="/contact/learn">Learn</Link>
    </li> */}
  </ul>



{/*     
  </ul> */}

	 <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Join</a></li>
		<li><a href="#">Log-in</a></li>
		<li><a href="#">Log-out</a></li>
	</ul>
    </div>
  </div>
</nav>
	<div class="container">
		<div class="row">
			<div class="col-md-8">

	  <h1>Veggie Vegan Meals</h1>
      <h3>Eat right. Live good. Stay healthy. Live long.</h3>
	  <p>This app is for the people, by the people. Find recipes and posts from others who are trying to transition to a more healthy lifestyle.</p>
	</div>
	<div class="col-md-2"></div>
    <div class="col-md-2"> </div>
	</div>
	</div>
	</div>
  
  </div>
  
);

export default Navigation;
