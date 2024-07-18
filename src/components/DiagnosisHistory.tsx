import { FC, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DiagnosisHistoryItem } from "../types";
import lungs from "../images/respiratory-rate.svg";
import temp from "../images/temperature.svg";
import heart from "../images/HeartBPM.svg";
import ArrowDown from "../images/ArrowDown.svg";
import ArrowUp from "../images/ArrowUp.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MetricCard: FC<MetricCardProps> = ({
  icon,
  title,
  value,
  levels,
  bgColor,
}) => (
  <div
    className={`h-auto sm:h-[242px] lg:h-auto min-[1280px]:h-[242px] flex-1 rounded-[12px] p-4 flex flex-col items-start ${bgColor}`}
  >
    <img src={icon} alt={`${title} icon`} />
    <div className="mt-4 flex flex-col">
      <p className="text-left font-medium text-[16px] leading-[22px]">
        {title}
      </p>
      <p className="text-left font-[800] text-[30px] leading-[41px]">{value}</p>
      <p className="text-left mt-[17px] font-normal text-[14px] leading-[19px] flex items-center gap-2">
        {levels !== "Normal" && (
          <span>
            <img
              src={levels === "Higher than Average" ? ArrowUp : ArrowDown}
              alt=""
            />
          </span>
        )}
        {levels}
      </p>
    </div>
  </div>
);

const DiagnosisHistory: FC<DiagnosisHistoryProps> = ({ data }) => {
  const [filter, setFilter] = useState<FilterMonths>(6);

  const processedData = useMemo(() => {
    if (!data) return { months: [], systolic: [], diastolic: [] };
    const slicedData = data.slice(0, filter).reverse();
    return {
      months: slicedData.map(
        (item) => `${item.month.slice(0, 3)}, ${item.year}`
      ),
      systolic: slicedData.map((item) => item.blood_pressure.systolic.value),
      diastolic: slicedData.map((item) => item.blood_pressure.diastolic.value),
    };
  }, [data, filter]);

  if (!data) {
    return (
      <div className="flex flex-col items-start bg-white p-5 rounded-[16px] h-[196px] text-[#072635]">
        <h3 className="font-[800] text-left">Lab Results</h3>
        <div className="p-4 w-full flex flex-1 items-center justify-center">
          No data available
        </div>
      </div>
    );
  }

  const chartData = {
    labels: processedData.months,
    datasets: [
      {
        label: "Systolic Blood Pressure",
        data: processedData.systolic,
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Diastolic Blood Pressure",
        data: processedData.diastolic,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };

  const renderDetail = (
    title: string,
    value: number,
    levels: string,
    hasBorder = false
  ) => (
    <div
      className={`flex flex-col items-start pb-4 mb-4 ${
        hasBorder
          ? "sm:border-b sm:border-[#CBC8D4] lg:border-transparent min-[1280px]:border-[#CBC8D4]"
          : ""
      }`}
    >
      <div className="flex items-center space-x-1">
        <div
          className={`h-[14px] w-[14px] rounded-full border border-white ${
            title === "Systolic" ? "bg-[#E66FD2]" : "bg-[#8C6FE6]"
          }`}
        />
        <p className="font-bold text-[14px] leading-[19px]">{title}</p>
      </div>
      <p className="font-bold text-[22px] leading-[30px]">{value}</p>
      <p className="text-left mt-2 font-normal text-[14px] leading-[19px] flex items-center gap-2">
        {levels !== "Normal" && (
          <span>
            <img
              src={levels === "Higher than Average" ? ArrowUp : ArrowDown}
              alt=""
            />
          </span>
        )}
        {levels}
      </p>
    </div>
  );

  return (
    <div className="bg-white p-5 rounded-[16px] flex flex-col gap-y-4 items-start">
      <h3 className="font-[800] text-[24px] leading-[33px] mb-6">
        Diagnosis History
      </h3>

      <div className="bg-[#F4F0FE] rounded-[12px] p-4 flex flex-col sm:flex-row lg:flex-col min-[1280px]:flex-row justify-between items-start w-full gap-4  h-[298px]">
        <div className="space-y-5">
          <div className="flex justify-between items-center w-full">
            <p className="flex font-bold text-[14px] sm:text-[18px] leading-[24px]">
              Blood Pressure
            </p>
            <select
              className="font-normal text-[12px] sm:text-[14px] leading-[19px] flex items-center gap-4 bg-transparent outline-none"
              value={filter}
              onChange={(e) =>
                setFilter(Number(e.target.value) as FilterMonths)
              }
            >
              <option value={3}>Last 3 Months</option>
              <option value={6}>Last 6 Months</option>
              <option value={12}>Last Year</option>
              <option value={24}>All Time</option>
            </select>
          </div>
          <div
            className="blood-pressure-chart-container"
          >
            <Line data={chartData} options={options} />
          </div>
        </div>

        <div className="flex flex-row sm:flex-col lg:flex-row min-[1280px]:flex-col gap-x-4 flex-1 max-w-auto md:max-w-[258px]">
          {renderDetail(
            "Systolic",
            data[0].blood_pressure.systolic.value,
            data[0].blood_pressure.systolic.levels,
            true
          )}
          {renderDetail(
            "Diastolic",
            data[0].blood_pressure.diastolic.value,
            data[0].blood_pressure.diastolic.levels
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between self-stretch gap-[21px] mt-1">
        <MetricCard
          icon={lungs}
          title="Respiratory Rate"
          value={`${data[0].respiratory_rate.value} bpm`}
          levels={data[0].respiratory_rate.levels}
          bgColor="bg-[#E0F3FA]"
        />
        <MetricCard
          icon={temp}
          title="Temperature"
          value={`${data[0].temperature.value}°F`}
          levels={data[0].temperature.levels}
          bgColor="bg-[#FFE6E9]"
        />
        <MetricCard
          icon={heart}
          title="Heart Rate"
          value={`${data[0].heart_rate.value} bpm`}
          levels={data[0].heart_rate.levels}
          bgColor="bg-[#FFE6F1]"
        />
      </div>
    </div>
  );
};

export default DiagnosisHistory;

interface DiagnosisHistoryProps {
  data: DiagnosisHistoryItem[] | undefined;
}

interface MetricCardProps {
  icon: string;
  title: string;
  value: string;
  levels: string;
  bgColor: string;
}

type FilterMonths = 3 | 6 | 12 | 24;
