import React from 'react';
import { Table } from 'react-bootstrap';

function StockistItem() {
    return (
        <div className="mt-2">
            <div className="row">
                <div className="col">
                    <div className="form-group row">
                        <div className="col-3">
                            <label htmlFor="">Item Name:&nbsp;</label>
                            <input type="text" id="a" name="a" className="form-control-sm" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="">Manufacturer:&nbsp;</label>
                            <input type="text" id="b" name="b" defaultValue="CHEQUE COMMISSION" className="form-control-sm" />
                        </div>
                        <div className="col-3">
                            <label htmlFor="">Status:&nbsp;</label>
                            <select id="" name="" className="form-control-sm">
                                <option>All</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Table bordered responsive size="sm">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>S. No.</th>
                                <th>Item Name</th>
                                <th>Stockist Manufacturer</th>
                                <th>Master Manufacturer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S. No.</td>
                                <td>Item Name</td>
                                <td>Stockist Manufacturer</td>
                                <td>Master Manufacturer</td>
                                <td>Status</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    )
}

export default StockistItem;
