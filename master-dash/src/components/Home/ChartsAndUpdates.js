import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';
import { UpdateData } from './UpdateData';
import { Bar } from 'react-chartjs-2';

function ChartsAndUpdates() {

    // const [month, setMonth] = useState(["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"]);
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    // const [data, setData] = useState([79, 61, 79, 9, 67, 97, 99, 6, 9, 67, 9, 6])
    const data = [79, 61, 79, 9, 67, 97, 99, 6, 9, 67, 9, 6]
    const [chartToggle, setChartToggle] = useState(true)
    const [chartType, setChartType] = useState('Month')
    const monthChart = <Bar
        data={{
            labels: month,
            datasets: [{
                label: 'No of Orders',
                data: data,
                backgroundColor: '#87c1c1',
                borderColor: '#65a765',
                borderWidth: 1
            }]
        }}
        width={100}
        height={200}
        options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                yAxes: [{
                    gridLines: {
                        display: true
                    },
                    ticks: {
                        max: 100,
                        min: 0,
                        stepSize: 20,
                        fontColor: '#a6a6a6'
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: '#a6a6a6'
                    },
                    ticks: {
                        fontColor: '#a6a6a6'
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#a6a6a6'
                }
            }
        }}
    />

    const weekChart = <h1 className="text-white">Week Chart</h1>

    const [chart, setChart] = useState(monthChart)


    useEffect(() => {
        console.log(chartToggle)
        if (chartToggle === true) {
            setChartType('Month')
            setChart(monthChart)
        }
        if (chartToggle === false) {
            setChartType('Week')
            setChart(weekChart)
        }
    }, [chartToggle])

    return (
        <div className="row">
            <div className="col-xl-8">
                <div className="card bg-default">
                    <div className="card-header bg-transparent">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="text-light text-uppercase ls-1 mb-1">{chartType}</h6>
                                <h5 className="h3 text-white mb-0">Sales value</h5>
                            </div>
                            <div className="col">
                                <ul className="nav nav-pills justify-content-end">
                                    <li className="nav-item mr-2 mr-md-0" onClick={() => { setChartToggle(!chartToggle) }} >
                                        <a href="www.aiocdawacs.com" className="nav-link py-2 px-3 active" id="Month" data-toggle="tab">
                                            <span className="d-none d-md-block">Month</span>
                                            <span className="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => { setChartToggle(!chartToggle) }}>
                                        <a href="www.aiocdawacs.com" className="nav-link py-2 px-3" id="Week" data-toggle="tab">
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
                            {chart}
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
