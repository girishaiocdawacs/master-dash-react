import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './UBUMFRMapping.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import * as BiIcon from 'react-icons/bi';
import * as VscIcon from 'react-icons/vsc';
import StockistItem from './StockistItem';
import ManufacturerMapping from './ManufacturerMapping';

function UBUMFRMapping(props) {

  const dtitle = 'UBU (MFR) Mapping'
  const dbtitle = 'UBU (MFR) Mapping'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])

  const [key, setKey] = useState('DivisionMapping');

  function loadNew() {
    console.log("Load New Function")
  }

  function clearAll() {
    console.log("Clear Function")
  }

  function search() {
    console.log("Search Function")
  }

  function exitAll() {
    console.log("Exit Function")
  }

  return (
    <>
      <Header title="UBU (MFR) Mapping" btitle="UBU (MFR) Mapping" disp="none" />
      <div className="container-fluid mt--9">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title col-8 pt-3 pl-5 m-0">
                <div className="form-group row mr-4">
                  <button className="btn btn-sm col-sm-2 text-white btn-primary" onClick={() => loadNew()}><i className="ni ni-cloud-download-95"></i>&nbsp;Load New</button>
                  <button className="btn btn-sm col-sm-2 bg-yellow" onClick={() => clearAll()}><VscIcon.VscClearAll />&nbsp;Clear</button>
                  <button className="btn btn-sm col-sm-2 btn-danger" onClick={() => exitAll()}><BiIcon.BiExit /> &nbsp;Exit</button>
                  <button className="btn btn-sm col-sm-2 text-white bg-green" onClick={() => search()}><BiIcon.BiExit /> &nbsp;Search</button>
                </div>
              </div>
            </div>
            <div className="card p-3">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="DivisionMapping" title="Division Mapping">
                  <ManufacturerMapping />
                </Tab>
                <Tab eventKey="Stockist Item" title="Stockist Item">
                  <StockistItem />
                </Tab>
              </Tabs>
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


export default connect(titleStateToProp, titleDispatch)(UBUMFRMapping);
