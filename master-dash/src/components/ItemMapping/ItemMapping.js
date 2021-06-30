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
import * as GrIcon from 'react-icons/gr';
import { Modal, Button } from 'react-bootstrap';
import ItemTable from './ItemTable';

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

  const [mappingType, setMappingType] = useState('')
  const [selection, setSelection] = useState('')
  const [phase, setPhase] = useState('')
  const [othersToMap, setOthersToMap] = useState('')
  const [productsAdded, setProductsAdded] = useState('')
  const [reMap, setReMap] = useState('')
  const [selectedStates, setSelectedStates] = useState([])

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


  function checkAllSelected() {
    let len = document.getElementsByClassName('states').length
    let flag = 0
    for (let i = 0; i < len; i++) {
      if (document.getElementById('states' + i).checked === false) {
        flag = 1
      }
    }
    if (flag === 1) {
      document.getElementById('allStates').checked = false
    }
    if (flag === 0) {
      document.getElementById('allStates').checked = true
    }
  }

  function allStates() {
    let len = document.getElementsByClassName('states').length
    if (document.getElementById('allStates').checked === true) {
      for (let i = 0; i < len; i++) {
        document.getElementById('states' + i).checked = true
      }
      arr = states;
    }
    else {
      for (let i = 0; i < len; i++) {
        document.getElementById('states' + i).checked = false
      }
      arr = [];
    }
    console.log(arr)
  }
  let arr = []

  function selectedState() {
    let len = document.getElementsByClassName('states').length
    for (let i = 0; i < len; i++) {
      if (document.getElementById('states' + i).checked == true) {
        arr.push(document.getElementById('states' + i).value)
      }
    }
    // setSelectedStates(arr)
    console.log(selectedStates)
  }

  function handleCheck(e) {
    // setSelectedStates([])
    if (e.target.checked) {
      console.log("Pushed:", e.target.value)
      arr.push(e.target.value)
    }
    else {
      console.log("Poped:", e.target.value)
      arr.pop(e.target.value)
    }

    console.log("arr:", arr)
  }

  function ifChecked() {
    if (document.getElementById('othersToMap').checked === true) {
      setOthersToMap(document.getElementById('othersToMap').value)
    }
    else {
      setOthersToMap('')
    }
    if (document.getElementById('productsAdded').checked === true) {
      setProductsAdded(document.getElementById('productsAdded').value)
    }
    else {
      setProductsAdded('')
    }
    if (document.getElementById('reMap').checked === true) {
      setReMap(document.getElementById('reMap').value)
    }
    else {
      setReMap('')
    }
  }

  function submitData() {
    console.log({
      "mappingType": mappingType,
      "selection": selection,
      "phase": phase,
      "othersToMap": othersToMap,
      "productsAdded": productsAdded,
      "reMap": reMap,
      "arr": arr
    })
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
                      <label htmlFor="fromDate">Port Date from:&emsp;</label>
                      <input type="date" className="form-control-sm" onChange={(e) => { setFromDate(e.target.value) }} id="fromDate" name="fromDate" max={today} defaultValue={today} />
                      <label htmlFor="toDate">&emsp;To:&emsp;</label>
                      <input type="date" className="form-control-sm" onChange={(e) => { setToDate(e.target.value) }} id="toDate" name="toDate" max={today} defaultValue={today} />
                    </div>
                    <div className="form-group col">
                      <button type="button" onClick={() => { handleShow() }} className="btn btn-sm btn-info text-dark m-2"><GrIcon.GrNext /> Next</button>
                      <button type="button" className="btn btn-sm btn-primary m-2"><FiIcon.FiSearch /> Search</button>
                      <button type="button" className="btn btn-sm bg-yellow m-2"><VscIcon.VscClearAll /> Clear</button>
                      <button type="button" onClick={() => { refresh() }} className="btn btn-sm bg-secondary m-2 border"><FiIcon.FiRefreshCw /> Refresh</button>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="form-group col">
                      <label htmlFor="noLetter">&emsp;No. of Letter:&nbsp;</label>
                      <input type="number" className="form-control-sm" onChange={(e) => { setNoLetter(e.target.value) }} id="noLetter" name="noLetter" style={{ width: "64px" }} placeholder="Enter " />
                      <label htmlFor="brandMatch">&emsp;Brand Match:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setBrandMatch(e.target.value) }} id="brandMatch" name="brandMatch" style={{ width: "60px" }} size="20" placeholder="Enter " />
                      <label htmlFor="brand">&emsp;Brand:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setBrand(e.target.value) }} id="brand" name="brand" placeholder="Enter Brand" />
                    </div>
                    <div className="form-group col">
                      <label htmlFor="manufacturer">&emsp;Manufacturer:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setManufacturer(e.target.value) }} id="manufacturer" name="manufacturer" placeholder="Enter Manufacturer" />
                      <label htmlFor="masterItem">&emsp;Master Item:&nbsp;</label>
                      <input type="text" className="form-control-sm" onChange={(e) => { setMasterItem(e.target.value) }} id="masterItem" name="masterItem" placeholder="Enter Item" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="bg-primary disp-sm text-white card">
                <form className="row small pt-2 pl-3">
                  <div className="form-group col">
                    <label htmlFor="crDate">Stockist Items filter by:&emsp;</label><br />
                    <select className="form-control-sm">
                      <option>Select Option</option>
                      <option>Mapped Manufacturers Only</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="stkCode">Stockist Manufacturer:&emsp;</label><br />
                    <input type="text" className="form-control-sm" id="stkCode" style={{ width: "140px" }} name="stkCode" placeholder="Enter Manufacturer" />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="stkCode">Item Name:&emsp;</label><br />
                    <input type="text" className="form-control-sm" id="stkCode" style={{ width: "140px" }} name="stkCode" placeholder="Enter Item Name" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ zIndex: "99" }}>
        <div className="row small">
          <div className="col-xl col-md">
            <div className="card p-3">
              <ItemTable />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL HERE */}
      <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => { handleClose() }}>
        <Modal.Header closeButton>
          <Modal.Title>{"<Title Here>"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="card ml-4 p-2 col-md-6">
              <form>
                <div className="form-group">
                  <lable htmlFor="mappingType">Mapping Type:</lable>
                  <select onChange={e => setMappingType(e.target.value)} id="mappingType" className="form-control-sm">
                    <option>Select</option>
                    <option>Company Delivery</option>
                    <option>Panel Stockist Only</option>
                    <option>Distributor Wise</option>
                    <option>Optistox</option>
                    <option>Division Linkage</option>
                    <option>Samrt & FairShare</option>
                  </select>
                </div>
                <div className="form-group">
                  <lable htmlFor="selection">Selection :</lable>
                  <input type="text" onChange={e => setSelection(e.target.value)} id="selection" className="form-control-sm" />
                </div>
                <div className="form-group">
                  <lable htmlFor="phase">Phase :</lable>
                  <select onChange={e => setPhase(e.target.value)} id="phase" className="form-control-sm" placeholder="SANOFI INDIA LTD.">
                    <option>All</option>
                    <option>Phase 1</option>
                    <option>Phase 2</option>
                  </select>
                </div>
              </form>
              <hr />
              <form>
                <div className="form-group">
                  <lable htmlFor="othersToMap"><input type="checkbox" name="othersToMap" onChange={() => { ifChecked() }} id="othersToMap" value="Others to Map" />&nbsp;Others to Map</lable>
                </div>
                <div className="form-group">
                  <lable htmlFor="productsAdded"><input type="checkbox" name="productsAdded" onChange={() => { ifChecked() }} id="productsAdded" value="Product to be added" />&nbsp;Product to be added</lable>
                </div>
                <div className="form-group">
                  <lable ><input type="checkbox" name="reMap" onChange={() => { ifChecked() }} id="reMap" value="View but not mapped items to Re-map" />&nbsp;</lable>
                  <lable htmlFor="reMap" >&nbsp;View but not mapped items to Re-map</lable>
                </div>
              </form>
            </div>
            <div className="card p-2 ml-3 col-md-5">
              <form>
                <lable htmlFor="allStates"><input type="checkbox" name="checkbox" onChange={() => { allStates() }} id="allStates" value="1" />&nbsp;Select All</lable>

                <div className="card" >
                  <ul className="list mt-2" style={{ height: "330px", overflow: "hidden", overflowY: "scroll" }}>
                    {states.map((state, index) => {
                      return (
                        <li key={index}>
                          <lable htmlFor="othersToMap"><input type="checkbox" onClick={(e) => { handleCheck(e); checkAllSelected() }} name="checkbox" className="states" id={"states" + index} value={state} />&nbsp;{state}</lable>
                        </li>
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
          <Button variant="primary" onClick={() => { search(); submitData(); }}>
            Show
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ItemMapping;
