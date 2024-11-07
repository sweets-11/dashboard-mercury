import { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
    task: string;
    date: string;
}
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"




export const Tasks = () => {


    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/tasks`);
                setTasks(response.data.tasks);
                console.log(tasks);

                setLoading(false);
            } catch (error) {
                setError('Error fetching transactions');
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1 className='text-3xl font-medium mb-5'>Tasks</h1>
            <Table className='sm: w-[300px]  xl:w-[1000px]'>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Task</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.task}>
                            <TableCell className="text-xs font-medium w-96 cursor-pointer">{task.task}</TableCell>
                            <TableCell className="text-xs text-right">{task.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}