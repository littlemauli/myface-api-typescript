import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MyPostComponent } from "./postsPage.jsx"
import { MyUserComponent } from "./usersPage.jsx"
import { MyHeaderComponent } from "./header.jsx"
import { GetUserDetails } from './userDetails.jsx';
import {MyCreateUserComponent} from './create_user.jsx'

import './css/app.scss';

function App() {
  return (
    <Router>
      < MyHeaderComponent />
      <Switch>
        <Route path="/posts">
          <MyPostComponent />
        </Route>
        <Route path="/users">
          <MyUserComponent />
        </Route>
        <Route path='/identity/:id'>
          <GetUserDetails />
        </Route>
        <Route path='/user/create'>
          <MyCreateUserComponent />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
