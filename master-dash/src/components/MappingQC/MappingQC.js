import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './MappingQC.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import * as BiIcon from 'react-icons/bi';
import * as VscIcon from 'react-icons/vsc';
import * as RiIcon from 'react-icons/ri';

function MappingQC(props) {

  const dtitle = 'Mapping QC'
  const dbtitle = 'Mapping QC'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])


  let arr = []

  const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli",
    "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]

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


  function select() {
    console.log("Select Function")
  }

  function show() {
    console.log("Show Function")
  }

  function exportResult() {
    console.log("Export Function")
  }

  function clearAll() {
    console.log("Clear Function")
  }

  function exitAll() {
    console.log("Exit Function")
  }

  return (
    <>
      <Header title="Mapping QC" btitle="Mapping QC" disp="none" />
      <div className="container-fluid mt--9">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="pt-3 pl-5 m-0">
                <div className="form-group row mr-4">
                  <button className="btn btn-sm col-sm-1 text-white btn-primary" onClick={() => select()}><BiIcon.BiSelectMultiple />&nbsp;Select</button>
                  <button className="btn btn-sm col-sm-1 text-white bg-info" onClick={() => show()}><BiIcon.BiShow />&nbsp;Show</button>
                  <button className="btn btn-sm col-sm-1 text-white bg-success" onClick={() => exportResult()}><RiIcon.RiFileExcel2Fill />&nbsp;Export</button>
                  <button className="btn btn-sm col-sm-1 bg-yellow" onClick={() => clearAll()}><VscIcon.VscClearAll />&nbsp;Clear</button>
                  <button className="btn btn-sm col-sm-1 btn-danger" onClick={() => exitAll()}><BiIcon.BiExit /> &nbsp;Exit</button>
                </div>
              </div>
              <div className="m-2 card p-3 text-white bg-primary">
                <div className="row">
                  {/* Other Form */}
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-5">
                        <label htmlFor="username">User Name:&emsp;</label>
                        <input type="text" className="form-control-sm" id="username" defaultValue="All" />
                      </div>
                      <div className="col-md-7">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                          <label class="form-check-label" style={{ cursor: "pointer" }} for="flexRadioDefault1">
                            Mapped Date
                          </label>
                          &emsp;&emsp;&emsp;&emsp;
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label class="form-check-label" style={{ cursor: "pointer" }} for="flexRadioDefault2">
                            SKU
                          </label>
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                          <label htmlFor="allStates" className="text-white"><input type="checkbox" name="checkbox" onChange={() => { allStates() }} id="allStates" value="1" />&nbsp;Select All</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <label htmlFor="username">Mapped from date:&emsp;</label>
                        <input type="date" className="form-control-sm" id="username" />
                        <label htmlFor="username">&emsp;To:&emsp;</label>
                        <input type="date" className="form-control-sm" id="username" />
                      </div>
                    </div>
                    <div className="">
                      <div className="row">
                        <div className="col-md text-dark card pt-3 m-3">
                          <div className="row">
                            <div className="col-md-9 border-right">
                              <h4>Mapping Type:</h4>
                              <div className="form-group">
                                <label htmlFor="mappingType">Type:&nbsp;
                                  <select id="mappingType" className="form-control-sm">
                                    <option>Select</option>
                                    <option>Company Delivery</option>
                                    <option>Panel Stockist Only</option>
                                    <option>Distributor Wise</option>
                                    <option>Optistox</option>
                                    <option>Division Linkage</option>
                                    <option>Samrt & FairShare</option>
                                  </select>
                                </label>
                                &emsp;&emsp;
                                <label htmlFor="selection">Selection:&nbsp;</label>
                                <input type="text" className="form-control-sm" id="selection" name="selection" />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label htmlFor="verified">Verified: &emsp;</label>
                                <select className="form-control-sm" id="verified">
                                  <option>Both</option>
                                </select>
                                <label htmlFor="qctype">QC Type: &emsp;</label>
                                <select className="form-control-sm" id="qctype">
                                  <option>Both</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* States  161px*/}
                  <div className="col-md-4">
                    <form>
                      <div className="card p-0 m-0" >
                        <ul className="list mt-2 text-dark" style={{ height: "24vh", overflow: "hidden", overflowY: "scroll" }}>
                          {states.map((state, index) => {
                            return (
                              <li className="p-0 m-0" key={index}>
                                <label htmlFor="othersToMap"><input type="checkbox" onClick={(e) => { handleCheck(e); checkAllSelected() }} name="checkbox" className="states" id={"states" + index} value={state} />&nbsp;{state}</label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-3">
              <Table bordered responsive size="sm">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Stockist Code</th>
                    <th>Stk. Short Code</th>
                    <th>Stk. Product Name</th>
                    <th>Stk. Manufacturer</th>
                    <th>Stk. Column Search</th>
                    <th>Stk. PTR</th>
                    <th>Awacs code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stockist Code</td>
                    <td>Stk. Short Code</td>
                    <td>Stk. Product Name</td>
                    <td>Stk. Manufacturer</td>
                    <td>Stk. Column Search</td>
                    <td>Stk. PTR</td>
                    <td>Awacs code</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const titleStateToProp = (state) => {
  return {
    title: state.title,
    btitle: state.btitle
  }
}

const titleDispatch = (dispatch) => {
  return {
    setTitle: (dtitle, dbtitle) =>
      dispatch({ type: 'TITLE', title: dtitle, btitle: dbtitle }),
  }
}


export default connect(titleStateToProp, titleDispatch)(MappingQC);
