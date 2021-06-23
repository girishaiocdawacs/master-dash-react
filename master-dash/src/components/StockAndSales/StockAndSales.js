import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './StockAndSales.css';
import Header from '../Header/Header';
import { useState } from 'react';

function StockAndSales(props) {

  const [crDate, setCrDate] = useState('')
  const [stkCode, setStkCode] = useState('')

  async function getData(){
    console.log(crDate, stkCode)

  }

  return (
    <div>
      <Header title="Stock and Sales" btitle="Stock and Sales" disp="none" />
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-5 m-0">
                <h1>View Report</h1>
              </div>
              <div className="card-body">
                <div className="container card bg-white shadow  p-3">
                  <div className="h4">Filter:</div>
                  <form className="row">
                    <div className="form-group col">
                      <label for="crDate">Creatiion Date</label>
                      <input type="date" className="form-control" onChange={(e) => setCrDate(e.target.value)} id="crDate" name="crDate" />
                    </div>
                    <div className="form-group col">
                      <label for="stkCode">Stockist Code</label>
                      <input type="text" className="form-control" onChange={(e) => setStkCode(e.target.value)} id="stkCode" name="stkCode" placeholder="Enter Stockist Code" />
                    </div>
                    <div className="form-group col">
                    <label for="stkCode" style={{color:"white"}} > _</label><br/>

                      <button type="button" onClick={() => {getData()}} className="btn btn-primary">Show Data</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockAndSales;
