import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const DonutChart = ({ aiScore, humanScore }) => {
  const data = [
    { name: 'AI-Generated', value: aiScore },
    { name: 'Human-Written', value: humanScore },
  ];

  const COLORS = ['#3B82F6', '#10B981']; // Blue and Green

  return (
    <div className="w-full h-64">
      <h3 className="text-lg font-medium mb-2 text-center text-gray-700">Authorship Probability</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${(value * 100).toFixed(0)}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
