import React from 'react';
import "./style.css";


const Veggie = () => (
	<div>
	<nav class="navbar navbar-inverse">
	<div class="container-fluid">

    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">About <span class="sr-only">(current)</span></a></li>
		<li class="active"><a href="#">Articles <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="#">Recipies <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="#">Meal Prep <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="#">Food Fight <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="#">Did You Know? <span class="sr-only">(current)</span></a></li>
	</ul>

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
			<div class="col-md-4"> </div>
			<div class="col-md-4">

	  <h1>Veggie Vegan Meals</h1>
	  <h3>Eat right. Live good. Stay healthy. Live long.</h3>
	  <p>This app is for the people, by the people. Find recipes and posts from others who are trying to transition to a more healthy lifestyle.</p>
	</div>
	<div class="col-md-4"></div>
	</div>
	</div>
	</div>
  );

export default Veggie;