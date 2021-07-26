import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Navigation from "../Component/Navigation"
import Home from "../Component/Home"
import About from "../Component/About"
import Project from "../Component/MyCv"
import Connect from "../Component/Connect"

export default function Routes() {
  return (
    <Router>
      <div className="bg-gray-200">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/connect" component={Connect} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}
