import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Build Powerful Web Apps with Pynerix</h1>
        <p>
          We design and develop modern, fast, and secure web applications 
          for startups, shops, and businesses.
        </p>

        <div className="hero-buttons">
          <Link to="/pricing" className="btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn-outline">
            Sign In
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Modern UI</h3>
          <p>Clean Google & Netflix style interface.</p>
        </div>

        <div className="feature-card">
          <h3>Secure Backend</h3>
          <p>JWT authentication & protected APIs.</p>
        </div>

        <div className="feature-card">
          <h3>Admin Dashboard</h3>
          <p>Manage orders, payments & customers easily.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;