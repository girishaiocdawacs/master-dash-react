import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Header(props) {
  const disp = props.disp;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      In Development
    </Tooltip>
  );

  return (
    <div className="header bg-primary pb-6">
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">{props.title}</h6>
                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                  <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li className="breadcrumb-item"><a href="/home"><i className="fas fa-home"></i></a></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.btitle}</li>
                  </ol>
                </nav>
              </div>

              <div className="col-lg-6 col-5 text-right" style={{ display: disp }}>
                <a href="/addscreen" className="btn btn-sm btn-neutral"  >Add Screen Test</a>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <span className="btn btn-sm btn-neutral disabled" style={{ display: "none" }}>Add Screen</span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <button className="btn btn-sm btn-neutral disabled">Add Screen</button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
