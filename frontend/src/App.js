import ListGuests from './components/ListGuests';
import AddGuest from './components/AddGuest';
import UpdateGuest from './components/UpdateGuest';
import DeleteGuest from './components/DeleteGuest';
import ViewGuest from './components/ViewGuest';
import './App.css'

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/pages/Navbar';
import Priority from './components/pages/Priority';
import Contacts from './components/pages/Contacts';

function App() {
    return (
        <div>
          <Router>
          <Navbar />
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ListGuests}></Route>
                  <Route path="/guests" component={ListGuests}></Route>
                  <Route path="/add-guest" component={AddGuest}></Route>
                  <Route path="/update-guest/:id" component={UpdateGuest}></Route> 
                  <Route path="/delete-guest/:id" component={DeleteGuest}></Route> 
                  <Route path="/view-guest/:id" component={ViewGuest}></Route>
                  <Route path="/PriorityX" component={Priority}></Route>
                  <Route path="/Contacts" component={Contacts}></Route>
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;
