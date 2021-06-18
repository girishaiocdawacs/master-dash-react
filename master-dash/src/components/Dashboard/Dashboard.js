import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import Home from '../Home/Home';
import SideNav from '../SideNav/SideNav';
import './Dashboard.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';


function Dashboard() {
  return (
    <div>
      <Router>
        <SideNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
