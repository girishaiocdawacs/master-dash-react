import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';

import React, { useState, useEffect } from 'react'

function Cards() {

    const [data, setData] = useState([]);
    let data1 = []
    // useMemo(() => data1, [])

    useEffect(() => {
        const fetchData = () => {
            fetch("http://127.0.0.1:5000/AllCounts", {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => {
                    for (let i = 0; i < json.length; i++) {
                        data1[json[i].name] = json[i].count
                    }
                    setData(data1)
                    // console.log(data["stock_and_sales"])
                });
        }
        fetchData();
    }, [data1])

    return (
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* <!-- Card body --> */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Stock and Sales Files</h5>
                                <span className="h2 font-weight-bold mb-0">{data["stock_and_sales"]}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i className="ni ni-folder-17"></i>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 34.48%</span>
                            <span className="text-nowrap">Since last month</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* <!-- Card body --> */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Invoice Details</h5>
                                <span className="h2 font-weight-bold mb-0">{data["invoice_details"]}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                    <i className="ni ni-single-copy-04"></i>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            <span className="text-danger mr-2"><i className="fa fa-arrow-down"></i>3.02%</span>
                            <span className="text-nowrap">Since last month</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* <!-- Card body --> */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Batch Details</h5>
                                <span className="h2 font-weight-bold mb-0">{data["batch_details"]}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                    <i className="ni ni-ungroup"></i>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 13.93%</span>
                            <span className="text-nowrap">Since last month</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    {/* <!-- Card body --> */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Files</h5>
                                <span className="h2 font-weight-bold mb-0">{data["file_details"]}</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                    <i className="ni ni-collection"></i>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 48.56%</span>
                            <span className="text-nowrap">Since last month</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
