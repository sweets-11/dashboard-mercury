import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import CustomCard from "@/components/CustomCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface ChartData {
    date: string;
    amount: number;
}

const chartConfig = {
    views: { label: "Page Views" },
    desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
} as const;

export const Chart: React.FC = () => {
    const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>("desktop");
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [displayBalance, setDisplayBalance] = useState<number>(0);
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get<{ chartData: ChartData[] }>(`${import.meta.env.VITE_SERVER}/api/v1/chartData`);
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

    const handleTooltipHover = (amount: number, currentDate: string) => {
        setDisplayBalance(amount);
        setDate(currentDate);
    };

    return (
        <CustomCard title="Mercury balance" extraHeaderContent={
            <>
                <div className='text-md font-bold text-black'>{`$ ${displayBalance}`}</div>
                <div className='text-md font-bold text-black'>{date}</div>
            </>
        }>
            <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="date" tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                    }} />
                    <ChartTooltip content={
                        <ChartTooltipContent
                            className="w-[150px]"
                            nameKey="amount"
                            labelFormatter={(value, payload) => {
                                if (payload && payload.length > 0) {
                                    const dataPoint = payload[0].payload as ChartData;
                                    handleTooltipHover(dataPoint.amount, dataPoint.date);
                                    return `$${dataPoint.amount.toFixed(2)}`;
                                }
                                return "";
                            }}
                        />
                    } />
                    <Line dataKey={activeChart} type="monotone" stroke={`var(--color-${activeChart})`} strokeWidth={2} dot={false} />
                </LineChart>
            </ChartContainer>
        </CustomCard>
    );
};
