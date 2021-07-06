import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './ListOfMappedItems.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function ListOfMappedItems(props) {

  const dtitle = 'List of Mapped Items'
  const dbtitle = 'List of Mapped Items'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])

  return (
    <>
      <Header title="List of Mapped Items" btitle="List of Mapped Items" disp="none" />
      <div className="container-fluid mt--8">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <h1>View Report - List of Mapped Items</h1>
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


export default connect(titleStateToProp, titleDispatch)(ListOfMappedItems);
