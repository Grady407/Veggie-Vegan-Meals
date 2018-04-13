import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

 
class MealPrep extends Component {

  state = {
    recipes: [],
    username: "",
    recipe: "",
    youtubelink: ""
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, username: "", recipe: "", youtubelink: "" })
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
    if (this.state.youtubelink && this.state.username) {
      API.saveRecipe({
        username: this.state.username,
        youtubelink: this.state.youtubelink,
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
    <p>
   This part is for the meal prep
    </p>
        
  <form >
    Username <input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
    <br/>
    YouTube Link <input
                value={this.state.youtubelink}
                onChange={this.handleInputChange}
                name="youtubelink"
                placeholder="Youtubelink (required)"
              />
    <br/>
    Recipe <input
                value={this.state.recipe}
                onChange={this.handleInputChange}
                name="recipe"
                placeholder="Recipe (required)"
              />
  <br/>
    
  </form>
<button id="myBtn"  disabled={!(this.state.username && this.state.youtubelink && this.state.recipe)}
                onClick={this.handleFormSubmit}>Add Your Recipie</button>

    <br/>
    <br/>
    <div>

    {this.state.recipes.length ? (
              <div>
                {this.state.recipes.map(recipe => {
                  return (
                    <ul>
                    <li key={recipe._id}>
                      <a href={"/recipe/" + recipe._id}>
                        <strong>
                          {recipe.youtubelink} by {recipe.username}
                        </strong>
                      </a>
                      <button  onClick={() => this.deleteRecipe(recipe._id)}>delete</button>
                    </li>
                    </ul>
                  );
                })}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}

      </div>

</div>
);
}
}

export default MealPrep;
