import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './SideNav.css';
import { SideNavData } from './SideNavData';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SideNav() {

  const [sideNavData, setSideNavData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])


  function fetchData() {
    fetch('http://127.0.0.1:5000/SideNavData', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => {
        setSideNavData(json)
        console.log(String.fromCodePoint(0x1F525),String.fromCodePoint(0x1F621),String.fromCodePoint(0x1F631),String.fromCodePoint(0x1F41E));
      })
  }

  return (
    <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <div className="scrollbar-inner">
        {/* <!-- Brand --> */}
        <div className="sidenav-header mt-2 align-items-center">
          <img src="../../logo.gif" height="95%" width="80%" alt="..." />
        </div>
        <div className="navbar-inner">
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* <!-- Nav items --> */}
            <ul className="navbar-nav">
              {SideNavData.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} activeClassName="nav-link active" className="nav-link collapsed p-3" href="#page_top" aria-expanded="true">
                      {item.icon}
                      <span className="nav-link-text">{item.title}</span>
                    </NavLink>
                  </li>
                )
              })}

            </ul>
            {/* <!-- Divider --> */}
            <hr className="my-3" />
            {/* <!-- Heading --> */}
            <h6 className="navbar-heading p-0 text-muted">
              <span className="docs-normal">Documentation</span>
            </h6>
            {/* <!-- Navigation --> */}
            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
                  <i className="ni ni-spaceship"></i>
                  <span className="nav-link-text">Getting started</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
                  <i className="ni ni-palette"></i>
                  <span className="nav-link-text">Foundation</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
                  <i className="ni ni-ui-04"></i>
                  <span className="nav-link-text">Components</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html">
                  <i className="ni ni-chart-pie-35"></i>
                  <span className="nav-link-text">Plugins</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
