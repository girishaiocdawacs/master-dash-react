import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import Home from '../Home/Home';
import SideNav from '../SideNav/SideNav';
import './Dashboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashNav from '../DashNav/DashNav';
import StockAndSales from '../StockAndSales/StockAndSales';
import NotFound from '../NotFound/NotFound';
import ZZ from '../ZZ/ZZ'
import AddScreen from '../AddScreen/AddScreen';
import ItemMapping from '../ItemMapping/ItemMapping';
// import ItemMappingUnfreeze from '../ItemMappingUnfreeze/ItemMappingUnfreeze';
import DivisionWiseMapping from '../DivisionWiseMapping/DivisionWiseMapping';
import ManufacturerMappingRevoke from '../ManufacturerMappingRevoke/ManufacturerMappingRevoke';
import NewProductMapping from '../NewProductMapping/NewProductMapping';
import MergingAndForceShifted from '../MergingAndForceShifted/MergingAndForceShifted';
import MappingCorrection from '../MappingCorrection/MappingCorrection';
import React from 'react';


function Dashboard() {

  return (
    <>
      <Router>
        <SideNav />
        <div className="main-content " id="panel">
          <DashNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/zz" component={ZZ} />
            <Route path="/stockandsales" component={StockAndSales} />
            <Route path="/itemmapping" component={ItemMapping} />
            <Route path="/addscreen" component={AddScreen} />
            {/* <Route path="/itemmappingunfreeze" component={ItemMappingUnfreeze} /> */}
            <Route path="/divisionwisemapping" component={DivisionWiseMapping} />
            <Route path="/manufacturermappingrevoke" component={ManufacturerMappingRevoke} />
            <Route path="/newproductmapping" component={NewProductMapping} />
            <Route path="/mergingandforceshifted" component={MergingAndForceShifted} />
            <Route path="/mappingcorrection" component={MappingCorrection} />
            <Route path="/zz" component={ZZ} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Dashboard;
