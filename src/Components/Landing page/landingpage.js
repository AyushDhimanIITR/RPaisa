import './landingpage.css';
import { Button } from '@mui/material';
function LandingPage() {
  return (
    <div className="main">
      <section class="min-vh-100 d-flex align-items-center text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-uppercase fw-semibold display-1">Welcome to R-Paisa!</h1>
              <h5 class="mt-3 mb-4">Simple way to transfer money and manage your expenses.</h5>
              <a href="#" class="btn btn-outline-light mt-3">Get Started</a>
              <p id="sign-in-link">Already an user? <a href="#">Sign in.</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
