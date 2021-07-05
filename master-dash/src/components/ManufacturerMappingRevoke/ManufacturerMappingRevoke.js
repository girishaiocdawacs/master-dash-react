import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './ManufacturerMappingRevoke.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import * as BiIcon from 'react-icons/bi';
import * as VscIcon from 'react-icons/vsc';
import * as RiIcon from 'react-icons/ri';

function ManufacturerMappingRevoke(props) {

  const dtitle = 'Manufacturer Mapping Revoke'
  const dbtitle = 'Manufacturer Mapping Revoke'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])

  function select() {
    console.log("Select Function")
  }

  function revoke() {
    console.log("Revoke Function")
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
      <Header title="Manufacturer Mapping Revoke" btitle="Manufacturer Mapping Revoke" disp="none" />
      <div className="container-fluid mt--8">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <div className="form-group row mr-4">
                  <button className="btn btn-sm col-1 text-white btn-primary" onClick={() => select()}><BiIcon.BiSelectMultiple />&nbsp;Select</button>
                  <button className="btn btn-sm col-1 text-white bg-info" onClick={() => revoke()}><BiIcon.BiRevision />&nbsp;Revoke</button>
                  <button className="btn btn-sm col-1 text-white bg-success" onClick={() => exportResult()}><RiIcon.RiFileExcel2Fill />&nbsp;Export</button>
                  <button className="btn btn-sm col-1 bg-yellow" onClick={() => clearAll()}><VscIcon.VscClearAll />&nbsp;Clear</button>
                  <button className="btn btn-sm col-1 btn-danger" onClick={() => exitAll()}><BiIcon.BiExit /> &nbsp;Exit</button>
                </div>
                <div className="row mr-5 ">
                  <div className="col-lg-4 text-left"><label>Stockist: </label>&emsp;
                    <input type="text" className="form-control-sm" size="33" placeholder="Stockist Code" /></div>
                  <div className="col p-0 m-0">
                    <input type="text" className="form-control-sm" size="74" placeholder="Stockist Name" disabled /></div>
                </div>
                <div className="row mr-5 p-1">
                  <label>Manufacturer: </label>&emsp;
                  <input type="text" className="form-control-sm" size="112" placeholder="Stockist Code" />&emsp;&emsp;
                </div>
                <hr className="p-0 m-1" />
                <div className="row mr-5 p-1">
                  <h3 className="col-md-1">Filter:</h3>
                  <div className="col-md-5"><label>Stockist: </label>&emsp;
                    <input type="text" className="form-control-sm" size="40" placeholder="Stockist Code" />&emsp;&emsp;</div>
                  <div className="col-md-5"><label>Manufacturer: </label>&emsp;
                    <input type="text" className="form-control-sm" size="40" placeholder="Stockist Name" /></div>
                </div>
              </div>
            </div>
            <div className="card p-3">
              <Table responsive size="sm">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Sno</th>
                    <th>Stockist Manufacturer Name</th>
                    <th>Master Manufacturer</th>
                    <th>Select All</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sno</td>
                    <td>Stockist Manufacturer Name</td>
                    <td>Master Manufacturer</td>
                    <td>Select All</td>
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


export default connect(titleStateToProp, titleDispatch)(ManufacturerMappingRevoke);
