import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './SideNav.css';
import { SideNavData } from './SideNavData';
function SideNav() {
  return (
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <div class="scrollbar-inner">
        {/* <!-- Brand --> */}
        <div class="sidenav-header  align-items-center">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src="../../logo.gif" class="navbar-brand-img" alt="..." />
          </a>
        </div>
        <div class="navbar-inner">
          {/* <!-- Collapse --> */}
          <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* <!-- Nav items --> */}
            <ul className="navbar-nav">
              {SideNavData.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    {console.log(item.title)}
                    <a className="nav-link active" href="dashboard.html">
                      {item.icon} &emsp;
                    <span className="nav-link-text">{item.title}</span>
                    </a>
                  </li>
                )
              })}

            </ul>
            {/* <!-- Divider --> */}
            <hr class="my-3" />
            {/* <!-- Heading --> */}
            <h6 class="navbar-heading p-0 text-muted">
              <span class="docs-normal">Documentation</span>
            </h6>
            {/* <!-- Navigation --> */}
            <ul class="navbar-nav mb-md-3">
              <li class="nav-item">
                <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                  <i class="ni ni-spaceship"></i>
                  <span class="nav-link-text">Getting started</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                  <i class="ni ni-palette"></i>
                  <span class="nav-link-text">Foundation</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                  <i class="ni ni-ui-04"></i>
                  <span class="nav-link-text">Components</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                  <i class="ni ni-chart-pie-35"></i>
                  <span class="nav-link-text">Plugins</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active active-pro" href="upgrade.html">
                  <i class="ni ni-send text-dark"></i>
                  <span class="nav-link-text">Upgrade to PRO</span>
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
