import React from 'react';
// import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      
      
    </div>

    // Use once components are built out for the first page
    <Router>
      {/*Home Page*/}
      <Route exact path="/home" component={homePage} />

      {/*About Pages*/}
      <Route exact path="/about" component={aboutResturant} />
      <Route exact path="/about/maguy-le-coze" component={aboutOwnerOne} />
      <Route exact path="/about/eric-ripert" component={aboutOwnerTwo} />

      {/*Menu Pages*/}
      <Route exact path="/menus/dining-room/lunch" component={lunch} />
      <Route exact path="/menus/dining-room/dinner" component={dinner} />
      <Route exact path="/menus/dining-room/dessert" component={dessert} />
      <Route exact path="/menus/dining-room/chefs-tasting" component={chefs_tasting} />
      <Route exact path="/menus/dining-room/le-fin-tasting" component={le_fin_tasting} />
      <Route exact path="/menus/dining-room/vegetarian-tasting" component={vegetarian_tasting } />
      
      {/*Private Dining Pages*/}
      <Route exact path="/menus/lounge/lounge-menu" component={lounge_menu} />
      <Route exact path="/menus/lounge/city-harvest" component={lounge_menu} />
      <Route exact path="/menus/lounge/cocktails" component={lounge_menu} />
      <Route exact path="/menus/lounge/wine-and-spirits" component={lounge_menu} />

      {/*Reservations Pages*/}
      {/*Contact Us Pages*/}
      {/*Gifts Pages*/}
    
    </Router>
  );
}

export default App;
