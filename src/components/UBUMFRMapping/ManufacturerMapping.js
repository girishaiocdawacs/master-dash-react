import React from 'react'
import { Table } from 'react-bootstrap';


function ManufacturerMapping() {
    return (
        <div className="mt-2">
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="col">
                        <div className="col">
                            <label htmlFor="masterdivision" className="h3">Master Manufacturer</label>
                            &emsp;&emsp;&emsp;&emsp;
                            <input type="checkbox" id="mappeditemcount" name="mappeditemcount" />&nbsp;
                            <label htmlFor="mappeditemcount">Mapped Item Count</label>
                        </div>
                    </div>
                    <div className="col p-2">
                        <input type="text" className="form-control-sm" size="65" />
                    </div>
                    <div className="col bg-yellow mt-2">
                        <h3 className="p-0 m-0 ml-2 text-dark">Yellow</h3>
                    </div>
                    <div>
                        <Table bordered responsive size="sm">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th>SNO</th>
                                    <th>DIVISION_NAME</th>
                                    <th>BUSINESSUNIT_NAME</th>
                                    <th>MANUFACTURER_NAME</th>
                                    <th>METHOD_NAME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SNO</td>
                                    <td>DIVISION_NAME</td>
                                    <td>BUSINESSUNIT_NAME</td>
                                    <td>MANUFACTURER_NAME</td>
                                    <td>METHOD_NAME</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="col-lg-6 m-0 border-left">
                    {/* <div className="col"> */}
                    <div className="row small p-0 m-0">
                        <div className="p-0 form-group col">
                            <label htmlFor="stockistmanufacturer">Stockist Manufacturer:</label><br />
                            <input type="text" className="form-control-sm" id="stockistmanufacturer" name="stockistmanufacturer" />&nbsp;
                        </div>
                        <div className="p-0 form-group col">
                            <label htmlFor="stockistshortcode">Stockist Shortcode:</label><br />
                            <input type="text" className="form-control-sm" id="stockistshortcode" name="stockistshortcode" />&nbsp;
                        </div>
                        <div className="col">
                            <input type="checkbox" className="" id="multiselect" name="multiselect" />&nbsp;
                            <label htmlFor="multiselect">Multi Select</label>
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;
                            <input type="checkbox" className="" id="selectall" name="selectall" disabled />&nbsp;
                            <label htmlFor="selectall" className="disabled">Select All</label>
                        </div>
                    </div>

                    {/* </div> */}
                    <Table bordered responsive size="sm">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>SNO</th>
                                <th>MANUFACTURER_NAME</th>
                                <th>SHORTCODE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SNO</td>
                                <td>MANUFACTURER_NAME</td>
                                <td>SHORTCODE</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerMapping
