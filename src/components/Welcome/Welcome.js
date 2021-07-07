import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './Welcome.css';

function Welcome() {
  if (sessionStorage.getItem('userLogin')) {
    return (
      <>
        <Dashboard />
        <Footer />
      </>
    );
  }
  else {
    return (
      <>
        <Login />
        <Footer />
      </>
    );
  }
}

export default Welcome;
