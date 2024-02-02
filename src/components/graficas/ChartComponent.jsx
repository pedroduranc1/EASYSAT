import { BarChart2, ChevronDown, LineChartIcon, PieChartIcon, Plus } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

const COLORS = ["#0575ae", "#90aa74"];

const upperFirtsLetter = (frase) => {
  return frase
    .split(' ')
    .map((palabra) => upperFirtsLetter(palabra))
    .join(' ');
}

const ChartComponent = ({ qtyChart, data }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [mes, setmes] = useState("monthly")
  const [Year, setYear] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    filtrarPorParametro(mes)
  }, [mes])

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
      const groupedData = calcularSumasMensuales(data);

      return groupedData;
    }
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={filtrarPorParametro(mes)}>
            <XAxis dataKey={mes === "monthly" ? "mes" : mes === "yearly" ? "year" : "rangoSemana"} tick={{ interval: 0 }} tickFormatter={(value) => value}>
              {mes === 'ano' && <XAxis dataKey="mes" tickFormatter={(value) => value} />}
              {mes === 'semana' && <XAxis dataKey="rangoSemana" tickFormatter={(value) => value} />}
            </XAxis>
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
            <XAxis dataKey={mes === "monthly" ? "mes" : mes === "yearly" ? "year" : "rangoSemana"} tick={{ interval: 0 }} tickFormatter={(value) => value}>
              {mes === 'ano' && <XAxis dataKey="mes" tickFormatter={(value) => value} />}
              {mes === 'semana' && <XAxis dataKey="rangoSemana" tickFormatter={(value) => value} />}
            </XAxis>
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
    <div className="w-full flex flex-col">
      <div className="flex justify-between">
        <div className="flex ml-[5%] gap-x-5">
          <div className="flex gap-x-2 justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-LogoBlue"></div>
            <h2>Ingresos</h2>
          </div>

          <div className="flex gap-x-2 justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-LogoGreen"></div>
            <h2>Gastos</h2>
          </div>


        </div>


        <ul className="bg-white rounded-lg overflow-hidden flex items-center gap-3">
          <DropdownMenu key={2}>
            <DropdownMenuTrigger className="flex items-center gap-x-3">{Year ? Year : "Anual"} <ChevronDown className="w-4 h-4"/></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>setYear("2022")}>2022</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setYear("2023")}>2023</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setYear("2024")}>2024</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </div>

      <div className="w-full h-full px-4 flex items-center justify-center bg-white rounded-md mt-5">
        <ResponsiveContainer width="100%" height={windowHeight / 2.3}>
          {renderChart()}
        </ResponsiveContainer>
      </div>

      <div className="w-full flex justify-end  rounded-md">
        <DropdownMenu key={2}>
          <DropdownMenuTrigger><button className="w-7 h-7 rounded-full flex justify-center items-center bg-blue-500"><Plus className="text-white" /></button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setChartType("bar")}>Barras</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setChartType("line")}>Linea</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ChartComponent;
