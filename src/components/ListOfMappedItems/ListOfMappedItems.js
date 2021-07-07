import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './ListOfMappedItems.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as BiIcon from 'react-icons/bi';
import * as VscIcon from 'react-icons/vsc';
import * as RiIcon from 'react-icons/ri';

function ListOfMappedItems(props) {

  const dtitle = 'List of Mapped Items'
  const dbtitle = 'List of Mapped Items'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])


  function showAll() {
    console.log("Show All Function")
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
      <Header title="List of Mapped Items" btitle="List of Mapped Items" disp="none" />
      <div className="container-fluid mt--9">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="pt-3 pl-5 m-0">
                <div className="form-group row mr-4">
                  <button className="btn btn-sm col-sm-1 text-white bg-info" onClick={() => showAll()}><BiIcon.BiShow />&nbsp;Show All</button>
                  <button className="btn btn-sm col-sm-1 text-white bg-success" onClick={() => exportResult()}><RiIcon.RiFileExcel2Fill />&nbsp;Export</button>
                  <button className="btn btn-sm col-sm-1 bg-yellow" onClick={() => clearAll()}><VscIcon.VscClearAll />&nbsp;Clear</button>
                  <button className="btn btn-sm col-sm-1 btn-danger" onClick={() => exitAll()}><BiIcon.BiExit /> &nbsp;Exit</button>
                </div>
              </div>
              <div className="m-2 card p-3 text-white bg-primary">
                <div className="row">
                  {/* Other Form */}
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="username">Product Table:&emsp;</label>
                        <input type="text" className="form-control-sm" id="username" defaultValue="All" />
                      </div>
                      <div className="col-md-7">
                        <label htmlFor="username">Mapped from date:&emsp;</label>
                        <input type="date" className="form-control-sm" id="username" />
                        <label htmlFor="username">&emsp;To:&emsp;</label>
                        <input type="date" className="form-control-sm" id="username" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-3">

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


export default connect(titleStateToProp, titleDispatch)(ListOfMappedItems);
