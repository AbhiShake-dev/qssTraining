import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import App from './App'
import page1 from './page1'
import page2 from './page2'
import page3 from './page3'
import page4 from './page4'
import page5 from './page5'
import Notfound from './notfound';
const routing = (
  <Router>
    <div>
      <ul>
      <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/page1">
            [1]
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/page2">
            [2]
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/page3">
            [3]
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/page4">
            [4]
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/page5">
            [5]
          </NavLink>
        </li>
        
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page1" component={page1} />
        <Route path="/page2" component={page2} />
        <Route path="/page3" component={page3} />
        <Route path="/page4" component={page4} />
        <Route path="/page5" component={page5} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))