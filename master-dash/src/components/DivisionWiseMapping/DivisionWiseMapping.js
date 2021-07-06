import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './DivisionWiseMapping.css';
import Header from '../Header/Header';
import * as BiIcon from 'react-icons/bi';
import * as VscIcon from 'react-icons/vsc';
import { Tab, Tabs } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import DivisionMapping from './DivisionMapping';
import StockistItem from './StockistItem';
import { connect } from 'react-redux';

function DivisionWiseMapping(props) {

  const dtitle = 'Division Wise Mapping'
const dbtitle = 'Division Wise Mapping'

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

  function exitAll() {
    console.log("Exit Function")
  }

  return (
    <>
      <Header title="Division Wise Mapping" btitle="Division Wise Mapping" disp="none" />
      <div className="container-fluid mt--8">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <div className="form-group row mr-4">
                  <button className="btn btn-sm col-1 text-white btn-primary" onClick={() => loadNew()}><i className="ni ni-cloud-download-95"></i>&nbsp;Load New</button>
                  <button className="btn btn-sm col-1 bg-yellow" onClick={() => clearAll()}><VscIcon.VscClearAll />&nbsp;Clear</button>
                  <button className="btn btn-sm col-1 btn-danger" onClick={() => exitAll()}><BiIcon.BiExit /> &nbsp;Exit</button>
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
                  <DivisionMapping />
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
  
  
export default connect(titleStateToProp, titleDispatch)(DivisionWiseMapping);
