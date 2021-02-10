import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MyPostComponent } from "./PagesAll/postsPage.jsx.js"
import {MyUserComponent} from "./PagesAll/usersPage.jsx"

function App() {
  return (
    <Router>
      <h1>This is on everypage</h1>
      <Switch>
        <Route path="/posts">
          <MyPostComponent />
        </Route>
        <Route path ="/users">
          <MyUserComponent/>
        </Route>
      </Switch>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;