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
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, username: "", recipe: "", youtubelink: "" })
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.username,
        author: this.state.recipe,
        synopsis: this.state.youtubelink
      })
        .then(res => this.loadBooks())
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
<button id="myBtn"  disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}>Add Your Recipie</button>

</div>
);
}
}

export default MealPrep;
