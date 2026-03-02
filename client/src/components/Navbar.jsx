import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Pynerix</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>

        {user ? (
          <>
            {user.role === "admin" && <Link to="/admin">Admin</Link>}
            <button onClick={logout} className="btn-outline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/register" className="btn-primary">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;