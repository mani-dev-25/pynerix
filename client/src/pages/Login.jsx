import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      login(res.data);
      navigate("/");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In to Pynerix</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="btn-primary">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")} className="link">
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;