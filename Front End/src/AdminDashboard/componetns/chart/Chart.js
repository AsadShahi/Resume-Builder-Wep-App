import React, { useEffect, useState } from "react";

import axios from "axios";
import "./chart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  const [user, setUser] = useState([]);

  let xAxisData = [
    {
      name: "Jan",
      Sale: 112_000,
    },
    {
      name: "Feb",
      Sale: 99_000,
    },
    {
      name: "Mar",
      Sale: 12_090,
    },
    {
      name: "Apr",
      Sale: 99_000,
    },
    {
      name: "May",
      Sale: 54_000,
    },
    {
      name: "Jun",
      Sale: 85_000,
    },
    {
      name: "Jul",
      Sale: 34_000,
    },
    {
      name: "Agu",
      Sale: 18_598,
    },
    {
      name: "Sep",
      Sale: 0,
    },
    {
      name: "Oct",
      Sale: 73_078,
    },
    {
      name: "Nov",
      Sale: 12_900,
    },
    {
      name: "Dev",
      Sale: 97_000,
    },
  ];
  user.map((user) => <></>);
  useEffect(() => {
    axios.get("http://localhost:8000/api/admin/user-list").then((res) => {
      // console.log(res)
      setUser(res.data.users);
    });
  }, []);

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          {user.map((user) => (
            <>
              <XAxis dataKey={user.id} stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
            </>
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
