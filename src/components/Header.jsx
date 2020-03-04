import React from 'react';
import '../App.css';
import Cart from  '../pages/Cart';
import Beer from  '../pages/Beer';
import Liquors from  '../pages/Liquors';
import Login from  '../pages/Login';
import Profile from  '../pages/Profile';
import Register from  '../pages/Register';
import Wine from  '../pages/Wine';


import { NavLink, Switch, Route } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {

        super(props);
    
        this.state = {
        };
      }

    render() {

        /*Need to relook at this part for quantity*/
        let unitTotal = 0;

        const totalCartQty = this.props.check.cart.forEach( (cart, index) => 
        {
          unitTotal += cart.units;
          return unitTotal;
        });

       return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">DRINKS-R-US</a>
                <NavLink to="/" className="nav-link text-light"> Home </NavLink>
                <NavLink to="/Liquors" className="nav-link text-body"> Liquors </NavLink>
                <NavLink to="/Beer" className="nav-link text-body"> Beer </NavLink>
                <NavLink to="/Wine" className="nav-link text-body"> Wine </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/Cart" className="nav-link"> Cart ({unitTotal})</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Register" className="nav-link"> Register </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Login" className="nav-link"> Login </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Profile" className="nav-link"> Profile </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

               <Switch>
                    <Route exact path="/Beer" component={Beer} />
                    <Route exact path="/Cart" component={Cart} />
                    <Route exact path="/Liquors" component={Liquors} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/Wine" component={Wine} />
               </Switch>
          </div>
       );
    }
  }

  export default Header;