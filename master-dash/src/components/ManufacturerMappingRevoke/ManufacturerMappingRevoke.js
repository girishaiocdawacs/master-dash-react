import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './ManufacturerMappingRevoke.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function ManufacturerMappingRevoke(props) {

  const dtitle = 'Manufacturer Mapping Revoke'
const dbtitle = 'Manufacturer Mapping Revoke'

useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])

  return (
    <>
      <Header title="Manufacturer Mapping Revoke" btitle="Manufacturer Mapping Revoke" disp="none" />
      <div className="container-fluid mt--8">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <h1>View Report</h1>
              </div>
              <div className="card-body">

              </div>
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
