import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './NotFound.css';
import Header from '../Header/Header';

function NotFound() {
  return (
    <>
      <Header title="NotFound" btitle="NotFound" disp="none" />
      <div className="container-fluid mt--8">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <h1>Page not found or Under construction!</h1>
                <h4>{"->"}&nbsp;Try contacting IT-Support Team!</h4>
              </div>
              <div className="card">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
