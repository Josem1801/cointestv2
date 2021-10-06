import "./customTooltip.css";
import React from "react";
import { ResponsiveContainer, AreaChart, YAxis, Area, Tooltip } from "recharts";
function CreateChart({ data }) {
  return (
    <div>
      <ResponsiveContainer
        className="chart__container"
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ffffff"
            fill="#0093e9"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CreateChart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="date">{payload[0].payload.date.replace(/-/g, "/")}</p>
        <p className="title">
          Price : <span>${payload[0].value.toFixed(8)}</span>
        </p>
      </div>
    );
  }

  return null;
};
