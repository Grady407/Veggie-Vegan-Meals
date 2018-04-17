import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

 
class MealPrep extends Component {

  state = {
    recipes: [],
    username: "",
    recipe: "",
    meallink: ""
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, username: "", recipe: "", meallink: "" })
      )
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.meallink && this.state.username) {
      API.saveRecipe({
        username: this.state.username,
        meallink: this.state.meallink,
        recipe: this.state.recipe
      })
        .then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

render (){
    return(
  <div>
    <h1>Meal Prep</h1>
    <h4>
   Got a nice recipe?! Submit it here...
    </h4>
  <div class="container">
  <div calss="row">
  <div class="col-md-5">    
  <form >
    Username <input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
    <br/>
    Meal Link <input
                value={this.state.meallink}
                onChange={this.handleInputChange}
                name="meallink"
                placeholder="meallink (required)"
              />
    <br/>
    Recipe <textarea className="userdatabox"
                value={this.state.recipe}
                onChange={this.handleInputChange}
                name="recipe"
                placeholder="Recipe (required)"
              />
  <br/>
    
  </form>
  </div>
  </div>
  </div>
<button id="myBtn"  disabled={!(this.state.username && this.state.meallink && this.state.recipe)}
                onClick={this.handleFormSubmit}>Add Your Recipie</button>

    <br/>
    <br/>
    <div>

    {this.state.recipes.length ? (
              <div class="container">
                {this.state.recipes.map(recipe => {
                  return (
                    <div class="row" key={recipe._id} id="datadisplayed">
                      {/* <a href={"/recipe/" + recipe._id}> */}
                      <div class="col-md-2 edge">
                        <strong>
                          Link:
                          {recipe.meallink}
                        </strong>
                        </div>

                        <div class="col-md-4 edge">
                        Posted by: 
                        {recipe.username}
                        </div>

                        <div class="col-md-4 edge">
                        Follow this recipe:
                        {recipe.recipe}
                        </div>
                      {/* </a> */}
                      <div class="col-md-2 edge">
                      <button  onClick={() => this.deleteRecipe(recipe._id)}>X</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h3>Nada!</h3>
            )}

      </div>

</div>
);
}
}

export default MealPrep;
