import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import ReviewFeed from "./components/ReviewFeed.js";
import Account from "./components/Account.js";
import BugReport from "./components/BugReport.js";
import CreateAccount from "./components/CreateAccount";
import CreateReview from "./components/CreateReview.js";

function App() { 
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/reviewfeed" component={ReviewFeed} />
        <Route path="/account" component={Account} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/bugs" component={BugReport} />
        <Route path="/createreview" component={CreateReview} />
      </Switch>
    </main>
  );
}

export default App;
