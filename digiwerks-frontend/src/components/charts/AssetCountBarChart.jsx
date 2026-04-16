import { Box, Heading, useTheme } from "@chakra-ui/react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AssetCountBarChart = ({ stages }) => {
  const theme = useTheme();

  const data = stages.map((stage) => ({
    name: stage.stage_name,
    assets: stage.assets.length,
  }));

  return (
    <Box
      bg="white"
      borderRadius="xl"
      border={`4px solid ${theme.colors.brand.blue}`}
      p={5}
      boxShadow="md"
    >
      <Heading size="md" mb={4} color="brand.blue" justifySelf="center">
        Asset Distribution Analysis
      </Heading>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={theme.colors.brand.pastelPink}
          />

          <XAxis
            dataKey="name"
            tick={{ fill: theme.colors.brand.blue, fontSize: 12 }}
            tickFormatter={(value) => value.slice(0, 10) + "..."}
            angle={0}
            textAnchor="middle"
          />

          <YAxis
            tick={{ fill: theme.colors.brand.blue }}
            axisLine={{ stroke: theme.colors.brand.blue }}
            tickLine={{ stroke: theme.colors.brand.blue }}
          />

          <Tooltip />

          <Bar
            dataKey="assets"
            fill={theme.colors.brand.pink}
            radius={[6, 6, 0, 0]}
            label
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default AssetCountBarChart;
