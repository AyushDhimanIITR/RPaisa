import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [amount, setamount] = useState("");
  const jwttoken = window.localStorage.token;
    console.log(jwttoken)
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:4000/dashboard/", {
        method: "GET",
        headers: { token: jwttoken }
      });

      const parseData = await res.json();
      setName(parseData.name);
      setamount(parseData.amount);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      window.location.assign("/login");
    //   toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1 className="mt-5">Dashboard</h1>
      <h2>Welcome {name}</h2>
      <h4> You have Rs. {amount} in your wallet.</h4>
      <button onClick={e => logout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;