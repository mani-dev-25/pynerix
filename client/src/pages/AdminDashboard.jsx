import { useEffect, useState } from "react";
import API from "../api";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  const confirmPayment = async (id) => {
    await API.put(`/orders/confirm/${id}`);
    alert("Payment Confirmed!");
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="page">
      <h1>Admin Orders</h1>

      {orders.map((order) => (
        <div className="card" key={order._id}>
          <h3>{order.title}</h3>
          <p>{order.description}</p>
          <p>₹{order.amount}</p>
          <p>Status: {order.isPaid ? "Paid" : "Pending"}</p>

          {!order.isPaid && (
            <button
              className="btn-primary"
              onClick={() => confirmPayment(order._id)}
            >
              Confirm Payment
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;