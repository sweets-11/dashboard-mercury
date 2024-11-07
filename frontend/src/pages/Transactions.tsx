import { useEffect, useState } from 'react';
import axios from 'axios';

interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    balance: number;
}
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface MyComponentProps {
    caption: string;
}


export const Transactions: React.FC<MyComponentProps> = ({ caption }) => {


    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
    const [filterType, setFilterType] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log(filterType);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/transaction`);
                setTransactions(response.data.recentTransactions.transactions);
                setFilteredTransactions(response.data.recentTransactions.transactions);
                setLoading(false);
            } catch (error) {
                setError('Error fetching transactions');
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const applyFilter = (type: string) => {
        setFilterType(type);
        setIsDropdownOpen(false);

        if (type === 'date') {
            const sortedByDate = [...transactions].sort(
                (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            );
            setFilteredTransactions(sortedByDate);
        } else if (type === 'amount') {
            const sortedByAmount = [...transactions].sort(
                (a, b) => a.amount - b.amount
            );
            setFilteredTransactions(sortedByAmount);
        } else {
            setFilteredTransactions(transactions);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1 className='text-3xl font-medium mb-5'>{caption ? caption : "Transactions"}</h1>

            <div className="relative inline-block text-left mb-4">
                <button
                    onClick={toggleDropdown}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none"
                >
                    Filter
                </button>

                {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                        <button
                            onClick={() => applyFilter('date')}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left"
                        >
                            By Date
                        </button>
                        <button
                            onClick={() => applyFilter('amount')}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left"
                        >
                            By Amount
                        </button>
                        <button
                            onClick={() => applyFilter('')}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </div>


            <Table className=' sm: w-[300px]  xl:w-[1000px]'>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredTransactions.map((transaction) => (
                        <TableRow key={transaction.id} className='cursor-pointer'>
                            <TableCell className="font-medium">{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.amount < 0 ? `(-) $${Math.abs(transaction.amount)}` : `(+) $${transaction.amount}`}</TableCell>
                            <TableCell className="text-right">${transaction.balance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}