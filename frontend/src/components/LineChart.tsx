import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
    views: {
        label: "Page Views",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;


export const Chart = () => {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("desktop");
    const [chartData, setChartData] = useState([]);
    const [displayBalance, setDisplayBalance] = useState(0);
    const [date, setDate] = useState("");
    console.log(setActiveChart);

    // Fetch data only once when the component mounts
    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/chartData`);
                const fetchedData = response.data.chartData;
                setChartData(fetchedData);

                if (fetchedData.length > 0) {
                    setDisplayBalance(fetchedData[fetchedData.length - 1].amount);
                    setDate(fetchedData[fetchedData.length - 1].date);
                }
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        };

        fetchChartData();
    }, []);


    const handleTooltipHover = (amount: number | null, currentDate: string) => {
        if (amount !== null && currentDate !== null) {
            setDisplayBalance(amount);
            setDate(currentDate)
        }
    };

    return (
        <Card className="w-[500px]">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className='text-xl'>Mercury balance</CardTitle>
                    <CardDescription className='text-md font-bold text-black'>
                        {`$ ${displayBalance}`} {/* Display balance */}
                    </CardDescription>
                    <CardDescription className='text-md font-bold text-black'>
                        {`${date}`} {/* Display balance */}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                });
                            }}
                        />

                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="amount"
                                    labelFormatter={(value, payload) => {
                                        if (payload && payload.length > 0) {
                                            const dataPoint = payload[0].payload;
                                            const amount = dataPoint?.amount;
                                            const currentDate = dataPoint?.date
                                            console.log(value);

                                            if (amount !== undefined && currentDate !== undefined) {
                                                handleTooltipHover(amount, currentDate);

                                            }

                                            return `$${amount?.toFixed(2)}`;
                                        }
                                        return "";
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={activeChart}
                            type="monotone"
                            stroke={`var(--color-${activeChart})`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};
