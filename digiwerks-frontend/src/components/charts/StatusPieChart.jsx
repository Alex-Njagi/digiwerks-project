import {
  Box,
  Heading,
  useTheme
} from "@chakra-ui/react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const StatusPieChart = ({ projects }) => {
  const theme = useTheme();

  const statusCounts = projects.reduce((acc, project) => {
    const status = project.status;

    if (!acc[status]) acc[status] = 0;
    acc[status] += 1;

    return acc;
  }, {});

  const data = Object.keys(statusCounts).map((key) => ({
    name: key,
    value: statusCounts[key],
  }));

  // 🎨 Use your theme colors
  const COLORS = [
    theme.colors.brand.pink,
    theme.colors.brand.blue,
    theme.colors.brand.pastelPink
  ];

  return (
    <Box
      bg="white"
      borderRadius="xl"
      border={`4px solid ${theme.colors.brand.blue}`}
      p={5}
      boxShadow="md"
    >
      {/* 🔹 Header */}
      <Heading size="md" mb={4} color="brand.blue" justifySelf="center">
        Project Status Distribution
      </Heading>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip />

          <Legend />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StatusPieChart;