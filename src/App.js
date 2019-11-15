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
      <Route exact path="/menu/" component={menu} />
      <Route exact path="/test" component={test} />

        {/*Private Dining Pages*/}
        
        {/*Reservations Pages*/}
        {/*Contact Us Pages*/}
        {/*Gifts Pages*/}
      
    </Router>
  );
}

export default App;
