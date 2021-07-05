import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './DashNav.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function DashNav(props) {

  const [show, setShow] = useState(false)
  // const [show1, setShow1] = useState(false)


  function handleClose() {
    setShow(false)
    // setShow1(false)
  }

  function handleShow() {
    setShow(true)
  }
  function logout() {
    sessionStorage.removeItem("userLogin")
    sessionStorage.clear();
    window.location.reload();
  }


  return (
    <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Search form --> */}
          <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div className="form-group mb-0">
              {/* <div className=""> */}
              {/* <h6 className="h2 text-white d-inline-block mb-0">{props.title}</h6> */}
              <nav aria-label="breadcrumb" className="d-none d-md-inline-block ">
                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                  {/* <li className="breadcrumb-item"><Link to="/home"><i className="fas fa-home"></i></Link></li> */}
                  <li className="breadcrumb-item text-primary" aria-current="page">{props.btitle}</li>
                </ol>
              </nav>
              {/* </div> */}
              {/* SEARCH TEXTBOX */}
              {/* <div className="input-group input-group-alternative input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
                {/* <input className="form-control" placeholder={String.fromCodePoint(0x1F525) + "" + String.fromCodePoint(0x1F621) + "" + String.fromCodePoint(0x1F631) + "" + String.fromCodePoint(0x1F41E)} type="text" />
                <input className="form-control" placeholder="Search" type="text" />
              </div> */}
            </div>
            <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          {/* <!-- Navbar links --> */}
          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-xl-none">
              {/* <!-- Sidenav toggler --> */}
              {/* <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div> */}
            </li>
            <li className="nav-item d-sm-none">
              <div className="nav-link" data-action="search-show" data-target="#navbar-search-main">
                <i className="ni ni-zoom-split-in"></i>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-bell-55"></i>
              </div>
              <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                {/* <!-- Dropdown header --> */}
                <div className="px-3 py-3">
                  <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">13</strong> notifications.</h6>
                </div>
                {/* <!-- List group --> */}
                <div className="list-group list-group-flush">
                  <Link to="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* <!-- Avatar --> */}
                        {/* <img alt="1 Image placeholder1" src="../../assets/img/brand/blue.png" className="avatar rounded-circle" /> */}
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Sndddow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <!-- View all --> */}
                <Link to="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-ungroup"></i>
              </div>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                <div className="row shortcuts px-4">
                  <Link to="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i className="ni ni-calendar-grid-58"></i>
                    </span>
                    <small>Calendar</small>
                  </Link>
                  <Link to="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i className="ni ni-email-83"></i>
                    </span>
                    <small>Email</small>
                  </Link>
                  <Link to="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i className="ni ni-credit-card"></i>
                    </span>
                    <small>Payments</small>
                  </Link>
                  <Link to="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i className="ni ni-books"></i>
                    </span>
                    <small>Reports</small>
                  </Link>
                  <Link to="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i className="ni ni-pin-3"></i>
                    </span>
                    <small>Maps</small>
                  </Link>
                  <Link to="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i className="ni ni-basket"></i>
                    </span>
                    <small>Shop</small>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li className="nav-item d-xl-none">
              <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={() => { handleShow() }}>
              <span className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt=".." src="../../assets/img/theme/team-1.jpg" />
                  </span>
                  <div className="media-body  ml-2  d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">{localStorage.getItem("userLogin")}</span>
                  </div>
                </div>
              </span>
            </li>
          </ul>
          <Modal show={show} onHide={() => { handleClose() }}>
            <Modal.Header closeButton>
              <Modal.Title>Ready to Leave?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Select "Logout" below if you are ready to end your current session.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => { handleClose() }}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => { logout() }}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProp = (state) => {
  return {
    title: state.title,
    btitle: state.btitle
  }
}

export default connect(mapStateToProp)(DashNav);
