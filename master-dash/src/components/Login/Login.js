import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './Login.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  // const [redirect, setRedirect] = useState(false)

  function login() {
    if (pass === '' || email === '') {
      alert("Username Or Password cannot be blank!")
    }
    else {
      sessionStorage.setItem("userLogin", email)
      //(true)
      window.location.assign("/")
    }
  }
  // if (redirect == true) {
  //   return (<Redirect to="/" />)
  // }
  // else {
    return (
      <div className="bg-default m-0 p-0 text-center">
        <div className="header bg-gradient-primary py-5 py-lg-6 pt-lg-7">
          <h1>Welcome to Master Data Dashboard</h1>
          <h4 className="text-light">Please move ahead to login In!</h4>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        <div>
          <Row className="text-light">
            <br />
            <Col></Col>
            <Col>
              <div className="card mt--5 pb-5">
                <div className="text-muted text-center mt-2 mb-3">Sign in with</div>
                <div className="card-body text-left">
                  <Form>
                    <Form.Group>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" id="pass" onChange={(e) => { setPass(e.target.value) }} placeholder="Password" />
                    </Form.Group>
                    <div className="text-center">
                      <Button variant="primary" onClick={() => login()} type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    );
  }
// }
export default Login;
