import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './MappingCorrection.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import * as BiIcon from 'react-icons/bi';
import * as VscIcon from 'react-icons/vsc';
import * as MdIcon from 'react-icons/md';
function MappingCorrection(props) {

  const dtitle = 'Mapping Correction'
  const dbtitle = 'Mapping Correction'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])

  function next() {
    console.log("Next Function")
  }

  function update() {
    console.log("Update Function")
  }

  function clearAll() {
    console.log("Clear Function")
  }

  function exitAll() {
    console.log("Exit Function")
  }

  return (
    <>
      <Header title="Mapping Correction" btitle="Mapping Correction" disp="none" />
      <div className="container-fluid mt--9">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <div className="form-group row mr-4">
                  <button className="btn btn-sm col-1 text-white btn-primary" onClick={() => next()}><MdIcon.MdNavigateNext />&nbsp;Next</button>
                  <button className="btn btn-sm col-1 text-white bg-info disabled" onClick={() => update()} ><BiIcon.BiCloudUpload />&nbsp;Update</button>
                  <button className="btn btn-sm col-1 bg-yellow" onClick={() => clearAll()}><VscIcon.VscClearAll />&nbsp;Clear</button>
                  <button className="btn btn-sm col-1 btn-danger" onClick={() => exitAll()}><BiIcon.BiExit /> &nbsp;Exit</button>
                  <div className="col offset-2">
                    <label>Select File:&emsp;</label>
                    <input type="file" className="form-control-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-3">
              <Table bordered responsive>
                <thead className="bg-dark text-white">
                  <tr>
                    <th>DISTRIBUTOR_SHORTCODE</th>
                    <th>SEARCHCOLUMN</th>
                    <th>ITEM_CODE</th>
                    <th>UNITS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DISTRIBUTOR_SHORTCODE</td>
                    <td>SEARCHCOLUMN</td>
                    <td>ITEM_CODE</td>
                    <td>UNITS</td>
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

export default connect(titleStateToProp, titleDispatch)(MappingCorrection);
