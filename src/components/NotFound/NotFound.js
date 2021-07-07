import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './NotFound.css';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function NotFound(props) {

  const dtitle = 'Page Not Found'
  const dbtitle = 'Page Not Found'

  useEffect(() => {
    props.setTitle(dtitle, dbtitle)
  }, [dtitle, dbtitle, props])

  return (
    <>
      <Header title="NotFound" btitle="NotFound" disp="none" />
      <div className="container-fluid mt--9">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card p-3 row">
              <div className="row p-2">
                <div className="col-7 p-5">
                <h1>Page not found or Under construction!</h1>
                <h4>{"->"}&nbsp;Try contacting IT-Support Team!</h4>
                </div>
                <div className="col">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_TCUI9w/thumbs_down.json" background="transparent" speed="1" style={{ width: "200px", height: "200px" }} loop autoplay ></lottie-player>
                </div>
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


export default connect(titleStateToProp, titleDispatch)(NotFound);
