import './landingpage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="main">
      <section class="min-vh-100 d-flex align-items-center text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-uppercase fw-semibold display-1">Welcome to R-Paisa!</h1>
              <h5 class="mt-3 mb-4">Simple way to transfer money and manage your expenses.</h5>
              <Link to='/register'>
                <a class="btn btn-outline-light mt-3">Get Started</a>
              </Link>

              <p id="sign-in-link">Already an user? <Link to='/login'>Sign in.</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
