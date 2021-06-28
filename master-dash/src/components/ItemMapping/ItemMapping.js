import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './ItemMapping.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import * as FiIcon from 'react-icons/fi';
import * as VscIcon from 'react-icons/vsc';
import { Modal, Button } from 'react-bootstrap';

function ItemMapping(props) {


  const [show, setShow] = useState(false)
  // const [show1, setShow1] = useState(false)
  const [today, setToday] = useState('')
  const [toDate, setToDate] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [noLetter, setNoLetter] = useState('')
  const [brandMatch, setBrandMatch] = useState('')
  const [brand, setBrand] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [masterItem, setMasterItem] = useState('')
  const [itemMapping, setItemMapping] = useState({
    "fromDate": "",
    "toDate": "",
    "noLetter": "",
    "brandMatch": "",
    "brand": "",
    "manufacturer": "",
    "masterItem": ""
  })

  const states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]


  useEffect(() => {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    setToday(yyyy + '-' + mm + '-' + dd)
    setItemMapping({
      "fromDate": fromDate,
      "toDate": toDate,
      "noLetter": noLetter,
      "brandMatch": brandMatch,
      "brand": brand,
      "manufacturer": manufacturer,
      "masterItem": masterItem
    });
  }, [fromDate, toDate, noLetter, brandMatch, brand, manufacturer, masterItem])

  function refresh() {
    window.location.reload();
  }


  function handleClose() {
    setShow(false)
    // setShow1(false)
  }

  function handleShow() {
    setShow(true)
  }

  function search() {
    fetch("http://127.0.0.1:5000/ItemMapping", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemMapping),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }


  function checkAllSelected(){
    let len = document.getElementsByClassName('states').length
    let flag = 0
    for (let i = 0; i < len; i++) {
      if(document.getElementById('states' + i).checked == false){
        flag = 1
      }
    }
    if(flag == 1){
      document.getElementById('allStates').checked = false
    }
    if(flag == 0){
      document.getElementById('allStates').checked = true
    }
  }

  function allStates() {
    let len = document.getElementsByClassName('states').length
    if (document.getElementById('allStates').checked == true) {
      for (let i = 0; i < len; i++) {
        document.getElementById('states' + i).checked = true
      }
    }
    else {
      for (let i = 0; i < len; i++) {
        document.getElementById('states' + i).checked = false
      }
    }
  }

  return (
    <div>
      <Header title="Item Mapping" btitle="Item Mapping" disp="none" />
      <div className="container-fluid mt--8" style={{ zIndex: "99" }}>
        <div className="row small">
          <div className="col-xl col-md">
            <div className="card p-3">
              <form>
                <div className="row">
                  <div className="col-5">
                    <div className="form-group col">
                      <label for="fromDate">Port Date from:&emsp;</label>
                      <input type="date" className="form-control-sm" onChange={(e) => { setFromDate(e.target.value) }} id="fromDate" name="fromDate" />
                      <label for="toDate">&emsp;To:&emsp;</label>
                      <input type="date" className="form-control-sm" onChange={(e) => { setToDate(e.target.value) }} id="toDate" name="toDate" max={today} />
                    </div>
                    <div className="form-group col">
                      <button type="button" onClick={() => { handleShow() }} className="btn btn btn-primary m-2"><FiIcon.FiSearch /> Search</button>
                      <button type="button" className="btn btn bg-yellow m-2"><VscIcon.VscClearAll /> Clear</button>
                      <button type="button" onClick={() => { refresh() }} className="btn btn bg-secondary m-2"><FiIcon.FiRefreshCw /> Refresh</button>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="form-group col">
                      <label for="noLetter">&emsp;No. of Letter:&nbsp;</label>
                      <input type="number" className="form-control-sm" onChange={(e) => { setNoLetter(e.target.value) }} id="noLetter" name="noLetter" style={{ width: "64px" }} placeholder="Enter " />
                      <label for="brandMatch">&emsp;Brand Match:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setBrandMatch(e.target.value) }} id="brandMatch" name="brandMatch" style={{ width: "60px" }} size="20" placeholder="Enter " />
                      <label for="brand">&emsp;Brand:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setBrand(e.target.value) }} id="brand" name="brand" placeholder="Enter Brand" />
                    </div>
                    <div className="form-group col">
                      <label for="manufacturer">&emsp;Manufacturer:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setManufacturer(e.target.value) }} id="manufacturer" name="manufacturer" placeholder="Enter Manufacturer" />
                      <label for="masterItem">&emsp;Master Item:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setMasterItem(e.target.value) }} id="masterItem" name="masterItem" placeholder="Enter Item" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="bg-primary disp-sm text-white card">
                <form className="row small p-3">
                  <div className="form-group col">
                    <label for="crDate">Stockist Items filter by:&emsp;</label><br />
                    <select className="form-control-sm">
                      <option>Select Option</option>
                      <option>Mapped Manufacturers Only</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label for="stkCode">Stockist Manufacturer:&emsp;</label><br />
                    <input type="text" className="form-control-sm" id="stkCode" style={{ width: "140px" }} name="stkCode" placeholder="Enter Manufacturer" />
                  </div>
                  <div className="form-group col">
                    <label for="stkCode">Item Name:&emsp;</label><br />
                    <input type="text" className="form-control-sm" id="stkCode" style={{ width: "140px" }} name="stkCode" placeholder="Enter Item Name" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="" style={{ width: "80%", float: "left" }}>

          <div className="row ml-4 pl-3">
            {/* FIRST TABLE */}
            <div className="card p-2 bg-white col-sm-6">
              <Table>
                <thead className="table-dark">
                  <tr>
                    <th>SKU</th>
                    <th className="text-right">Rate</th>
                  </tr>
                </thead>
              </Table>
              <div style={{ height: "300px", overflow: "hidden", overflowY: "scroll" }}>
                <Table striped bordered size="sm">
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td className="text-right">422.36</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td className="text-right">129.19</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td className="text-right">129.19</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td className="text-right">129.19</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td className="text-right">129.19</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* SECOND TABLE */}
            <div className="card bg-white col-sm-5 p-2">
              {/* <Table>
                <thead className="table-dark">
                  <tr>
                    <th>SKU</th>
                    <th className="text-right">Rate</th>
                      <th className="text-right">APPEND_DATETIME</th>
                  </tr>
                </thead>
              </Table> */}
              <div style={{ height: "300px", overflow: "hidden", overflowY: "scroll" }}>
                <Table striped bordered size="sm">
                  <thead className="table-dark">
                    <tr>
                      <th>SKU</th>
                      <th className="text-right">Rate</th>
                      <th className="text-right">APPEND_DATETIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>test</td>
                      <td className="text-right">422.36</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>test</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td>test</td>
                      <td className="text-right">129.19</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>test</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td>test</td>
                      <td className="text-right">129.19</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>test</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td>test</td>
                      <td className="text-right">129.19</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>test</td>
                      <td className="text-right">31.98</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td className="text-right">129.19</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="disp-lg bg-primary text-white mt--9" style={{ width: "18.9%", float: "left", zIndex: "-1" }}>
          <div className="col text-left ml-3" style={{ marginTop: "20vh" }}>
            <form className="row small">
              <div className="form-group">
                <label for="crDate">Stockist Items filter by:&emsp;</label><br />
                <select className="form-control-sm">
                  <option>Select Option</option>
                  <option>Mapped Manufacturers Only</option>
                </select>
              </div>
              <div className="form-group">
                <label for="stkCode">Stockist Manufacturer:&emsp;</label><br />
                <input type="text" className="form-control-sm" id="stkCode" name="stkCode" placeholder="Enter Manufacturer" />
              </div>
              <div className="form-group">
                <label for="stkCode">Item Name:&emsp;</label><br />
                <input type="text" className="form-control-sm" id="stkCode" name="stkCode" placeholder="Enter Item Name" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => { handleClose() }}>
        <Modal.Header closeButton>
          <Modal.Title>{"<Title Here>"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="card ml-4 p-2 col-md-6">
              <form>
                <div className="form-group">
                  <lable for="mappingType">Mapping Type:</lable>
                  <select id="mappingType" className="form-control-sm">
                    <option>Select</option>
                    <option>Company Delivery</option>
                  </select>
                </div>
                <div className="form-group">
                  <lable for="selection">Selection :</lable>
                  <input type="text" id="selection" className="form-control-sm" />
                </div>
                <div className="form-group">
                  <lable for="phase">Phase :</lable>
                  <select id="phase" className="form-control-sm" placeholder="SANOFI INDIA LTD.">
                    <option>All</option>
                    <option>Phase 1</option>
                    <option>Phase 2</option>
                  </select>
                </div>
              </form>
              <hr />
              <form>
                <div className="form-group">
                  <lable for="otherstomap"><input type="checkbox" name="checkbox" id="otherstomap" value="1" />&nbsp;Others to Map</lable>
                </div>
                <div className="form-group">
                  <lable for="productsadded"><input type="checkbox" name="checkbox" id="productsadded" value="1" />&nbsp;Product to be added</lable>
                </div>
                <div className="form-group">
                  <lable for="remap"><input type="checkbox" name="checkbox" id="remap" value="1" />&nbsp;View but not mapped items tp Re-map</lable>
                </div>
              </form>
            </div>
            <div className="card p-2 ml-3 col-md-5">
              <form>
                <lable for="otherstomap"><input type="checkbox" name="checkbox" onChange={() => { allStates() }} id="allStates" value="1" />&nbsp;Select All</lable>

                <div className="card" >
                  <ul className="list mt-2" style={{ height: "330px", overflow: "hidden", overflowY: "scroll" }}>
                    {states.map((state, index) => {
                      return (
                        <>
                          <li key={index}>
                            <lable for="otherstomap"><input type="checkbox" onClick={()=>{checkAllSelected()}} name="checkbox" className="states" id={"states" + index} value="1" />&nbsp;{state}</lable>
                          </li>
                        </>
                      );
                    })}
                    <li>
                    </li>
                  </ul>
                </div>

              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleClose() }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => { search(); handleClose() }}>
            Show
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ItemMapping;
