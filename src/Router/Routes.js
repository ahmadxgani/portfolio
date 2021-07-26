import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Navigation from "../Component/Navigation"
import Home from "../Component/Home"
import MyCv from "../Component/MyCv"
import ContactMe from "../Component/ContactMe"

export default function Routes() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={MyCv} />
          <Route exact path="/contact" component={ContactMe} />
        </Switch>
      </div>
    </Router>
  )
}
