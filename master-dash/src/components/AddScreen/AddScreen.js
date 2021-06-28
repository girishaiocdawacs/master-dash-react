import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './AddScreen.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

function AddScreen() {

  const [filterName, setFilterName] = useState('')
  const [filters, setFilters] = useState([])
  const [reload, setReload] = useState(0)



  function addFilter() {
    filters.push(filterName)
    document.getElementById('filterName').value = ''
    setFilterName('')
  }

  function updateEle(index) {
    let val = document.getElementById('filter' + index).value
    filters[index] = val
    setFilterName('')
    setFilters(filters)
    console.log("Updated:", filters)
    setReload(reload + 1)
  }

  function deleteEle(index) {
    filters.splice(index, 1)
    console.log("Deleted:", filters)
    setFilterName('')
    setFilters(filters)
    setFilterName('')
    setReload(reload + 1)
  }

  return (
    <>
      <Header title="Add Screen" btitle="Add Screen" disp="none" />
      <div className="container-fluid mt--8">
        <div className="row">
          <div className="col-xl col-md">
            <div className="card">
              <div className="card-title pt-3 pl-3 m-0">
                <h1>Enter details:</h1>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="form-group col-3">
                      <label for="filterName">Filter Columns:<br />
                        {filters.map((item, index) => {
                          return (
                            <>
                              <Alert key={index} className="bg-light-green m-0 mt-1 p-1">
                                <p style={{ display: "none" }}>{reload}</p>
                                <input className="form-control-sm border-0" key={index} id={"filter" + index} defaultValue={item} />
                                &nbsp;<button type="button" onClick={() => { updateEle(index) }} className="btn btn-sm btn-success">✔</button>
                                <button type="button" onClick={() => { deleteEle(index) }} className="btn btn-sm btn-danger">✘</button>
                              </Alert>

                            </>
                          );
                        })}</label>
                      <input type="text" className="form-control" onChange={(e) => { setFilterName(e.target.value) }} min="1" id="filterName" name="filterName" placeholder="Eg. StockistCode" />
                    </div>
                    <div className="form-group col2">
                      <label className="text-white">_</label><br />
                      <button type="button" className="btn btn-primary" onClick={() => { addFilter() }}>Add</button>
                    </div>
                  </div>
                </form>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <button type="button" style={{ display: "flex", justifyContent: "right" }} className="btn btn-success">Request Screen</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddScreen;
