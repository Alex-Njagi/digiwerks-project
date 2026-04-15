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

const AssetTagPieChart = ({ assets }) => {
  const theme = useTheme();

  const assetCounts = assets.reduce((acc, asset) => {
    const tag = asset.asset_tag;

    if (!acc[tag]) acc[tag] = 0;
    acc[tag] += 1;

    return acc;
  }, {});

  const data = Object.keys(assetCounts).map((key) => ({
    name: key,
    value: assetCounts[key],
  }));

  // 🎨 Use your theme colors
  const COLORS = [
    theme.colors.brand.pink,
    theme.colors.brand.blue,
    theme.colors.brand.pastelPink,
    "#5935fd",
    "#ff7998"
  ];

  return (
    <Box
      bg="white"
      borderRadius="xl"
      border={`4px solid ${theme.colors.brand.blue}`}
      p={5}
      boxShadow="md"
    >
      <Heading size="md" mb={4} color="brand.blue" justifySelf="center">
        Asset Tag Distribution
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

export default AssetTagPieChart;