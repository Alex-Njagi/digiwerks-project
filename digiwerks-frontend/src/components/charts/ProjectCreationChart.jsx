import {
  Box,
  Heading,
  useTheme
} from "@chakra-ui/react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const ProjectCreationChart = ({ projects }) => {
    const theme = useTheme();

    const getMonthlyProjects = (projects) => {
        const counts = {};

        projects.forEach((project) => {
            const date = new Date(project.created_at);

            const key = `${date.getFullYear()}-${date.getMonth()}`; // sortable key

            if (!counts[key]) {
            counts[key] = 0;
            }

            counts[key]++;
        });

        return Object.keys(counts)
        .sort()
        .map((key) => {
            const [year, month] = key.split("-");
            const date = new Date(year, month);
            const monthName = date.toLocaleString("default", { month: "short" });
            return {
                month: `${monthName} ${year}`,
                signups: counts[key],
            };
        });
    };  

    const data = getMonthlyProjects(projects);

    return (
    <Box
        bg="white"
        borderRadius="xl"
        border={`4px solid ${theme.colors.brand.blue}`}
        p={5}
        boxShadow="md"
    >
        <Heading size="md" mb={4} color="brand.pink" justifySelf="center">
        Project Creation Over Time
        </Heading>

        <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
            <CartesianGrid
            strokeDasharray="3 3"
            stroke={theme.colors.brand.pastelPink}
            />

            <XAxis
            dataKey="month"
            tick={{ fill: theme.colors.brand.blue }}
            />

            <YAxis
            tick={{ fill: theme.colors.brand.blue }}
            axisLine={{ stroke: theme.colors.brand.blue }}
            tickLine={{ stroke: theme.colors.brand.blue }}
            />

            <Tooltip />

            <Line
            type="monotone"
            dataKey="signups"
            stroke={theme.colors.brand.pink}
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            />
        </LineChart>
        </ResponsiveContainer>
    </Box>
    );
};

export default ProjectCreationChart;