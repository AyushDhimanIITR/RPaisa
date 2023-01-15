import './dashboard.css';

import Stack from "@mui/material/Stack";
import Name from '../Name/Name';
import Card from '../Card/Card';
import Options from '../Options/Options';
import RecentActivity from '../RecentActivity/RecentActivity';
import Activity from '../Activity/Activity';
import React, { useEffect, useState } from "react";
import Cardimg from "./MyCreditCard.svg";
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
    <div className="overall">
                <div className="userName">
                    <Name name = {name}/>
                </div>
                <Stack spacing={80} direction="row">
                <div className='contain'>
                    <div className="TokenCard">
                        <img src = {Cardimg}/>
                    </div>
                    <div className="Services">
                        <Options />
                    </div>
                    </div>
                </Stack>
                <div className="YourActivity">
                    <RecentActivity />
                </div>
                <div className="activity">
                    <Activity amount = {amount} />
                </div>
            </div>
            </div>
        );
};

export default Dashboard;