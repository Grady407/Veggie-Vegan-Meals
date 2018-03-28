import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import Home from "./components/Home";
// import Veggie from "./components/veggie";
import Navigation from "./components/navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Articles from "./components/pages/Articles";
import MealPrep from "./components/pages/MealPrep"
import FoodFight from "./components/pages/FoodFight"
import DidYouKnow from "./components/pages/DidYouKnow"


class App extends Component {
  // state = {
  //   username: "",
  //   password: "",
  //   auth: {
  //     userId:"",
  //     username:"",
  //     isAuthenticated:false
  //   }
  // };

  // componentWillMount(){
  //   axios.get("/auth/isAuthenticated").then((result)=>{
  //     const {userId, isAuthenticated,username} = result.data
  //     this.setState({
  //       auth:{
  //         userId,
  //         isAuthenticated,
  //         username
  //       }
  //     });
  //   });
  // }

  // handleChange = (event) => {
  //   const {name, value} = event.target;    
  //       // Set the state for the appropriate input field
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   //call a sign In function
  //   const newUser = {
  //     username: this.state.username,
  //     password: this.state.password
  //   };
  //   this.setState({
  //     username: "",
  //     password: ""
  //   }); 
  //   const {name} = event.target;
  //   axios.post(name, newUser).then((data) => {
  //     if (data.data.isAuthenticated){
  //       const {userId, isAuthenticated,username} = data.data;
  //       this.setState({
  //         auth:{
  //           userId,
  //           isAuthenticated,
  //           username
  //         }
  //       });
  //     }
  //   });
  // }

  // handleLogout = (event) => {
  //   event.preventDefault();
  //   axios.get("/auth/logout").then((result)=>{
  //     this.setState({
  //       auth:{
  //         userId: "",
  //         username: "",
  //         isAuthenticated: false
  //       }
  //     });
  //   })
  // };
//******************************************
render() {
return <Router>
<div>
  <Navigation />
  <Route exact path="/" component={Home} />
  <Route exact path="/MealPrep" component={MealPrep} />
  <Route exact path="/Articles" component={Articles} />
  <Route exact path="/DidYouKnow" component={DidYouKnow} />
  <Route exact path="/FoodFight" component={FoodFight} />
  <Route exact path="/About" component={About} />
</div>
</Router>
}
//********************************************************** */


// state = {
//   currentPage: "Home"
// };

// handlePageChange = page => {
//   this.setState({ currentPage: page });
// };

// renderPage = () => {
//   if (this.state.currentPage === "Home") {
//     return <Home />;
//   } else if (this.state.currentPage === "About") {
//     return <About />;
//   } else if (this.state.currentPage === "Articles") {
//     return <Articles />;
//   }else if (this.state.currentPage === "MealPrep") {
//       return <MealPrep />;
//   }else if (this.state.currentPage === "FoodFight") {
//       return <FoodFight />;
//   } else {
//     return <DidYouKnow />;
//   }
// };

// render() {
//   return (
//     <div>
//       <Navigation
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//       />
//       {this.renderPage()}
//     </div>
//   );
// }


//******************************************************************************* */



  // render() {
  //   return <Veggie/>;

    
    // const loggedIn = this.state.auth.isAuthenticated;
    // return (
    //   <Router>
    //     <div>
    //     <Route exact path = "/" render = {()=> {
    //       if(loggedIn){
    //         return <Redirect to = "/home" />
    //       } else{
    //         return <SignIn 
    //           handleChange= {this.handleChange} 
    //           handleSubmit = {this.handleSubmit}
    //           email = {this.state.email}
    //           password = {this.state.password}
    //         />
    //       } 
    //     }}/>
    //     <Route exact path = "/signup" render = {()=> {
    //       if(loggedIn){
    //         return <Redirect to = "/home" />
    //       } else{
    //         return <SignUp 
    //           handleChange= {this.handleChange} 
    //           handleSubmit = {this.handleSubmit}
    //           email = {this.state.email}
    //           password = {this.state.password}
    //         />
    //       }  
    //     }}/>
    //     <Route exact path = "/home" render = {()=> {
    //       if(!loggedIn){
    //         return <Redirect to = "/" />
    //       } else {
    //         return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
    //       } 
    //     }
    //     }/>
    //     </div>
    //   </Router>
    // );
  }


export default App;