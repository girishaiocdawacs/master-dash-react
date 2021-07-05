import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './SideNav.css';
// import { SideNavData } from './SideNavData';
// import { NavLink } from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useHistory, useLocation } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import React from "react";
function SideNav() {

  const location = useLocation();
  const history = useHistory();
  // const [sideNavData, setSideNavData] = useState([])

  // useEffect(() => {
  //   fetchData()
  // }, [])


  // function fetchData() {
  //   fetch('http://127.0.0.1:5000/SideNavData', {
  //     method: 'GET'
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setSideNavData(json)
  //       console.log(String.fromCodePoint(0x1F525),String.fromCodePoint(0x1F621),String.fromCodePoint(0x1F631),String.fromCodePoint(0x1F41E));
  //     })
  // }

  return (
    <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <div className="scrollbar-inner">
        {/* <!-- Brand --> */}
        <div className="sidenav-header mt-2 align-items-center">
          <img src="../../logo.gif" height="95%" width="80%" alt="..." />
        </div>
        <div className="navbar-inner p-0 m-0">
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* <!-- Nav items --> */}
            {/* <ul className="navbar-nav"> */}
              <Navigation
                // you can use your own router's api to get itemIdname
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                  history.push(itemId);
                }}
                items={[
                  {
                    title: 'Dashboard',
                    itemId: '/dashboard',
                    // you can use your own custom Icon component as well
                    // elemBefore: () =>is optional
                  },
                  {
                    title: 'Manual Mapping',
                    itemId: '/management',
                    subNav: [
                      {
                        title: 'Not Found',
                        itemId: '/hbasfiuk',
                        elemBefore: () => <i className="ni ni-button-power text-red"></i>,
                      },
                      {
                        title: 'Home',
                        itemId: '/home',
                        elemBefore: () => <i className="ni ni-settings text-pink"></i>,
                      },
                      {
                        title: 'Stock and Sales',
                        itemId: '/stockandsales',
                        elemBefore: () => <i className="ni ni-chart-bar-32 text-green"></i>,
                      },
                      {
                        title: 'Item Mapping',
                        itemId: '/itemmapping',
                        elemBefore: () => <i className="ni ni-check-bold text-red"></i>,
                      },
                      // {
                      //     title: 'Item Mapping Unfreeze',
                      //     itemId: '/itemmappingunfreeze',
                      //     elemBefore: () => <i className="ni ni-palette text-blue"></i>,
                      // },
                      {
                        title: 'Division Wise Mapping',
                        itemId: '/divisionwisemapping',
                        elemBefore: () => <i className="ni ni-circle-08 text-yellow"></i>,
                      },
                      {
                        title: 'Manufacturer Mapping Revoke',
                        itemId: '/manufacturermappingrevoke',
                        elemBefore: () => <i className="ni ni-briefcase-24 text-dark"></i>,
                      },
                      {
                        title: 'New Product Mapping',
                        itemId: '/newproductmapping',
                        elemBefore: () => <i className="ni ni-badge text-green"></i>,
                      },
                      {
                        title: 'Merging and Force Shifted',
                        itemId: '/mergingandforceshifted',
                        elemBefore: () => <i className="ni ni-badge text-red"></i>,
                      },
                      {
                        title: 'Mapping Correction',
                        itemId: '/mappingcorrection',
                        elemBefore: () => <i className="ni ni-badge text-blue"></i>,
                      },
                    ],
                  },
                ]}
              />
              {/* {SideNavData.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink to={item.path} activeClassName="nav-link active" className="nav-link collapsed p-3" href="#page_top" aria-expanded="true">
                      {item.icon}
                      <span className="nav-link-text">{item.title}</span>
                    </NavLink>
                  </li>
                )
              })} */}
            {/* </ul> */}
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
