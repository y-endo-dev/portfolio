"use client";

import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

interface NavigationProps {
  sections?: string[];
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Navigation({ sections }: NavigationProps) {
  const skillsets = [
    {
      name: "Frontend",
      skills: {
        HTML: 90,
        CSS: 85,
        JavaScript: 80,
        React: 75,
        "UI/UX": 70,
      },
    },
    {
      name: "Backend",
      skills: {
        "Node.js": 80,
        "Express.js": 75,
        "Database Design": 70,
        "API Development": 85,
        "Server Management": 65,
      },
    },
    {
      name: "DevOps",
      skills: {
        Git: 85,
        Docker: 70,
        "CI/CD": 75,
        "Cloud Services": 80,
        Monitoring: 65,
      },
    },
  ];

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsets.map((skillset) => (
          <div
            key={skillset.name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {skillset.name}
            </h3>
            <div className="w-full h-64">
              <Radar
                data={{
                  labels: Object.keys(skillset.skills),
                  datasets: [
                    {
                      data: Object.values(skillset.skills),
                      backgroundColor: "rgba(62, 152, 199, 0.2)",
                      borderColor: "rgba(62, 152, 199, 1)",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
