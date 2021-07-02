import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';
import Cards from './Cards';
import ChartsAndUpdates from './ChartsAndUpdates';
// import { useState } from 'react'
// import DashNav from '../DashNav/DashNav';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Home(props) {

  // function fetchData2(num) {
  //   fetch("http://127.0.0.1:5000/home/" + num, {
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //        setNum(json)
  //       console.log(json);
  //     });
  // }

  return (
    <div>
      <Header title="Home" btitle="Home" disp="show" />
      <div className="container-fluid mt--8">
        <Cards />
        <ChartsAndUpdates />
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Link to="#!" className="btn btn-sm btn-primary">See all</Link>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {/* <!-- Projects table --> */}
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Page name</th>
                      <th scope="col">Visitors</th>
                      <th scope="col">Unique users</th>
                      <th scope="col">Bounce rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        /argon/
                      </th>
                      <td>
                        4,569
                      </td>
                      <td>
                        340
                      </td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/index.html
                      </th>
                      <td>
                        3,985
                      </td>
                      <td>
                        319
                      </td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/charts.html
                      </th>
                      <td>
                        3,513
                      </td>
                      <td>
                        294
                      </td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/tables.html
                      </th>
                      <td>
                        2,050
                      </td>
                      <td>
                        147
                      </td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/profile.html
                      </th>
                      <td>
                        1,795
                      </td>
                      <td>
                        190
                      </td>
                      <td>
                        <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Link to="#!" className="btn btn-sm btn-primary">See all</Link>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {/* <!-- Projects table --> */}
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Referral</th>
                      <th scope="col">Visitors</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        Facebook
                      </th>
                      <td>
                        1,480
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Facebook
                      </th>
                      <td>
                        5,480
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">70%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Google
                      </th>
                      <td>
                        4,807
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">80%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Instagram
                      </th>
                      <td>
                        3,678
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">75%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        twitter
                      </th>
                      <td>
                        2,645
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">30%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
