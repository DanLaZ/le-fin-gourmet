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
      <Route exact path="/home" component={home} />

      {/*About Pages*/}
      <Route exact path="/about" component={about_resturant} />
      <Route exact path="/about/maguy-le-coze" component={about_owner1} />
      <Route exact path="/about/eric-ripert" component={about_owner2} />

      {/*Menu Pages*/}
      <Route exact path="/menus/dining-room/lunch" component={lunch} />
      <Route exact path="/menus/dining-room/dinner" component={dinner} />
      <Route exact path="/menus/dining-room/dessert" component={dessert} />
      <Route exact path="/menus/dining-room/chefs-tasting" component={chefs_tasting} />
      <Route exact path="/menus/dining-room/le-fin-tasting" component={le_fin_tasting} />
      <Route exact path="/menus/dining-room/vegetarian-tasting" component={vegetarian_tasting } />
      <Route exact path="/menus/lounge/lounge-menu" component={lounge_menu} />
      <Route exact path="/menus/lounge/city-harvest" component={city_harvest} />
      <Route exact path="/menus/lounge/cocktails" component={cocktails} />
      <Route exact path="/menus/lounge/wine-and-spirits" component={wine_and_spirits} />
      <Route exact path="/menus/wine/wine-program" component={wine_program} />
      
      {/*Private Dining Pages*/}
      <Route exact path="/private-dining/les-salons-bernardin" component={les_salons_bernardin} />
      <Route exact path="/private-dining/le-bernardin-prive" component={le_bernardin_prive} />
      <Route exact path="/private-dining/inquiries" component={inquiries} />
      <Route exact path="/menus/lounge/wine-and-spirits" component={wine_and_spirits} />

      {/*Reservations Pages*/}
      <Route exact path="/reservations" component={reservations} />
      <Route exact path="/reservations/hours-and-information" component={hours_information} />

      {/*Contact Us Pages*/}
      {/*Gifts Pages*/}
    
    </Router>
  );
}

export default App;
