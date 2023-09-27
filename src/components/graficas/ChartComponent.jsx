import { BarChart2, LineChartIcon, PieChartIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Label,
  ResponsiveContainer,
} from "recharts";
import { getDataMes, ordenarPorMes } from "../../assets/adminData";

export const data = [
  { name: "Enero", ventas: 4000, gastos: 2400 },
  { name: "Febrero", ventas: 3000, gastos: 1398 },
  { name: "Marzo", ventas: 2000, gastos: 9800 },
  { name: "Abril", ventas: 2780, gastos: 3908 },
  { name: "Mayo", ventas: 1890, gastos: 4800 },
  { name: "Junio", ventas: 1890, gastos: 4800 },
  { name: "Julio", ventas: 1890, gastos: 4800 },
];

const ChartComponent = ({ mes, qtyChart,estFinData }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [chartType, setChartType] = useState("bar");

  const COLORS = ["#0575ae", "#90aa74"];

  const dataNueva = estFinData?.map(data=>{
    return{name:data.month,ventas:data.ventas,gastos:data.gastos}
  })

  const dataOrdenada = ordenarPorMes(dataNueva)


  const datosEnero = getDataMes(dataOrdenada,mes);

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={mes ? datosEnero : dataOrdenada}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="ventas"
              fill={COLORS[0]}
              name="Ventas"
              label={{ position: "top" }}
              activeFill="transparent"
            >
              {dataOrdenada?.ventas?.map((entry, index) => (
                <Cell key={`ventas-cell-${index}`} fill={COLORS[0]} />
              ))}
            </Bar>
            <Bar
              dataKey="gastos"
              fill={COLORS[1]}
              name="Gastos"
              label={{ position: "top" }}
              activeFill="transparent"
            >
              {dataOrdenada?.gastos?.map((entry, index) => (
                <Cell key={`gastos-cell-${index}`} fill={COLORS[1]} />
              ))}
            </Bar>
            <Tooltip />
          </BarChart>
        );
      case "line":
        return (
          <LineChart data={mes ? datosEnero : dataOrdenada}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line
              type="monotone"
              dataKey="ventas"
              stroke={COLORS[0]}
              name="Ventas"
            />
            <Line
              type="monotone"
              dataKey="gastos"
              stroke={COLORS[1]}
              name="Gastos"
            />
            <Tooltip />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between">
        <h2
          className={` ${mes ? "text-2xl" : "text-4xl"} text-white font-bold`}
        >
          {mes ? `Grafica del Mes: ${mes.toUpperCase()}` : "Grafica Anual"}{" "}
        </h2>
        <ul className="bg-white rounded-lg overflow-hidden flex items-center gap-3">
          <button
            className={`p-2 cursor-pointer ${
              chartType == "bar" && "bg-LogoBlue"
            } hover:bg-LogoBlue group`}
            onClick={() => setChartType("bar")}
          >
            <BarChart2
              className={`${
                chartType == "bar" && "text-white"
              } group-hover:text-white`}
            />
          </button>
          {qtyChart != 1 && (
            <button
              className={`p-2 cursor-pointer ${
                chartType == "line" && "bg-LogoBlue"
              } hover:bg-LogoBlue group`}
              onClick={() => setChartType("line")}
            >
              <LineChartIcon
                className={`${
                  chartType == "line" && "text-white"
                } group-hover:text-white`}
              />
            </button>
          )}
        </ul>
      </div>

      <div className="w-full h-full p-4 flex items-center justify-center bg-white rounded-md mt-5">
        <ResponsiveContainer width="100%" height={windowHeight / 2.5}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;
