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
  ResponsiveContainer,
} from "recharts";
import { ConvertMonth, calcularSumasAnuales, calcularSumasMensuales, calcularSumasSemanas } from "../../utils/funcs";
import data from "../../utils/dataPrueba";

const COLORS = ["#0575ae", "#90aa74"];

const ChartComponent = ({ mes, qtyChart }) => {
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
  //ORDENAR POR MES
  ConvertMonth(mes)

  const filtrarPorParametro = (filter) => {
    if (filter === "weekly") {
      const groupedData = calcularSumasSemanas(data);

      return groupedData;
    } else if (filter === "monthly") {
      const groupedData = calcularSumasMensuales(data);

      return groupedData;
    } else if (filter === "yearly") {
      const groupedData = calcularSumasAnuales(data);
      return groupedData;
    } else {
      return data;
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={filtrarPorParametro(mes)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="ventas"
              fill={COLORS[0]}
              name="Ventas"
              label={{ position: "top" }}
              activeFill="transparent"
            >
              {data?.ventas?.map((entry, index) => (
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
              {data?.gastos?.map((entry, index) => (
                <Cell key={`gastos-cell-${index}`} fill={COLORS[1]} />
              ))}
            </Bar>
            <Tooltip />
          </BarChart>
        );
      case "line":
        return (
          <LineChart data={filtrarPorParametro(mes)}>
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
          {mes ? `Grafica: ${ConvertMonth()}` : "Grafica Anual"}{" "}
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
