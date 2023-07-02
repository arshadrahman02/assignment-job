import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Link, NavLink } from "react-router-dom";

const data = [
  {
    name: "Assignment Num 1",
    uv: 60,
    num: 58,
    amt: 60,
  },
  {
    name: "Assignment Num 2",
    uv: 60,
    num: 58,
    amt: 60,
  },
  {
    name: "Assignment Num 3",
    uv: 60,
    num: 55,
    amt: 60,
  },
  {
    name: "Assignment Num 4",
    uv: 60,
    num: 60,
    amt: 60,
  },
  {
    name: "Assignment Num 5",
    uv: 60,
    num: 55,
    amt: 60,
  },
  {
    name: "Assignment Num 6",
    uv: 60,
    num: 52,
    amt: 60,
  },
  {
    name: "Assignment Num 7",
    uv: 60,
    num: 58,
    amt: 60,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

  render() {
    return (
      <div>
        <p className="text-center font-bold text-2xl mt-10">
          Assignment Marks Chart
        </p>
        <div className="absolute  left-40 mt-28">
          <AreaChart
            width={1200}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="num"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    );
  }
}
