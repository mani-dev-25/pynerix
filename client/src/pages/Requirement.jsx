import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api";

function Requirement() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const amount = state?.price;

  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button Clicked");  // 👈 ADD THIS

    try {
      const res = await API.post("/orders", {
        ...form,
        amount
      });

      console.log("Response:", res.data);

      navigate("/payment", {
        state: {
          upiLink: res.data.upiLink
        }
      });
    } catch (err) {
      console.error("ERROR:", err);
    }
  };
  return (
    <div className="req-wrapper">
      <div className="req-card">
        <h2>Tell Us About Your Project</h2>
        <p className="req-sub">
          Fill in your website requirements below
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              required
              placeholder=" "
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />
            <label>Project Title</label>
          </div>

          <div className="input-group">
            <textarea
              required
              rows="4"
              placeholder=" "
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            ></textarea>
            <label>Project Description</label>
          </div>

          <button className="btn-primary">
            Continue to Payment (₹{amount})
          </button>

        </form>
      </div>
    </div>
  );
}

export default Requirement;