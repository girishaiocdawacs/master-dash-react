import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

function Footer() {
  return (
    <div className="bg-default text-white text-center">
      <p>Copyrights 2021 &copy; &nbsp;<span className="footer-link" onClick={()=> window.open("https://aiocdawacs.com", "_blank")}>AIOCD AWACS Pharmasofttech Pvt. Ltd.</span></p>
    </div>
  );
}

export default Footer;
