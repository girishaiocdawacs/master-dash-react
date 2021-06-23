import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';
import { UpdateData } from './UpdateData';
function ChartsAndUpdates() {
    return (
        <div className="row">
            <div className="col-xl-8">
                <div className="card bg-default">
                    <div className="card-header bg-transparent">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                <h5 className="h3 text-white mb-0">Sales value</h5>
                            </div>
                            <div className="col">
                                <ul className="nav nav-pills justify-content-end">
                                    <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                                        <a href="www.aiocdawacs.com" className="nav-link py-2 px-3 active" data-toggle="tab">
                                            <span className="d-none d-md-block">Month</span>
                                            <span className="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                                        <a href="www.aiocdawacs.com" className="nav-link py-2 px-3" data-toggle="tab">
                                            <span className="d-none d-md-block">Week</span>
                                            <span className="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* <!-- Chart --> */}
                        <div className="chart">
                            {/* <!-- Chart wrapper --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card">
                    <div className="card-header bg-transparent">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="text-uppercase text-muted ls-1 mb-1">Updates</h6>
                                <h5 className="h3 mb-0">Files Processed</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {UpdateData.map((item, index) => {
                            return (
                                <div className="col ml--3 border-bottom m-3" key={index}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className="mb-0 text-sm">{item.title}</h4>
                                        </div>
                                        <div className="text-right text-muted">
                                            <small>{item.time}</small>
                                        </div>
                                    </div>
                                    <p className="text-sm mb-0">{item.msg}</p>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartsAndUpdates
