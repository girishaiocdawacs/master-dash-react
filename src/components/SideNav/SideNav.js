import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './SideNav.css';
import * as Data from './SideNavData';
// import { NavLink } from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useHistory, useLocation } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import React from "react";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";

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
                  title: 'Home',
                  itemId: '/home',
                  elemBefore: () => <i className="fas fa-home text-pink"></i>,
                },
                {
                  title: 'Not Found',
                  itemId: '/hbasfiuk',
                  elemBefore: () => <i className="ni ni-button-power text-red"></i>,
                },
                {
                  title: 'Product Mapping',
                  itemId: '/location1',
                  subNav: Data.ProductMapping,
                },
                {
                  title: 'Manual Mapping',
                  itemId: '/itemmapping',
                  subNav: Data.ManualMapping,
                  elemBefore: () => <FcIcons.FcMindMap />,
                },
                {
                  title: 'Mapping QC',
                  itemId: '/mappingqc',
                  subNav: Data.MappingQC,
                  elemBefore: () => <span className="text-green"><GiIcons.GiCheckMark /></span>,
                },
                {
                  title: 'Emailan Porting',
                  itemId: '/location4',
                  subNav: Data.EmailanPorting,
                },
                {
                  title: 'MSCDA Porting',
                  itemId: '/location5',
                  subNav: Data.MSCDAPorting,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
